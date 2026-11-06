#!/usr/bin/env node
// Empaqueta todo el material de la sesión en un zip para el alumnado: las
// presentaciones en PDF (las tres de este repo y, si está compuesta, las cuatro
// de la edición de Claude), los ficheros de práctica y el compañero, que
// funciona sin conexión. Sale en documents/companion/ y el compañero lo enlaza
// desde "Primeros pasos" (strings.firstSteps del config).
// Uso: npm run material (tarda un par de minutos: exporta los decks con Chrome).
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync, rmSync, statSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, basename } from 'node:path'
import JSZip from 'jszip'

const ZIP_NAME = 'material-muibal-ia-2026.zip'
const OUT = join('documents/companion', ZIP_NAME)
const config = JSON.parse(readFileSync('scripts/companion.config.json', 'utf8'))
const CLAUDE = '../zenital-claude-training/.build/bsm-muibal-ia/presentations'
const DECKS = [
  ['presentations/muibal-ia-00-sesion', '0-la-sesion-y-el-tfm.pdf'],
  ['presentations/muibal-ia-01-ia-generativa', '1-que-es-la-ia-generativa.pdf'],
  ['presentations/muibal-ia-02-ia-para-investigar', '2-la-ia-para-investigar.pdf'],
  [`${CLAUDE}/02-claude-plataforma`, '3-claude-la-plataforma.pdf'],
  [`${CLAUDE}/03-proyectos-artefactos`, '4-claude-proyectos-y-artefactos.pdf'],
  [`${CLAUDE}/04-cowork`, '5-claude-cowork.pdf'],
  [`${CLAUDE}/05-conectores-skills`, '6-claude-conectores-y-skills.pdf'],
].filter(([d]) => {
  if (existsSync(join(d, 'index.html'))) return true
  console.warn(`[material] aviso: falta ${d} (compón antes la edición de Claude con su build-client); el zip sale sin ese PDF`)
  return false
})

const tmp = mkdtempSync(join(tmpdir(), 'muibal-ia-material-'))
try {
  console.log('[material] exportando las presentaciones a PDF…')
  execFileSync('node', ['brand/presentation/tools/export-pdf.mjs', ...DECKS.map(([d]) => d), '--bleed', '--out', tmp], { stdio: 'inherit' })

  const zip = new JSZip()
  const date = new Date(config.zipDate ?? Date.now())
  const add = (path, data) => zip.file(path, data, { date })
  for (const [dir, name] of DECKS) add(`presentaciones/${name}`, readFileSync(join(tmp, `${basename(dir)}.pdf`)))
  for (const f of config.practiceFiles) add(`ficheros-practica/${basename(f.path)}`, readFileSync(f.path))
  add('companero-de-la-sesion.html', readFileSync('documents/companion/index.html'))
  add('LEEME.txt', [
    'LA IA APLICADA A INVESTIGAR MERCADOS · Máster Universitario en Negocios Internacionales · UPF Barcelona School of Management',
    '',
    'Todo el material de la sesión, para guardarlo: los enlaces al portal no duran para siempre.',
    '',
    '  presentaciones/               Las presentaciones en PDF, con todas las animaciones abiertas.',
    '  ficheros-practica/            Los ficheros de los ejercicios y de las demos. Su LEEME.txt explica cada uno.',
    '  companero-de-la-sesion.html   El compañero: ejercicios, demos y prompts. Se abre con doble clic, sin conexión.',
    '',
    `Generado el ${new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}.`,
    '',
  ].join('\r\n'))

  const buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: { level: 6 } })
  writeFileSync(OUT, buf)
  console.log(`[material] ${OUT} · ${(statSync(OUT).size / 1024 / 1024).toFixed(1)} MB`)
} finally {
  rmSync(tmp, { recursive: true, force: true })
}
