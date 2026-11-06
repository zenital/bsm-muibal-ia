# Módulo 0 · Qué es la IA generativa

Deck 01 de la sesión "La IA aplicada a investigar mercados" (Máster Universitario en Negocios Internacionales, UPF Barcelona School of Management). Español, 33 diapositivas, con la marca zenital y la capa BSM.

Es el módulo 0 común de zenital (`common/modulos/01-ia-generativa/`) adaptado a la sesión. Esta carpeta la escribe `node common/tools/sync.mjs` (va dentro de `npm run build`): no se edita a mano. Las adaptaciones están en `common-overrides/01-ia-generativa/`: textos en `_textos.json`, diapositivas sustituidas en `<slot>.html` y ficheros propios en `archivos/` (la capa BSM, que copia `scripts/sync-theme-common.mjs`, las fuentes, los logos y este README).

## Dónde entra en la sesión

Es el primer bloque de contenido del lunes 16/11/2026, unos 45 minutos, después de la apertura (deck 00) y antes del deck 02. Los tiempos por bloque y los recortes están en la nota de la portada y en `internal/plan-sesion.md`.

El deck 02 (La IA para investigar) se apoya en lo que se cuenta aquí:

- los tokens y los embeddings (slides 10 y 11), para explicar la ventana de contexto y el RAG;
- las alucinaciones (slides 22 y 23), para auditar las referencias de la investigación profunda;
- el prompting básico (slides 27 y 28: los cinco hábitos y el ejemplo few-shot con fichas de importadores), que el bloque 1 del deck 02 ordena en el marco de seis elementos;
- de responder a actuar (slide 26), el puente a los agentes.

## Ejecutar

Abrir `index.html` en el navegador. Flechas para avanzar (las revelaciones van paso a paso), `M` índice, `F` pantalla completa, `N` vista del presentador con las notas.

Las slides 05 y 06 cargan animaciones que usan recursos de internet (Tailwind y Google Fonts): sin conexión no se ven y se salta de la 04 a la 07.
