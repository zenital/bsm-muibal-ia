#!/usr/bin/env node
// Copia aquí los ficheros de las seis demos de Claude, que viven en la edición
// de cliente del curso de Claude: ../zenital-claude-training/clients/bsm-muibal-ia/demos/.
// Allí son la fuente; aquí se copian para que el compañero los ofrezca:
//
//   demos/demo-N-<slug>/            -> ficheros-practica/demo-N-<slug>/
//                                      (su README.md es el guion del formador y
//                                      solo sale en el compañero del formador)
//   demos/skills/revisor-capitulos-tfm.zip -> ficheros-practica/skill-revisor-capitulos-tfm.zip
//
// Los zips de cada carpeta los hace scripts/zips-practica.mjs. Si el repo del
// curso de Claude no está al lado, avisa y no toca nada (la copia que ya hay
// sigue valiendo). Con --check solo comprueba que la copia está al día.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, rmSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const CHECK = process.argv.includes('--check')
const SRC = join(root, '../zenital-claude-training/clients/bsm-muibal-ia/demos')
const OUT = join(root, 'ficheros-practica')

if (!existsSync(SRC)) {
  console.warn(`[sync-demos-claude] aviso: no está ${relative(root, SRC)}; se deja la copia actual`)
  process.exit(0)
}

const walk = (dir, base = '') => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(dir, e.name), `${base}${e.name}/`) : [`${base}${e.name}`])

const files = new Map()
const demoDirs = readdirSync(SRC).filter((n) => /^demo-\d+-/.test(n) && statSync(join(SRC, n)).isDirectory())
for (const d of demoDirs) for (const rel of walk(join(SRC, d))) files.set(`${d}/${rel}`, readFileSync(join(SRC, d, rel)))
files.set('skill-revisor-capitulos-tfm.zip', readFileSync(join(SRC, 'skills/revisor-capitulos-tfm.zip')))

const stale = []
const removed = []
// Lo que esta copia posee: las carpetas demo-N-* y el zip de la skill. Lo que
// sobra dentro de ellas (un fichero que ya no está en la fuente) se borra.
for (const d of readdirSync(OUT).filter((n) => /^demo-\d+-/.test(n) && statSync(join(OUT, n)).isDirectory())) {
  for (const rel of walk(join(OUT, d))) {
    const key = `${d}/${rel}`
    if (files.has(key)) continue
    removed.push(key)
    if (!CHECK) rmSync(join(OUT, key))
  }
}
for (const [rel, buf] of files) {
  const dest = join(OUT, rel)
  if (existsSync(dest) && readFileSync(dest).equals(buf)) continue
  stale.push(rel)
  if (!CHECK) { mkdirSync(dirname(dest), { recursive: true }); writeFileSync(dest, buf) }
}
const n = stale.length + removed.length
if (CHECK && n) {
  console.error(`[sync-demos-claude] ${n} fichero(s) desactualizado(s) o sobrante(s): ejecuta npm run build`)
  for (const p of [...stale, ...removed]) console.error(`  ${p}`)
  process.exit(1)
}
console.log(`[sync-demos-claude] ${files.size} ficheros de ${demoDirs.length} demos; ${CHECK ? 'al día' : `${stale.length} escritos, ${removed.length} borrados`}`)
