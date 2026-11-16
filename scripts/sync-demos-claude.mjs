#!/usr/bin/env node
// Copia aquí los ficheros de las seis demos de Claude, que viven en la edición
// de cliente del curso de Claude (../zenital-claude-training, rama publicada
// client/bsm-muibal-ia, carpeta demos/). Allí son la fuente; aquí se copian
// para que el compañero los ofrezca:
//
//   demos/demo-N-<slug>/            -> ficheros-practica/demo-N-<slug>/
//                                      (su README.md es el guion del formador y
//                                      solo sale en el compañero del formador)
//   demos/skills/revisor-capitulos-tfm.zip -> ficheros-practica/skill-revisor-capitulos-tfm.zip
//
// Los zips de cada carpeta los hace scripts/zips-practica.mjs.
//
// Se lee de la rama publicada client/bsm-muibal-ia (origin), no de la carpeta
// de trabajo: así da igual en qué rama esté ese repo cuando se construye. Antes
// de leer hace git fetch de esa rama; sin conexión usa la última que se bajó.
// Si el repo del curso de Claude no está al lado o no tiene la rama, avisa y
// no toca nada (la copia que ya hay sigue valiendo). Con --check solo comprueba
// que la copia está al día.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, rmSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const CHECK = process.argv.includes('--check')
const REPO = join(root, '../zenital-claude-training')
const BRANCH = 'client/bsm-muibal-ia'
const REF = `origin/${BRANCH}`
const PREFIX = 'demos/'   // en la rama publicada, la edición compuesta tiene las demos en la raíz
const OUT = join(root, 'ficheros-practica')

const git = (args, opts = {}) => execFileSync('git', ['-C', REPO, ...args], { maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'], ...opts })

if (!existsSync(join(REPO, '.git'))) {
  console.warn(`[sync-demos-claude] aviso: no está ${relative(root, REPO)}; se deja la copia actual`)
  process.exit(0)
}
try {
  git(['fetch', '--quiet', 'origin', `${BRANCH}:refs/remotes/${REF}`])
} catch {
  console.warn(`[sync-demos-claude] aviso: no se ha podido actualizar ${REF}; se usa la última copia bajada`)
}
let commit
try {
  commit = git(['rev-parse', '--verify', `${REF}^{commit}`], { encoding: 'utf8' }).trim()
} catch {
  console.warn(`[sync-demos-claude] aviso: ${relative(root, REPO)} no tiene la rama ${REF}; se deja la copia actual`)
  process.exit(0)
}

const walk = (dir, base = '') => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(dir, e.name), `${base}${e.name}/`) : [`${base}${e.name}`])

// Ficheros de la rama, leídos tal cual están en git (sin conversión de finales de línea).
const paths = git(['ls-tree', '-r', '-z', '--name-only', commit, '--', PREFIX], { encoding: 'utf8' }).split('\0').filter(Boolean)
const blob = (p) => git(['cat-file', 'blob', `${commit}:${p}`])

const files = new Map()
const demoDirs = new Set()
for (const p of paths) {
  const rel = p.slice(PREFIX.length)
  const m = rel.match(/^(demo-\d+-[^/]+)\//)
  if (!m) continue
  demoDirs.add(m[1])
  files.set(rel, blob(p))
}
const SKILL = `${PREFIX}skills/revisor-capitulos-tfm.zip`
if (!paths.includes(SKILL)) {
  console.error(`[sync-demos-claude] falta ${SKILL} en ${REF}`)
  process.exit(1)
}
files.set('skill-revisor-capitulos-tfm.zip', blob(SKILL))

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
console.log(`[sync-demos-claude] ${files.size} ficheros de ${demoDirs.size} demos (${REF}, ${commit.slice(0, 7)}); ${CHECK ? 'al día' : `${stale.length} escritos, ${removed.length} borrados`}`)
