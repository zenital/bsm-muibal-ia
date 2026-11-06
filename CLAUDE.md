# bsm-muibal-ia

Sesión "La IA aplicada a investigar mercados" del Máster Universitario en Negocios Internacionales (MUIBAL) de la UPF Barcelona School of Management (BSM). Formador: **Luis Esteve Elfau** (consultor y formador en IA, profesor asociado de la UPC y colaborador de la UOC; no es staff de zenital). Una sesión de 4 horas, lunes 16/11/2026, unas 40 personas. Todo el material en castellano. Material preparado por zenital (Manel Vericat).

El hilo de la sesión es el **TFM** de cada estudiante: la IA aplicada a investigar mercados, de la pregunta de investigación a la defensa.

## Regla número uno: no repetir MUIBAL

Las sesiones de Manel en `../bsm-muibal` ya cubren encuestas, análisis de encuestas, codificar reseñas con IA, Google Analytics, dashboards de ventas, Google Trends, vigilancia de la competencia (RSS, alertas, tareas programadas), elegir país (CAGE, Trade Map), TAM, SAM y SOM, paneles sintéticos, entrevistas moderadas por IA y la verificación de un dato con la ficha de fuente (Uso 2). **Nada de eso se repite aquí**, ni el caso uniwell, ni Salnitre, ni Marta Soler. Antes de añadir un ejemplo o un ejercicio, compruébalo contra `../bsm-muibal/documents/guia-prompts/README.md` y los decks de `../bsm-muibal/presentations/`.

El caso es **el TFM de cada persona**. Para quien aún no tiene tema, el caso de reserva es **Envoltia** (ficticia): una pyme de Sabadell que fabrica envases compostables para alimentación y quiere saber qué valoran los compradores B2B europeos de un proveedor de envases compostables. Todo dato de Envoltia se marca como ficticio.

## Qué hay aquí

- `presentations/muibal-ia-00-sesion/` apertura y cierre: Luis, la sesión, el compañero y el flujo del TFM con IA.
- `presentations/muibal-ia-01-ia-generativa/` el módulo 0 común (Qué es la IA generativa). No se edita a mano: lo compone `common/tools/sync.mjs` desde `zenital-training-common` con `common-overrides/01-ia-generativa/`.
- `presentations/muibal-ia-02-ia-para-investigar/` prompts, documentos (RAG) e investigación profunda, con los ejercicios 1 a 3.
- La parte de Claude (cuatro decks y seis demos) es una edición de cliente del curso de Claude: `../zenital-claude-training/clients/bsm-muibal-ia/`, publicada desde la rama `client/bsm-muibal-ia`. Sus ficheros de demo se copian aquí con `scripts/sync-demos-claude.mjs`.
- `documents/guia-prompts/README.md` la fuente del compañero. `documents/companion/` y `documents/companion-formador/` se generan; no se editan a mano.
- `ficheros-practica/` los ficheros que se descargan desde el compañero. Las subcarpetas con `README.md` son guiones del formador y solo salen en el compañero del formador.
- `internal/` notas del formador. No se entrega.

## Reglas de marca

- Sistema de marca zenital en `./brand` (submódulo de `zenital/zenital-brand`). Decks: `brand/presentation/style-presentation.md`. Documentos: `brand/documents/style-documents.md`. Compañero: `brand/documents/companion-format.md`. Refresca con `/bump-brand`.
- **Nunca modifiques nada dentro de `brand/` ni de `common/`**, ni los CSS/JS canónicos copiados a un deck (`css/deck-shell.css`, `css/deck-components.css`, `js/deck-runtime.js`, salvo las constantes por deck del runtime).
- Capa BSM: crimson `#C8102E` (oscuro `#9A0C23`) en lugar del ámbar zenital, vía `css/bsm-theme.css` cargado después de los canónicos. Fuente maestra: `assets/bsm/bsm-theme.css`; los bloques propios de un deck van al final de su copia. Logos en `assets/bsm/`. Documentos: `scripts/templates/bsm-docs.css`.
- Voz zenital: "zenital" siempre en minúscula, sin emoji, sin guiones largos ni semilargos en prosa, frase en mayúscula inicial, descriptivo y no publicitario, español nativo. Nunca "coger" (público latinoamericano). Una afirmación de producto que no sea segura se escribe "TODO: verificar ...".
- Herramientas: los ejercicios 1 a 3 valen en ChatGPT, Claude, Gemini y Copilot, también en plan gratuito; las demos de Claude dicen qué plan necesitan. Nunca datos personales en una herramienta externa.

## Portal

Cliente BSM, sección MUIBAL. **Solo enlaces compartidos**: Luis no es staff de zenital, así que el compañero no lleva enlaces `/v/` en ninguna variante que él reciba. Slugs: `bsm-muibal-ia-00-sesion`, `bsm-muibal-ia-01-ia-generativa`, `bsm-muibal-ia-02-ia-para-investigar`, `bsm-muibal-ia-03-claude-plataforma`, `bsm-muibal-ia-04-proyectos-artefactos`, `bsm-muibal-ia-05-cowork`, `bsm-muibal-ia-06-conectores-skills`, `bsm-muibal-ia-companion`. Registro solo con confirmación explícita de Manel (dry run primero).

## Cambios de Luis

Luis trabaja en una rama propia y abre un pull request; Manel revisa y fusiona. Si prefiere no usar git, devuelve el zip de `npm run material-luis` con los cambios solo en los ficheros fuente (decks, `documents/guia-prompts/README.md`, `ficheros-practica/`), y se fusiona contra el commit con que se generó (está en `VERSION.txt` del zip).

## Git

Nunca hagas commit ni push sin confirmación explícita.
