#!/usr/bin/env node
// Genera los zips de ficheros-practica que el compañero ofrece en un solo botón:
// las fuentes de Envoltia (ejercicio 2) y una carpeta por demo de Claude
// (ficheros-practica/demo-N-*/, sin su README.md, que es el guion del
// formador). Zips deterministas (fecha fija), para que --check tenga sentido.
// Una demo sin ficheros propios (solo README) no tiene zip.
// node scripts/zips-practica.mjs [--check]
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import JSZip from 'jszip'

const CHECK = process.argv.includes('--check')
const FIXED = new Date('2026-11-16T00:00:00Z')
const P = 'ficheros-practica'
const walk = (dir, base = '') => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(dir, e.name), `${base}${e.name}/`) : [`${base}${e.name}`])

const ZIPS = [
  { out: `${P}/envoltia-fuentes.zip`, dir: `${P}/envoltia-fuentes`, prefix: 'envoltia-fuentes/' },
  ...readdirSync(P).filter((n) => /^demo-\d+-/.test(n) && statSync(join(P, n)).isDirectory())
    .map((n) => ({ out: `${P}/${n}.zip`, dir: `${P}/${n}`, prefix: `${n}/` })),
]
let stale = 0
let made = 0
for (const z of ZIPS) {
  const entries = walk(z.dir).filter((f) => !f.split('/').some((s) => s.startsWith('.')) && f !== 'README.md').sort()
  if (!entries.length) continue
  made++
  const zip = new JSZip()
  for (const f of entries) zip.file(z.prefix + f, readFileSync(join(z.dir, f)), { date: FIXED, createFolders: false })
  const buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', platform: 'UNIX' })
  if (existsSync(z.out) && Buffer.compare(readFileSync(z.out), buf) === 0) continue
  stale++
  if (!CHECK) writeFileSync(z.out, buf)
  console.log(`[zips-practica] ${CHECK ? 'desactualizado' : 'escrito'}: ${z.out}`)
}
console.log(`[zips-practica] ${made} zips, ${stale} ${CHECK ? 'desactualizado(s)' : 'escrito(s)'}`)
if (CHECK && stale) process.exit(1)
