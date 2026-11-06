#!/usr/bin/env node
// Lleva la capa BSM al deck 01, que compone common/tools/sync.mjs desde
// el módulo común. Ese deck no se edita a mano y sus overrides no pueden tocar
// index.html, css/ ni js/ (regla de common/README.md), así que la capa viaja
// en common-overrides/01-ia-generativa/archivos/, que se copia encima del deck
// compuesto:
//
//   archivos/assets/bsm-theme.css   copia de la maestra
//                                          assets/bsm/bsm-theme.css
//                                          con las url() reescritas: la hoja
//                                          vive en assets/ y no en css/
//   archivos/assets/bsm-logo-*.svg  los dos logos que usa la capa
//   archivos/fonts/                        las fuentes autoalojadas
//   archivos/assets/deck-presenter.js      la vista del presentador del kit
//                                          (tecla N, notas); el módulo común
//                                          no la trae y js/ no se toca
//   archivos/qa.config.json                el qa.config.json del módulo común
//                                          con las clases de la capa en
//                                          classAllowlist: qa-deck solo lee
//                                          las capas enlazadas desde css/, y
//                                          esta vive en assets/. Las clases se
//                                          sacan de los selectores de la
//                                          maestra (las que no están ya en los
//                                          CSS canónicos), no de una lista
//                                          a mano.
//
// Lo que este script deja de generar se borra: los ficheros de fonts/ y los
// assets/bsm-* que ya no salen de la maestra. El resto de archivos/
// (capturas propias del curso, por ejemplo en assets/img/) no se toca.
//
// Además avisa (sin fallar) si la copia de la capa de algún otro deck
// (presentations/muibal-ia-*/css/bsm-theme.css) ya no empieza por la
// maestra: esas copias se refrescan a mano, conservando sus bloques propios
// del final.
//
// _textos.json enlaza la hoja después de deck-components.css y cambia Google
// Fonts por fonts/fonts.css. Se ejecuta ANTES de common/tools/sync.mjs (ver
// package.json). Con --check solo comprueba que la copia está al día.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const CHECK = process.argv.includes('--check')
const OUT = join(root, 'common-overrides/01-ia-generativa/archivos')
const MASTER = join(root, 'assets/bsm/bsm-theme.css')

const HEADER = `/* GENERADO por scripts/sync-theme-common.mjs desde
   assets/bsm/bsm-theme.css. No se edita a mano: cambia la
   maestra y ejecuta npm run build. */\n`

function themeCopy() {
  const css = readFileSync(MASTER, 'utf8')
  const rewritten = css.replace(/url\((["']?)\.\.\/assets\//g, 'url($1')
  if (/url\((["']?)\.\.\//.test(rewritten)) throw new Error('la maestra tiene una url() fuera de ../assets/ que no se sabe reescribir')
  return HEADER + rewritten
}

const files = new Map()
files.set('assets/bsm-theme.css', Buffer.from(themeCopy(), 'utf8'))
for (const logo of ['bsm-logo-navy.svg', 'bsm-logo-footer.svg', 'bsm-main-logo.svg'])
  files.set(`assets/${logo}`, readFileSync(join(root, 'assets/bsm', logo)))
files.set('assets/deck-presenter.js', readFileSync(join(root, 'brand/presentation/js/deck-presenter.js')))
for (const f of readdirSync(join(root, 'assets/fonts')))
  files.set(`fonts/${f}`, readFileSync(join(root, 'assets/fonts', f)))

// Las clases que define la capa: las de sus selectores que no están ya en los
// CSS canónicos. Se quitan antes comentarios, cadenas y url() para que
// "bsm-logo-navy.svg" no cuente como la clase .svg.
function classesOf(css) {
  const clean = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/url\([^)]*\)/g, '')
    .replace(/"[^"]*"|'[^']*'/g, '""')
  const out = new Set()
  for (const m of clean.matchAll(/(?:^|[{}])([^{}]+)\{/g))
    for (const c of m[1].matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) out.add(c[1])
  return out
}
const canonical = new Set([
  ...classesOf(readFileSync(join(root, 'brand/presentation/css/deck-shell.css'), 'utf8')),
  ...classesOf(readFileSync(join(root, 'brand/presentation/css/deck-components.css'), 'utf8')),
])
const THEME_CLASSES = [...classesOf(readFileSync(MASTER, 'utf8'))].filter((c) => !canonical.has(c)).sort()
const qa = JSON.parse(readFileSync(join(root, 'common/modulos/01-ia-generativa/qa.config.json'), 'utf8'))
qa.classAllowlist = [...new Set([...(qa.classAllowlist ?? []), ...THEME_CLASSES])]
files.set('qa.config.json', Buffer.from(JSON.stringify(qa, null, 2) + '\n', 'utf8'))

const stale = []
const removed = []
// Lo generado que ya no sale de la maestra: solo en fonts/ y assets/bsm-*.
const owned = (rel) => rel.startsWith('fonts/') || /^assets\/bsm-[^/]+$/.test(rel)
function walk(dir, base = '') {
  if (!existsSync(dir)) return []
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name), `${base}${e.name}/`) : [`${base}${e.name}`])
}
for (const rel of walk(OUT)) {
  if (files.has(rel) || !owned(rel)) continue
  removed.push(relative(root, join(OUT, rel)).split('\\').join('/'))
  if (!CHECK) rmSync(join(OUT, rel))
}
for (const [rel, buf] of files) {
  const dest = join(OUT, rel)
  const current = existsSync(dest) ? readFileSync(dest) : null
  if (current && current.equals(buf)) continue
  stale.push(relative(root, dest).split('\\').join('/'))
  if (!CHECK) {
    mkdirSync(dirname(dest), { recursive: true })
    writeFileSync(dest, buf)
  }
}

// Las copias de la capa en los demás decks tienen que empezar por la maestra.
const lf = (t) => t.replace(/\r\n/g, '\n')
const masterLf = lf(readFileSync(MASTER, 'utf8'))
const drift = []
const presDir = join(root, 'presentations')
for (const d of existsSync(presDir) ? readdirSync(presDir) : []) {
  const copy = join(presDir, d, 'css/bsm-theme.css')
  if (existsSync(copy) && !lf(readFileSync(copy, 'utf8')).startsWith(masterLf)) drift.push(relative(root, copy).split('\\').join('/'))
}
if (drift.length) {
  console.warn(`[sync-theme-common] aviso: ${drift.length} copia(s) de la capa ya no empiezan por la maestra; copiad la maestra encima y conservad los bloques de "BLOQUES DE ESTE DECK":`)
  for (const p of drift) console.warn(`  ${p}`)
}

if (CHECK) {
  if (stale.length || removed.length) {
    console.error(`[sync-theme-common] ${stale.length + removed.length} fichero(s) desactualizado(s) o sobrante(s): ejecutad npm run build`)
    for (const p of [...stale, ...removed]) console.error(`  ${p}`)
    process.exit(1)
  }
  console.log(`[sync-theme-common] al día (${files.size} ficheros)`)
} else {
  console.log(`[sync-theme-common] ${files.size} ficheros comprobados, ${stale.length} escritos, ${removed.length} borrados`)
  for (const p of stale) console.log(`  ${p}`)
  for (const p of removed) console.log(`  borrado: ${p}`)
}
