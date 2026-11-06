# Demo 1 · Leer un informe sectorial largo

Material del formador. Patrón `leer-informe-largo`, sector `educacion`.
Deck: Claude.ai, la plataforma (portada de la demo, la cadena, los cinco
pasos y "Por qué en cadena"). Prompts: guía de prompts, demo 1.

**Todo ficticio:** el Observatorio Europeo del Envase Sostenible (OEES), la
Asociación Europea de Fabricantes de Biopolímeros (AEFB), la encuesta y todas
las cifras. El informe lo dice en la portada y en el pie de cada página. La
referencia al reglamento europeo de envases es genérica; no se cita ningún
artículo.

## Ficheros

| Fichero | Uso |
| :-- | :-- |
| `informe-envases-compostables-europa-2026.pdf` | el que se adjunta: 13 páginas, número de página en el pie |
| `informe-envases-compostables-europa-2026.md` | la fuente del PDF y el plan B si el PDF no sube |

El PDF se genera con `node clients/bsm-muibal-ia/scripts/generar-materiales.mjs`;
no se edita a mano. Si cambias el markdown, regenera.

## Qué enseñar (15 minutos)

1. Adjuntar el PDF y lanzar el prompt 1. Parar en "quién lo financia": la AEFB,
   página 13. Es el primer punto docente: quién habla antes de qué dice.
2. Prompt 2: la tabla de cifras. Buscar en directo la fila de 2026: 2.900 en el
   resumen (página 2) y 2.840 en la tabla 1 (página 4). Abrir el PDF y
   comprobarlo delante de la sala.
3. Prompts 3 y 4 seguidos. En el 4, leer en voz alta dos huecos y preguntar a
   la sala cómo lo resolverían en su TFM.
4. Prompt 5: la ficha como artefacto. Enseñar que se descarga.

## Lo que hay plantado

- **Cifra que no coincide:** mercado 2026, 2.900 millones en el resumen
  (página 2) frente a 2.840 en la tabla 1 (página 4).
- **Previsión presentada como dato:** el resumen dice "alcanzará"; la
  metodología (página 3) aclara que 2026 es previsión.
- **Conflicto de interés:** el informe lo financia una asociación de
  fabricantes y las cifras de mercado salen de lo que declaran sus socios.
- **Huecos:** encuesta sin desglose por país ni por tamaño, sin tasa de
  respuesta, sin precios por formato (solo un índice), nada sobre cuánto
  envase acaba de verdad compostado, y la afirmación de la página 10 sobre la
  diferencia de precio con el convencional sin ningún dato del convencional.
- **Tensión interna:** la página 9 dice que "el precio decide entre
  proveedores certificados" y la página 7 que la primera causa de cambio de
  proveedor son los retrasos (44 %). Buena pregunta para la sala.

## Resultado esperado

La primera lectura nombra al OEES, junio de 2026 y la AEFB. La tabla trae las
dos cifras de 2026 con [NO COINCIDE]. La metodología dice "no probabilística".
La lista de huecos no inventa datos para cubrirlos.

## Plan B

- Si el PDF no sube o el límite del plan gratuito se agota: adjuntar el `.md`
  (las páginas van marcadas con `<!-- página -->`; pedir que use esa marca para
  numerar) o seguir en otra cuenta.
- Si Claude solo da una cifra de 2026: "En la página 2 hay otra cifra para el
  mismo año. ¿Cuál es y cuál usarías?".
- Si se inventa una cifra: es el mejor momento de la demo. Pedir "copia la
  frase exacta de la página donde aparece" y enseñar que no puede.

## TODO: verificar

- Qué modelos y qué límite de mensajes tiene el plan gratuito en noviembre de
  2026, con un PDF de trece páginas y cinco prompts encadenados.
- Probar la cadena completa en una cuenta gratuita antes del 16 de noviembre y
  anotar el resultado aquí.
