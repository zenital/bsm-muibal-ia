// Reúne las notas del orador de los tres decks en un guion más del cuaderno
// del formador: ficheros-practica/notas-de-las-slides/README.md. Ese fichero
// se genera; no se edita a mano. Con --check solo comprueba que está al día.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const CHECK = process.argv.includes('--check')
const OUT = join(root, 'ficheros-practica/notas-de-las-slides/README.md')

const DECKS = [
  ['muibal-ia-00-sesion', 'Apertura y cierre · La sesión y el TFM con IA'],
  ['muibal-ia-01-ia-generativa', 'Qué es la IA generativa'],
  ['muibal-ia-02-ia-para-investigar', 'La IA para investigar: prompts, documentos y agentes'],
]

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')

// De HTML de notas a Markdown sencillo: párrafos, listas, cursiva y negrita.
function toMarkdown(html) {
  return decode(
    html
      .replace(/<li[^>]*>/g, '\n- ')
      .replace(/<\/(p|ul|ol)>/g, '\n\n')
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<\/?(em|i)>/g, '*')
      .replace(/<\/?(strong|b)>/g, '**')
      .replace(/<[^>]+>/g, '')
  )
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const parts = [
  '# Notas de las slides',
  '',
  'Las notas del orador de los seis decks, en orden. Es lo mismo que se ve en la vista del orador (tecla N en el deck); aquí se puede leer entero antes de clase. Este texto se genera con `npm run build`: para cambiar una nota, cambiadla en el deck.',
  '',
  'Actualizado el 31/10/2026.',
]
let total = 0
for (const [folder, title] of DECKS) {
  const deckIndex = join(root, 'presentations', folder, 'index.html')
  // Mientras los decks se construyen, uno que aún no existe no rompe el guion.
  if (!existsSync(deckIndex)) { parts.push('', `## ${title}`, '', 'Este deck todavía no existe.'); continue }
  const html = readFileSync(deckIndex, 'utf8')
  const notes = []
  for (const m of html.matchAll(/<section class="slide[^"]*"[^>]*data-slide="(\d+)"[^>]*data-title="([^"]*)"[\s\S]*?<\/section>/g)) {
    const aside = m[0].match(/<aside class="notes"[^>]*>([\s\S]*?)<\/aside>/)
    if (aside) notes.push(`### ${m[1]} · ${decode(m[2])}\n\n${toMarkdown(aside[1])}`)
  }
  total += notes.length
  parts.push('', `## ${title}`, '', notes.length ? notes.join('\n\n') : 'Este deck no tiene notas.')
}
const md = parts.join('\n') + '\n'

if (CHECK) {
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : ''
  if (current !== md) {
    console.error('[notas-slides] ficheros-practica/notas-de-las-slides/README.md no está al día: ejecutad npm run build')
    process.exit(1)
  }
  console.log(`[notas-slides] al día (${total} notas)`)
} else {
  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, md)
  console.log(`[notas-slides] ${total} notas escritas en ficheros-practica/notas-de-las-slides/README.md`)
}
