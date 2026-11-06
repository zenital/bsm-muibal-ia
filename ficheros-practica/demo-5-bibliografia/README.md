# Demo 5 · De una carpeta de PDFs a la bibliografía

Material del formador. Patrón `ordenar-carpeta`, sector `educacion`.
Requisito: Cowork (plan de pago y aplicación de escritorio). Deck: Claude
Cowork (portada, el encargo, qué comprobar, proyectos, pasos y criterio).
Prompts: guía de prompts, demo 5.

**Todo ficticio:** autores, revistas, editoriales, organismos, el webinar, la
entrevista y los datos de Envoltia. Cada fichero lo dice.

## La carpeta `fuentes-tfm/` (diez ficheros)

| Fichero | Qué es | Lo plantado |
| :-- | :-- | :-- |
| `descarga (3).pdf` | artículo, Müller y Laurent (2024), revista ficticia | duplicado del siguiente |
| `articulo_proveedores_FINAL.md` | el mismo artículo | duplicado |
| `informe OEES envases 2026.pdf` | el informe de la demo 1 (OEES, 2026) | copia del PDF de la demo 1 |
| `Herrero_cap4_escaneado.pdf` | capítulo 4 de un libro, Herrero Vidal (2022) | el nombre dice "escaneado" pero tiene texto |
| `Ponce2023 tesis.txt` | resumen de una tesis doctoral, Ponce Ruiz (2023) | |
| `EUreport packaging.md` | informe técnico del CEEE (2025) | nombre en inglés, contenido en español |
| `doc_sin_titulo.pdf` | diapositivas de un webinar de la AEFB (2025) | sin título en el nombre |
| `notas.txt` | notas copiadas de una web | **sin autor ni fecha**; solo una URL |
| `entrevista_comprador_lyon.md` | notas de una entrevista de la autora (2027) | fuente primaria propia: en APA 7 no va a la lista de referencias |
| `reclamaciones envoltia 2024-2025.csv` | datos internos | 63 reclamaciones, 26 por retraso (cuadran con la demo 4) |

Los tres PDF de fuentes salen de `clients/bsm-muibal-ia/scripts/fuentes-pdf/`
con `generar-materiales.mjs`; el del informe es copia del de la demo 1.

## Qué enseñar (10 minutos, demostración del formador)

1. Copia de la carpeta, Cowork en modo manual, la carpeta elegida.
2. El encargo de la guía. Enseñar el plan antes de aprobar.
3. Aprobar unos cuantos renombrados y dejar que termine.
4. Abrir `PENDIENTES.md` primero, luego la bibliografía y la tabla, y el
   explorador con `_duplicados`.

## Resultado esperado

- Nueve fuentes distintas; uno de los dos ficheros del artículo en
  `_duplicados` con la nota de cuál es copia.
- `notas.txt` renombrado con "sf" y "sin-autor", y en PENDIENTES.md.
- La entrevista, fuera de la lista de referencias, en una nota aparte.
- Tabla: entrevista y artículo, O1; reclamaciones, O3; informe del OEES, O1 y
  contexto del mercado.
- Nada borrado, nada con el contenido cambiado, ninguna referencia con datos
  inventados (DOI, ciudad, páginas).

## Plan B

- Sin Cowork en la sala (cuentas gratuitas): la demo se ve en pantalla. Para
  practicar sin Cowork, subir cuatro o cinco de los ficheros a un chat y pedir
  solo la bibliografía y la tabla (sin renombrar): funciona en el plan
  gratuito, a mano y fichero a fichero.
- Si Cowork borra o sobrescribe algo: por eso se trabaja sobre copia.
  Enseñarlo y volver a la copia original.
- Si inventa un DOI o una editorial: buen punto docente; señalarlo con el
  fichero abierto.

## TODO: verificar

- Probar el encargo en una cuenta Pro con la aplicación de escritorio de
  noviembre de 2026.
