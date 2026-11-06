#!/usr/bin/env node
// Zip de trabajo para Luis Esteve, si prefiere editar fuera de git. Lleva solo
// los ficheros fuente que puede tocar (los decks 00 y 02, la guía del
// compañero, los ficheros de práctica y las notas del formador) y un
// VERSION.txt con el commit del que sale. Cuando lo devuelve, se descomprime en
// una rama creada desde ese commit y se fusiona con git: así se ve qué ha
// cambiado él y qué ha cambiado aquí mientras tanto.
// El deck 01 no va: lo compone common/tools/sync.mjs y sus cambios se hacen en
// common-overrides/01-ia-generativa/ (que sí va). Los CSS y JS canónicos de los
// decks tampoco se tocan.
// Uso: npm run material-luis  ->  documents/material-luis-<commit>.zip
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import JSZip from 'jszip'

const git = (...a) => execFileSync('git', a, { encoding: 'utf8' }).trim()
const commit = git('rev-parse', '--short', 'HEAD')
const dirty = git('status', '--porcelain')
if (dirty) console.warn('[material-luis] aviso: hay cambios sin commit; VERSION.txt apunta al último commit, que no los lleva')

const INCLUDE = [
  'presentations/muibal-ia-00-sesion/index.html',
  'presentations/muibal-ia-00-sesion/css/bsm-theme.css',
  'presentations/muibal-ia-02-ia-para-investigar/index.html',
  'presentations/muibal-ia-02-ia-para-investigar/css/bsm-theme.css',
  'common-overrides/01-ia-generativa',
  'documents/guia-prompts/README.md',
  'ficheros-practica',
  'internal/plan-sesion.md',
]
const SKIP = /(^|\/)(\.|node_modules|notas-de-las-slides)/

function walk(p) {
  if (statSync(p).isFile()) return [p]
  return readdirSync(p).flatMap((n) => walk(join(p, n).split('\\').join('/')))
}

const zip = new JSZip()
const files = INCLUDE.flatMap(walk).filter((f) => !SKIP.test(f))
for (const f of files) zip.file(f, readFileSync(f))
zip.file('VERSION.txt', [
  `commit ${commit}`,
  `generado ${new Date().toISOString().slice(0, 10)}`,
  '',
  'Edita solo estos ficheros y devuelve el zip entero. No cambies nombres de carpetas.',
  'En los decks, cambia el texto de las <section> y las notas <aside class="notes">; no toques css/deck-*.css ni js/.',
  'El deck 01 se cambia en common-overrides/01-ia-generativa/ (_textos.json o los .html de cada slide).',
  '',
].join('\r\n'))
const out = `documents/material-luis-${commit}.zip`
writeFileSync(out, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }))
console.log(`[material-luis] ${out} · ${files.length} ficheros · commit ${commit}`)
