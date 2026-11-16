#!/usr/bin/env node
// Construye el compañero con brand/documents/tools/build-companion.mjs y deja
// las dos variantes SOLO con enlaces compartidos.
//
// Por qué: el builder del kit da a la variante del formador enlaces a la vista
// interna del portal (/v/<slug>/), que solo abre el staff de zenital. El
// formador de esta sesión, Luis Esteve, no es staff, así que su variante
// también tiene que llevar los enlaces /share/<token>. El kit no se toca
// (CLAUDE.md), así que este script construye en una carpeta temporal y
// reescribe cada /v/<slug>/ con el enlace compartido de scripts/portal-share-map.json.
//
// Un slug sin token no se puede reescribir: el script avisa y, con --strict
// (lo usa --check), falla. Antes de registrar las piezas en el portal el
// compañero se construye igual, con el aviso; después, el check exige cero /v/.
//
// Uso: node scripts/companion.mjs [--check] [--strict]
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const CHECK = process.argv.includes('--check')
const STRICT = CHECK || process.argv.includes('--strict')
const CONFIG_PATH = join(root, 'scripts/companion.config.json')
const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'))
const shareMap = JSON.parse(readFileSync(join(root, config.shareMapPath), 'utf8'))
const OUTS = [config.outDir, config.outDirTrainer]

const tmp = mkdtempSync(join(tmpdir(), 'muibal-ia-companion-'))
let failed = false
try {
  const tmpConfig = { ...config, outDir: join(tmp, 'a'), outDirTrainer: join(tmp, 'f') }
  const tmpConfigPath = join(tmp, 'companion.config.json')
  writeFileSync(tmpConfigPath, JSON.stringify(tmpConfig, null, 2))
  execFileSync('node', ['brand/documents/tools/build-companion.mjs', '--config', tmpConfigPath], { cwd: root, stdio: 'inherit' })

  const internal = new RegExp(`${config.portalBase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/v/([a-z0-9-]+)/`, 'g')
  const missing = new Set()
  const rewrite = (html) => html.replace(internal, (m, slug) => {
    const token = shareMap[slug]
    if (!token) { missing.add(slug); return m }
    return `${config.portalBase}/share/${token}`
  })

  // El zip con todo el material (npm run material) solo vive junto al compañero
  // del alumnado. La variante del formador lo enlaza por el enlace compartido
  // de ese compañero; si no, el botón da 404.
  const ZIP = 'material-muibal-ia-2026.zip'
  const studentToken = shareMap['bsm-muibal-ia-companion']
  const zipRewrite = (html) => {
    if (!html.includes(`href="${ZIP}"`)) return html
    if (!studentToken) { missing.add('bsm-muibal-ia-companion'); return html }
    return html.replaceAll(`href="${ZIP}"`, `href="${config.portalBase}/share/${studentToken}/${ZIP}"`)
  }

  let stale = 0
  for (const [i, out] of OUTS.entries()) {
    const src = join(tmp, i === 0 ? 'a' : 'f')
    for (const name of readdirSync(src)) {
      let buf = readFileSync(join(src, name))
      if (name.endsWith('.html')) buf = Buffer.from((i === 0 ? (h) => h : zipRewrite)(rewrite(buf.toString('utf8'))), 'utf8')
      const dest = join(root, out, name)
      if (existsSync(dest) && readFileSync(dest).equals(buf)) continue
      stale++
      if (CHECK) { console.error(`[companion] desactualizado: ${out}/${name}`); continue }
      mkdirSync(join(root, out), { recursive: true })
      writeFileSync(dest, buf)
    }
  }
  if (missing.size) {
    const msg = `[companion] ${missing.size} slug(s) sin enlace compartido en ${config.shareMapPath}: ${[...missing].join(', ')}`
    if (STRICT) { console.error(msg + '. El compañero no puede llevar enlaces /v/: registra las piezas y añade sus tokens.'); failed = true }
    else console.warn(msg + ' (siguen en /v/ hasta que se registren)')
  }
  if (CHECK && stale) failed = true
  console.log(`[companion] ${CHECK ? (stale ? `${stale} fichero(s) desactualizado(s): ejecuta npm run build` : 'al día') : `${stale} fichero(s) escrito(s)`}; enlaces internos reescritos a compartidos en las dos variantes`)
} finally {
  rmSync(tmp, { recursive: true, force: true })
}
if (failed) process.exit(1)
