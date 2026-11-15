# Guía de ejercicios, demos y prompts · La IA aplicada a investigar mercados

Fuente del compañero de la sesión de IA de MUIBAL (Máster Universitario en Negocios Internacionales, UPF Barcelona School of Management). Cada `##` es un bloque del compañero y cada `###` una ficha. El formato lo lee `brand/documents/tools/build-companion.mjs` (ver `brand/documents/companion-format.md`): un párrafo por línea, listas sin anidar, y las comprobaciones siempre como lista bajo su encabezado. Las fichas de las demos salieron de `../zenital-claude-training/clients/bsm-muibal-ia/prompts/demo-101.md` a `demo-106.md`: si cambias una demo, cambia las dos.

## Antes de empezar · La sesión, los ficheros y la IA

Esta es la sesión de IA de la asignatura de investigación de mercados: cuatro horas, el lunes 16/11/2026, con Luis Esteve Elfau. No es otra sesión de herramientas de investigación, sino de inteligencia artificial: cómo funciona un modelo por dentro, cómo se le pide un trabajo de investigación, cómo se le dan vuestras fuentes, qué hace un agente y cómo se organiza un TFM entero con IA sin que deje de ser vuestro. Lo que se ve hoy entra en el examen tipo test del 23/11/2026.

| Bloque | Presentación | Minutos |
|---|---|---|
| Apertura: la sesión, el compañero y el caso | 00 | 15 |
| Qué es la IA generativa | 01 | 45 |
| Pedir bien: el prompt de investigación · ejercicio 1 | 02, bloque 1 | 30 |
| Pausa | | 15 |
| Preguntar a vuestras fuentes: RAG y cuadernos · ejercicio 2 | 02, bloque 2 | 35 |
| Investigación profunda y agentes · ejercicio 3 | 02, bloque 3 | 40 |
| Claude para el TFM: demos 2, 3 y 5 | 03, 04 y 05 | 45 |
| El TFM con IA, en siete pasos | 00 | 15 |

El caso es vuestro TFM, aunque el tema sea provisional. Si aún no tenéis tema, trabajad con Envoltia, una pyme ficticia de Sabadell que fabrica envases compostables para alimentación y quiere saber qué valoran los compradores B2B europeos de un proveedor como ella. Los ejercicios se hacen en parejas: si los dos tenéis tema, elegid uno.

Los tres ejercicios valen en ChatGPT, Claude, Gemini o Copilot, también en el plan gratuito. Las seis demos son de Claude y cada una dice qué plan necesita: en clase, el formador hace tres; las otras tres quedan aquí para cuando lleguéis a ese paso del TFM.

Tres reglas para hoy y para el TFM:

- **La IA propone, vosotros decidís.** Cada pregunta, cada fuente y cada conclusión del TFM tienen que poder defenderse sin la IA delante.
- **Ninguna cita sin abrirla.** Una referencia que no habéis leído no entra en el TFM, la haya traído quien la haya traído.
- **Lo que hace la IA se declara.** Qué herramienta, para qué y qué revisasteis. El registro de IA de la asignatura vale también para el TFM; la plantilla de la declaración está al final de esta página.

Y una más, la de siempre: nunca subáis a una herramienta de IA datos personales (las transcripciones de entrevistas, anonimizadas antes) ni información interna de una empresa.

### Ficheros · Qué os descargáis y qué hay en cada fichero

**Funciona en:** cualquier ordenador; no hace falta instalar nada
**Qué necesitas:** nada; leed esta ficha antes de abrir los ficheros

Justo encima de este apartado está el botón para descargar todos los ficheros de práctica en un zip. Cada ejercicio y cada demo tienen además su propio botón, con solo lo que necesitan. Si no tenéis tema de TFM, lo primero que hay que leer es `caso-envoltia.md`.

| Fichero | Qué es | Cuándo lo usáis |
|---|---|---|
| `caso-envoltia.md` | El caso de reserva en una página: la empresa, su pregunta y lo que se sabe. Ficticio. | Si no tenéis tema |
| `plantilla-pregunta-investigacion.md` | La pregunta, los objetivos, las hipótesis y el método, con su ejemplo. | Ejercicio 1 |
| `envoltia-fuentes.zip` | Seis fuentes de Envoltia, ficticias salvo el resumen de la normativa europea de envases. | Ejercicio 2 |
| `plantilla-auditoria-referencias.md` | La tabla para auditar cinco referencias: si existe, si dice eso, si está revisada por pares, el año y el tipo de fuente. | Ejercicio 3 |
| `demo-1-informe-sectorial.zip` | Un informe sectorial ficticio de trece páginas, en PDF y en texto. | Demo 1 |
| `demo-2-proyecto-mi-tfm.zip` | La descripción y las instrucciones del proyecto, una guía del TFM de ejemplo y la propuesta de Envoltia. | Demos 2 y 3 |
| `demo-4-diapositivas-defensa.zip` | El resumen de un TFM terminado, ficticio, para preparar su defensa. | Demo 4 |
| `demo-5-bibliografia.zip` | Una carpeta desordenada de diez fuentes con nombres malos, para ordenarla con Cowork. | Demo 5 |
| `demo-6-revisor-capitulos.zip` | Un capítulo de metodología en borrador, con problemas puestos a propósito. | Demo 6 |
| `skill-revisor-capitulos-tfm.zip` | La skill que revisa un capítulo contra una rúbrica y devuelve comentarios, nunca texto reescrito. | Demo 6 |

Los ficheros .md son texto sin formato: se abren con el Bloc de notas o con cualquier editor de texto. Si preferís Google Docs, activad antes Herramientas > Preferencias > Habilitar Markdown y pegad con clic derecho > Pegar desde Markdown.

**Comprueba que ha salido bien:**

- Habéis descomprimido el zip y podéis abrir `caso-envoltia.md`.
- Sabéis con qué caso trabajáis hoy: vuestro TFM o Envoltia.

## La IA para investigar · Ejercicios 1 a 3

Los tres ejercicios de la presentación 02, en parejas. Cada uno corresponde a un paso del TFM: la pregunta, las fuentes y el estado de la cuestión. Valen en cualquier herramienta de IA, también en el plan gratuito.

### Ejercicio 1 · De vuestro tema de TFM a la pregunta de investigación

**Funciona en:** ChatGPT, Claude, Gemini y Copilot, también en plan gratuito; si vuestra herramienta tiene modo de razonamiento, lo usaréis en el paso 3
**Qué necesitas:** `plantilla-pregunta-investigacion.md` y, si todavía no tenéis tema de TFM, `caso-envoltia.md`

**Qué vais a hacer, en una frase:** convertir vuestro tema de TFM, que todavía es vago, en una pregunta de investigación con objetivos, hipótesis y método, y comparar lo que sale de un prompt rápido con lo que sale de un prompt bien hecho.

En parejas: una persona trae su tema y la otra hace de tutora (pregunta, duda, pide que se concrete). En el ejercicio 2 se cambian los papeles. Si ninguno de los dos tiene tema todavía, trabajáis con Envoltia: una pyme de Sabadell que fabrica envases compostables y quiere saber qué valoran los compradores europeos de un proveedor como ella.

Una pregunta de investigación bien planteada cumple tres condiciones: se puede responder con los datos que vais a tener, cabe en el tiempo que tenéis hasta la entrega y sirve a alguien para decidir algo. Si le falta una de las tres, todavía no está.

Para escribir el prompt usaréis el marco de seis elementos que habéis visto en clase:

| Elemento | Qué es | En este ejercicio |
|---|---|---|
| 1 · Rol | Quién es la IA para esta tarea | Tutor de TFM de un máster en negocios internacionales |
| 2 · Contexto | Qué hay detrás: el tema, el problema, lo que ya sabéis y el tiempo | Las tres líneas de la parte 1 de la plantilla |
| 3 · Tarea | Qué tiene que hacer, con un verbo claro | Proponer la pregunta y el diseño, no escribir el TFM |
| 4 · Formato | Qué forma tiene el resultado | Una tabla con la pregunta, tres objetivos, hipótesis, método y fuentes |
| 5 · Ejemplos | Uno resuelto, para que imite el patrón | Un objetivo escrito por vosotros |
| 6 · Límites | Lo que no debe hacer | No inventar fuentes, decir lo que no es viable y preguntar si le falta información |

En el aula: unos 15 minutos, en parejas, con la puesta en común incluida.

**Cómo se hace:**

1. **3 min.** El tema, sin IA. Rellenad la parte 1 de la plantilla: el tema en una línea, el problema o la decisión que hay detrás, lo que ya sabéis y lo que tenéis para hacerlo (meses hasta la entrega, datos o personas a las que tenéis acceso).
2. **2 min.** El prompt rápido. Abrid un chat nuevo, cambiad el tema y lanzadlo tal cual. Guardad la respuesta.

```
Dame una pregunta de investigación para un TFM sobre [vuestro tema en cuatro palabras].
```

3. **4 min.** El prompt con marco. Abrid otro chat nuevo, copiad el texto de abajo y completad lo que va entre corchetes con lo que habéis escrito en la plantilla. El objetivo de ejemplo lo escribís vosotros: es lo que le enseña a la IA cómo es un objetivo bien planteado.

```
Actúa como tutor de trabajos de fin de máster de un Máster en Negocios Internacionales.

Contexto: mi TFM trata sobre [el tema]. El problema que hay detrás es [el problema o la decisión, y a quién le sirve la respuesta]. Lo que ya sé: [datos, fuentes o experiencia]. Tengo [número] meses hasta la entrega y acceso a [los datos o las personas a las que podéis llegar].

Tarea: propón una pregunta de investigación y el diseño para responderla. No escribas el TFM ni ningún capítulo.

Formato: una tabla con estas filas: pregunta de investigación, objetivo 1, objetivo 2, objetivo 3, hipótesis, método (cualitativo, cuantitativo o mixto, y con qué técnica) y fuentes que habría que consultar. Debajo, en tres líneas, qué no podrá responder este TFM.

Ejemplo de objetivo bien planteado: [escribid uno vuestro, con verbo y con lo que se va a medir o comparar].

Límites: cada objetivo tiene que poder responderse con los datos a los que tengo acceso y en el tiempo que tengo; si alguno no, dímelo y quítalo. No inventes fuentes: si propones un estudio o una base de datos concretos, dime si estás seguro de que existen. Si te falta información para hacer una buena propuesta, pregúntame antes de responder.
```

4. **3 min.** General o razonador. Lanzad el mismo prompt con marco en el otro modo de la herramienta (el de razonamiento, si empezasteis con el rápido, o al revés; lo llaman "pensar", "razonar" o "thinking"). ¿Cuál propone una pregunta más viable? ¿Cuál inventa más fuentes concretas? ¿Qué objetivo quitaríais? Apuntad lo que os quedáis en la parte 2 de la plantilla.
5. **3 min.** Puesta en común: tres parejas cuentan qué le faltaba a su tema y qué objetivo han quitado; las demás añaden lo que falte. Guardad el enlace de la conversación del prompt con marco: lo necesitaréis para la declaración de uso de IA.

Un ejemplo de lo que suele pasar, con Envoltia: el prompt rápido devuelve algo como "¿cuál es el impacto de los envases compostables en la sostenibilidad de la cadena alimentaria europea?", que no cabe en un TFM. Con el marco, la pregunta se acota a un tipo de comprador, a unos criterios y a un método que se puede hacer en cuatro meses.

**En casa, para aprender:** dos variantes, unos 20 minutos. No se entregan.

- **Que la IA os haga de tribunal.** En la misma conversación, pegad este prompt y contestad a sus preguntas por escrito, sin la IA.

```
Ahora actúa como miembro del tribunal de este TFM. Hazme las cinco preguntas más difíciles que me harías sobre esta pregunta de investigación y este diseño: viabilidad, método, fuentes y para qué sirve el resultado. No me des las respuestas.
```

- **Que la IA escriba el prompt.** Pedidle que escriba el prompt por vosotros y comparad su prompt con el vuestro. ¿Qué elemento del marco ha puesto que vosotros no?

```
Voy a pedirle a una IA que me ayude a convertir el tema de mi trabajo de fin de máster en una pregunta de investigación con objetivos, hipótesis y método. Escríbeme el mejor prompt posible para pedírselo. Antes de escribirlo, hazme las preguntas que necesites sobre el tema, el tiempo que tengo y los datos a los que tengo acceso.
```

**Comprueba que ha salido bien:**

- La parte 1 de la plantilla está escrita antes de abrir la IA.
- Vuestro prompt tiene los seis elementos, incluido un objetivo de ejemplo escrito por vosotros.
- La pregunta final se puede responder con los datos a los que tenéis acceso y en el tiempo que tenéis.
- Habéis quitado al menos un objetivo, o sabéis decir por qué los tres son viables.
- Las fuentes concretas que propone la IA están marcadas como "por comprobar" hasta que las encontréis.
- Tenéis guardado el enlace de la conversación.

### Ejercicio 2 · Preguntar a vuestras fuentes con Gemini Notebook

**Funciona en:** Gemini Notebook (antes NotebookLM), gratis con una cuenta de Google; sin cuenta de Google, un proyecto de ChatGPT o de Claude con los mismos ficheros
**Qué necesitas:** `envoltia-fuentes.zip` (los seis documentos de Envoltia), o entre 5 y 8 fuentes de vuestro TFM (artículos, informes, normas, notas)

**Qué vais a hacer, en una frase:** subir vuestras fuentes a un cuaderno, pedirle un mapa de la literatura con la cita de cada afirmación, comprobar que no se inventa lo que vuestras fuentes no dicen y abrir las citas para ver si dicen lo que dice el mapa.

En parejas, con los papeles cambiados respecto al ejercicio 1: ahora trae el tema la otra persona. Si trabajáis con Envoltia, las seis fuentes son: dos resúmenes de artículos académicos, un extracto de un informe sectorial, una entrevista a una compradora alemana, una nota interna de Envoltia y un resumen del reglamento europeo de envases. Las cinco primeras son ficticias; la sexta resume una norma real, pero está escrita para esta sesión.

Un mapa de la literatura no es un resumen de cada fuente: es una tabla por temas que dice qué fuentes hablan de cada tema, en qué coinciden, en qué se contradicen y qué no dice ninguna. Esto último, el hueco, es muchas veces la aportación de un TFM.

En el aula: unos 20 minutos, en parejas, con la puesta en común incluida.

**Cómo se hace:**

1. **3 min.** El cuaderno. Entrad en Gemini Notebook, cread un cuaderno nuevo y subid las fuentes. Si usáis fuentes propias, mejor PDF o texto que enlaces; nunca entrevistas con nombres de personas.
2. **7 min.** El mapa. Pegad este prompt en el chat del cuaderno. Si es vuestro TFM, cambiad la pregunta de investigación por la vuestra (la del ejercicio 1).

```
Mi pregunta de investigación es: [para Envoltia: ¿qué valoran los compradores B2B europeos de un proveedor de envases compostables, y en qué se diferencian los compradores medianos de las grandes cadenas?].

Usa solo las fuentes de este cuaderno. Haz un mapa de la literatura en una tabla con estas columnas: tema, qué dicen las fuentes, qué fuentes lo dicen (con la cita), si coinciden o se contradicen.

Después de la tabla:
1. Las contradicciones entre fuentes, y por qué pueden darse (población, método, fecha o quién financia la fuente).
2. Qué tipo de fuente es cada una: artículo académico, informe sectorial, entrevista, documento de empresa o norma.
3. Lo que ninguna fuente responde de mi pregunta.

Si algo no está en las fuentes, escribe "no consta". No completes con lo que sepas de fuera.
```

3. **4 min.** Las trampas. Haced estas dos preguntas, una cada vez. Su respuesta no está en las fuentes de Envoltia: lo correcto es que diga que no consta. Si trabajáis con fuentes propias, inventad dos preguntas cuya respuesta sabéis que vuestras fuentes no tienen.

```
¿Cuánto más están dispuestos a pagar los compradores franceses por un envase compostable?
```

```
¿Qué opinan los compradores de Suecia y Dinamarca de los proveedores de envases compostables?
```

4. **6 min.** Tres citas abiertas y puesta en común. Elegid tres afirmaciones del mapa, abrid su cita (en Gemini Notebook, con un clic en el número) y comprobad que la fuente dice eso. Después, tres o cuatro parejas cuentan qué ha pasado con las trampas y qué contradicción han encontrado; las demás añaden lo que falte.

**En casa, para aprender:** unos 30 minutos. No se entrega.

- **El cuaderno de vuestro TFM.** Cread un cuaderno con las primeras 10 o 15 fuentes de vuestro TFM y repetid el mapa. Guardadlo: es la base del estado de la cuestión, y lo podréis ampliar a medida que leáis.
- **El mismo prompt, sin documentos.** Lanzad la primera trampa en un chat normal, sin fuentes. ¿Contesta con una cifra? ¿De dónde la saca?

**Comprueba que ha salido bien:**

- El mapa tiene, en cada fila, la fuente y la cita de lo que se afirma.
- La IA ha dicho "no consta" en las dos trampas; si ha contestado, sabéis de dónde ha sacado la respuesta.
- Habéis abierto tres citas y sabéis si decían lo que decía el mapa.
- Habéis encontrado al menos una contradicción entre fuentes y sabéis decir cuál pesa más y por qué.
- Tenéis una frase con lo que vuestras fuentes no responden: el hueco.

### Ejercicio 3 · El estado de la cuestión con investigación profunda, auditado

**Funciona en:** Gemini (Deep Research, en el plan gratuito con límite de uso) y ChatGPT (deep research, en el plan gratuito con límite); en Claude (Research) y Copilot (Researcher), solo en planes de pago. Con que una persona de la pareja la tenga, basta
**Qué necesitas:** vuestra pregunta de investigación (la del ejercicio 1) o la de Envoltia, y `plantilla-auditoria-referencias.md`

**Qué vais a hacer, en una frase:** pedir a un agente de investigación profunda un primer estado de la cuestión de vuestra pregunta de investigación, y auditar cinco de sus referencias con cinco preguntas: si existe, si dice eso, si está revisada por pares, de qué año es y si es primaria o secundaria.

La investigación profunda es un agente: busca, lee decenas de páginas durante varios minutos y redacta un informe con enlaces. El informe parece terminado, y ese es el problema: que una referencia esté enlazada no quiere decir que exista tal como se cita, ni que diga lo que el informe le atribuye. En un TFM, una referencia que no dice lo que se le atribuye es un error grave, y el tribunal lo puede comprobar en un minuto.

Las cinco preguntas, que están también en la plantilla:

| Pregunta | Cómo se comprueba | Señal de alarma |
|---|---|---|
| ¿Existe? | El DOI se abre en doi.org; el título exacto sale en Google Scholar; la revista existe | Autores reales con un título que nadie ha escrito |
| ¿Dice eso? | Abrir el resumen o el texto y buscar la cifra o la idea que se le atribuye | El artículo existe pero habla de otra cosa, de otro país o de otro año |
| ¿Está revisada por pares? | Revista indexada (Scopus, Web of Science, DOAJ si es de acceso abierto); no un preprint, un blog ni un informe de empresa | Revista depredadora: publica cualquier cosa si se paga |
| ¿De qué año es? | La fecha de publicación, y la del trabajo de campo si la dice | Un estudio viejo contado en presente |
| ¿Primaria o secundaria? | ¿Hizo el estudio o cita a quien lo hizo? Si cita, id al original | Una cifra que pasa de informe en informe y nadie sabe de dónde sale |

En el aula: unos 25 minutos en parejas, o 15 en la versión corta (dos referencias propias en lugar de cinco; las otras tres, en casa).

**Cómo se hace:**

1. **5 min.** Lanzadla. Activad la investigación profunda en vuestra herramienta (en Gemini se llama Deep Research; en ChatGPT, deep research), pegad el prompt de abajo con vuestra pregunta y responded a lo que os pregunte, o revisad el plan que os enseñe y pulsad para empezar. Tardará entre 5 y 15 minutos.

```
Prepara un primer estado de la cuestión para un trabajo de fin de máster con esta pregunta de investigación: [vuestra pregunta, o la de Envoltia: ¿qué valoran los compradores B2B europeos de un proveedor de envases compostables, y en qué se diferencian los compradores medianos de las grandes cadenas?].

Prioriza artículos académicos revisados por pares publicados desde 2019. Puedes usar informes sectoriales y normativa, pero dilo cuando lo sean.

Formato:
1. Una síntesis de lo que se sabe, por temas, en no más de una página.
2. Una tabla de referencias con: autor, año, título, revista o editor, DOI o enlace, tipo de fuente (artículo revisado por pares, informe, norma, otro) y qué afirmación del texto respalda.
3. Lo que la literatura no responde todavía.

Límites: no inventes referencias. Si no encuentras el DOI o no estás seguro de que una referencia exista tal como la citas, dilo en la tabla. Si una cifra no es de Europa o es anterior a 2019, dilo.
```

2. **7 min.** Mientras trabaja, la de referencia. En la pantalla, el formador abre la investigación de referencia (hecha con Envoltia) y auditáis entre todos dos de sus referencias con las cinco preguntas.
3. **10 min.** La vuestra. Elegid cinco referencias de la tabla del informe, mejor de tipos distintos, y rellenad la plantilla con el original abierto: no con lo que dice el informe. Poned un semáforo a cada una: verde (pasa las cinco preguntas, se puede citar), ámbar (útil, pero secundaria, vieja, no revisada o dice algo un poco distinto) o rojo (no existe o no dice eso).
4. **3 min.** Puesta en común: tres o cuatro parejas cuentan cuántas verdes de cinco y qué fallo han encontrado; las demás añaden lo que falte. Guardad el enlace de la conversación.

Si vuestra herramienta no tiene investigación profunda, usad un chat con búsqueda web y este prompt; las referencias se auditan igual:

```
Busca 8 artículos académicos revisados por pares sobre [vuestra pregunta de investigación], publicados desde 2019. Para cada uno: autor, año, título, revista y DOI. Si no encuentras el DOI o no estás seguro de que el artículo exista tal como lo citas, dilo.
```

**En casa, para aprender:** unos 40 minutos. No se entrega.

- **Las cinco completas.** Si en clase hicisteis la versión corta, auditad las otras tres referencias.
- **Del informe al vuestro.** Con las referencias en verde y ámbar, escribid vosotros, sin la IA, un párrafo de estado de la cuestión. Después pedidle a la IA que lo critique con este prompt, sin que lo reescriba.

```
Este es un párrafo del estado de la cuestión de mi TFM. No lo reescribas. Dime: qué afirmaciones no están respaldadas por una referencia, dónde generalizo más de lo que dicen las fuentes y qué contradicción entre autores no estoy explicando.

[pegad el párrafo, con sus referencias]
```

**Comprueba que ha salido bien:**

- Tenéis cinco referencias (dos en la versión corta) auditadas con el original abierto, no con el texto del informe.
- Cada referencia tiene su semáforo, y las rojas no van a aparecer en vuestro TFM.
- Sabéis decir qué fallo de los seis de la slide 24 habéis encontrado, o por qué no ha aparecido ninguno.
- Las referencias secundarias tienen apuntado el original al que hay que ir.
- Tenéis guardado el enlace de la conversación para la declaración de uso de IA.

## Claude para el TFM · Seis demos

Las demos de las presentaciones 03 a 06, con Claude. En clase el formador hace tres (la 2, la 3 y la 5); las otras tres quedan aquí para cuando lleguéis a ese paso del TFM. Cada ficha dice qué plan necesita. Las demos usan el caso Envoltia y, al final, explican cómo repetirlas con vuestro TFM.

### Demo 1 · Leer un informe sectorial largo, en cadena

**Funciona en:** Claude. Plan: sirve el gratuito: adjuntar un PDF y conversar sobre él está en todos los planes. El plan gratuito tiene un límite de mensajes: si se acaba se acaba a mitad de la cadena, sigue en otro momento en la misma conversación.
**Qué necesitas:** `demo-1-informe-sectorial.zip`

**Entorno:** chat de claude.ai, con el PDF adjunto.
**En la sesión:** no se hace en clase: queda en el compañero para cuando llegue ese paso del TFM.
**Modelo:** Sonnet 5.5 como mínimo, mejor con Opus 5.5 si tu plan lo tiene.

**El caso.** Para el marco teórico y el estado de la cuestión del TFM hay que leer informes sectoriales largos, y casi siempre con prisa. El riesgo es doble: copiar una cifra sin saber de qué página sale y no ver lo que el informe no cuenta (quién lo paga, qué deja fuera, cómo se hizo). La práctica usa un informe ficticio de trece páginas sobre el mercado europeo de envases compostables, el sector de Envoltia; si ya tienes tema, repítela con un informe de tu sector.

Ficheros: `informe-envases-compostables-europa-2026.pdf` (el que se adjunta) y `informe-envases-compostables-europa-2026.md` (el mismo texto, por si el PDF no se puede subir).

- `informe-envases-compostables-europa-2026.pdf`: el informe del Observatorio Europeo del Envase Sostenible, inventado, con el número de página en el pie de cada hoja. Todas las cifras son ficticias.
- `informe-envases-compostables-europa-2026.md`: el mismo informe en texto, con una marca en cada salto de página.

**Por qué este entorno.** Es un solo documento y una conversación: no hace falta proyecto ni Cowork. La cadena de prompts en el mismo chat deja que cada paso se apoye en el anterior y que tú revises cada respuesta antes de seguir.

**En el día a día.** Adjuntas el informe que vas a citar en el TFM y lanzas la cadena. Claude devuelve la tabla de cifras con su página y la lista de lo que el informe no dice; qué cifras entran en tu trabajo, y comprobarlas en el PDF, sigue siendo cosa tuya.

**Cómo se hace:**

1. Abre un chat nuevo en claude.ai. Adjunta el PDF con el clip (o arrástralo al cuadro de mensaje).
2. Lanza el primer prompt: la primera lectura. Lee la respuesta antes de seguir.
3. Lanza el segundo prompt en el mismo chat: la tabla de cifras con su página.
4. Abre el PDF y comprueba dos cifras de la tabla en la página que dice Claude. Si una no coincide, la que vale es la del PDF.
5. Lanza el tercer prompt (la metodología) y el cuarto (lo que el informe no dice).
6. Lanza el quinto: la ficha de lectura, como artefacto, para guardarla con tus notas del TFM.
7. Repite la cadena con un informe de tu tema: cambia lo que va entre corchetes en la versión de abajo.

Primer prompt, la primera lectura:

```
Te adjunto un informe sectorial que voy a usar en mi trabajo final de máster. Antes de entrar en detalle, haz una primera lectura y dime:
- quién lo publica, quién lo financia y en qué fecha;
- qué ámbito cubre (países, años, productos) y qué deja fuera;
- un índice comentado: una línea por apartado, con su página.

Reglas: básate solo en el documento. Si algo no aparece, escribe "no consta". No añadas datos de otras fuentes.
```

Segundo prompt, la tabla de cifras:

```
Saca a una tabla todas las cifras del informe que podría citar en mi TFM, con estas columnas: dato, cifra, unidad, año al que se refiere, página del informe y si es dato cerrado, estimación o previsión.

Copia cada cifra tal como aparece en el informe, sin redondear ni recalcular. Si la misma magnitud aparece con valores distintos en dos páginas, pon las dos filas y márcalas con [NO COINCIDE].
```

Tercer prompt, la metodología:

```
Ahora la metodología. Explícame en cinco puntos cómo se obtuvieron las cifras de mercado y los datos de la encuesta: fuente, muestra, fechas, método y limitaciones que reconoce el propio informe. Cita la página de cada punto. Después dime qué preguntas haría un tribunal sobre esta metodología si cito el informe en mi TFM.
```

Cuarto prompt, lo que el informe no dice:

```
Ahora lo contrario: haz una lista de lo que el informe NO dice y que alguien que investiga qué valoran los compradores B2B de un proveedor de envases compostables necesitaría saber. Para cada punto, explica por qué importa y qué tipo de fuente podría responderlo. No respondas tú a esas preguntas ni inventes datos para cubrir los huecos.

Termina con los posibles sesgos del informe por quién lo financia y cómo se hizo la encuesta.
```

Quinto prompt, la ficha de lectura:

```
Con todo lo anterior, prepara una ficha de lectura del informe como artefacto de documento, para guardarla con mis notas del TFM:
1. Referencia del informe en formato APA 7 (si falta algún dato, escribe [FALTA] en su lugar).
2. De qué trata, en tres líneas.
3. Las cinco cifras más útiles para mi TFM, con su página.
4. Cómo se hizo y sus limitaciones.
5. Lo que no dice.
6. Las cifras marcadas [NO COINCIDE], para comprobarlas.
```

La misma cadena con tu informe: el primer prompt, con los datos de tu TFM entre corchetes (los demás prompts sirven tal cual; en el cuarto, cambia el tema).

```
Te adjunto [el informe / el estudio sectorial] que voy a usar en mi trabajo final de máster sobre [el tema de tu TFM]. Antes de entrar en detalle, haz una primera lectura y dime:
- quién lo publica, quién lo financia y en qué fecha;
- qué ámbito cubre (países, años, productos) y qué deja fuera;
- un índice comentado: una línea por apartado, con su página.

Reglas: básate solo en el documento. Si algo no aparece, escribe "no consta". No añadas datos de otras fuentes.
```

**Con tus ficheros:** usa informes que puedas citar: de organismos públicos, asociaciones sectoriales, consultoras o bases de datos de la biblioteca. Si el informe es de pago o de acceso restringido, revisa sus condiciones de uso antes de subirlo a una herramienta externa. Con un PDF escaneado (una imagen, sin texto seleccionable), Claude puede leer mal las cifras: compruébalas todas.

**Comprueba que ha salido bien:**

- La primera lectura dice que el informe lo publica el OEES en junio de 2026 y que lo financia la Asociación Europea de Fabricantes de Biopolímeros (páginas 1 y 13).
- La tabla de cifras lleva el valor del mercado de 2026 dos veces: 2.900 millones en el resumen (página 2) y 2.840 en la tabla 1 (página 4), marcadas [NO COINCIDE]. Si Claude solo da una, pregúntale por la otra página.
- La de 2026 consta como previsión, no como dato cerrado (página 3).
- La encuesta es de 412 personas de nueve países, por internet y a un panel, no probabilística (páginas 3 y 13).
- Entre lo que no dice: los resultados de la encuesta por país o por tamaño de empresa, la tasa de respuesta, precios por formato y cuánto envase compostable acaba de verdad en una planta de compostaje.
- Ninguna respuesta trae cifras que no estén en el informe.

### Demo 2 · El proyecto "Mi TFM": un tutor que pregunta y no escribe por ti

**Funciona en:** Claude. Plan: Pro, Max, Team y Enterprise tienen proyectos. Si en vuestro plan no aparecen, el último paso explica cómo hacerlo en un chat.
**Qué necesitas:** `demo-2-proyecto-mi-tfm.zip`

**Entorno:** proyecto de claude.ai (si tu plan no tiene proyectos, un chat con las instrucciones y la guía adjuntas; ver el último paso).
**En la sesión:** demostración del formador, unos 15 minutos; después la podéis repetir con vuestro TFM.
**Modelo:** Sonnet 5.5 como mínimo, mejor con Opus 5.5.

**El caso.** El TFM dura meses y las dudas se repiten: cuántas palabras, qué va en la metodología, si esta afirmación necesita fuente. Explicar el contexto en cada chat cansa, y un chat sin reglas acaba escribiendo por ti, que es justo lo que la guía del TFM no permite. El proyecto fija una vez el papel de tutor (preguntar, señalar, citar la guía) y deja en el contexto la guía y tu propuesta. La práctica usa una guía de ejemplo y la propuesta ficticia de Envoltia; con tu TFM, la guía es la oficial del máster.

Ficheros: `descripcion-proyecto.md`, `instrucciones-proyecto.md`, `guia-tfm-ejemplo.md` y `propuesta-tfm-envoltia.md`.

- `descripcion-proyecto.md`: el texto para el campo de descripción.
- `instrucciones-proyecto.md`: las instrucciones de tutor, para el campo de instrucciones.
- `guia-tfm-ejemplo.md`: una guía del TFM inventada para la práctica, con estructura, extensión, calendario y criterios. No es la oficial.
- `propuesta-tfm-envoltia.md`: la propuesta de TFM de Envoltia, ficticia, con una afirmación sin soporte puesta a propósito.

**Por qué este entorno.** Un proyecto guarda las instrucciones y los documentos para todos sus chats: cada duda nueva empieza ya con la guía y con tu propuesta delante, y con las mismas reglas de tutor. Cada chat sigue empezando sin la conversación de ayer, así que lo que tiene que estar siempre va al contexto, no a un chat.

Descripción del proyecto, para copiar:

```
Espacio de trabajo de mi trabajo final de máster. Claude hace de tutor metodológico: me pregunta, me señala lo que no se sostiene y me remite a la guía del TFM y a mis documentos. No escribe capítulos por mí. Cada chat trata una duda o una parte del trabajo.
```

Instrucciones del proyecto, para copiar:

```
Eres mi tutor metodológico para el trabajo final de máster (TFM) del Máster Universitario en Negocios Internacionales. Tu trabajo es ayudarme a pensar, no escribir por mí.

Cómo trabajas:
- Antes de responder a una petición amplia ("ayúdame con el marco teórico"), hazme como máximo tres preguntas para entender qué necesito. Cuando una pregunta sea suficiente, haz solo una.
- No redactas capítulos, apartados ni párrafos para entregar. Si te lo pido, recuérdame esta regla y ofréceme a cambio un guion de preguntas, una lista de comprobación o comentarios sobre mi texto.
- Cuando comentes un texto mío, señala el problema y explica por qué lo es. No me devuelvas el texto reescrito: como mucho, una frase de ejemplo para que vea la idea, marcada como "ejemplo, no para copiar".
- Básate en los documentos del contexto de este proyecto. Cuando cites una norma del TFM (estructura, extensión, fechas, formato de citas), di de qué documento y apartado sale, así: (guía del TFM, apartado 4).
- Si la guía no dice nada sobre lo que pregunto, dilo con estas palabras: "La guía del TFM no lo recoge; pregúntalo a tu tutor o a la coordinación del máster". No completes la norma con lo que sepas por tu cuenta.
- Si en mis textos encuentras una afirmación sin fuente, una cifra sin referencia o una conclusión que no se sigue de los datos, márcala con [SIN SOPORTE] y explica qué haría falta para sostenerla.
- Si te pido datos de mercado, no los inventes ni los estimes. Dime qué tipo de fuente los publicaría y cómo comprobarlos.

Formato:
- Respuestas cortas: como máximo 250 palabras, salvo que te pida una lista de comprobación completa.
- Español, tono cercano y directo, de tú.
- Termina cada respuesta con una pregunta que me ayude a dar el siguiente paso.
```

**En el día a día.** Abres un chat dentro del proyecto cada vez que tienes una duda o un borrador que revisar. El proyecto devuelve preguntas, la norma de la guía con su apartado y las afirmaciones marcadas [SIN SOPORTE]; escribir el TFM y decidir qué cambiar sigue siendo tuyo, y lo que diga tu tutor manda.

**Cómo se hace:**

1. En claude.ai, abre Proyectos en la barra lateral y crea uno nuevo: nombre "Mi TFM" y la descripción de arriba.
2. Pega las instrucciones en el campo de instrucciones del proyecto.
3. Sube al contexto del proyecto `guia-tfm-ejemplo.md` y `propuesta-tfm-envoltia.md`.
4. Abre un chat nuevo dentro del proyecto y lanza las cuatro consultas de prueba, una por chat.
5. Mira qué hace en cada una: cita la guía, se niega a escribir, marca lo que no tiene soporte y reconoce lo que la guía no dice.
6. Con tu TFM: crea otro proyecto con las mismas instrucciones y sube la guía oficial del TFM, tu propuesta y tus notas de tutoría. Si tu plan no tiene proyectos, abre un chat, adjunta la guía y tu propuesta y pega las instrucciones como primer mensaje, empezando por "Durante toda esta conversación, sigue estas instrucciones:".

Consulta de prueba 1, una norma de la guía:

```
¿Cuántas palabras tiene que tener el TFM y en qué formato tengo que citar?
```

Consulta de prueba 2, la petición que no debe atender:

```
Escríbeme la introducción del TFM. Que tenga unas 800 palabras.
```

Consulta de prueba 3, revisar un apartado:

```
Revisa el apartado "Por qué es relevante" de mi propuesta. ¿Se sostiene?
```

Consulta de prueba 4, lo que la guía no dice:

```
¿Puedo hacer el TFM en equipo con una compañera de otro máster de la escuela?
```

Con tu TFM, una consulta para empezar:

```
Esta es mi propuesta de TFM sobre [tu tema]. Antes de seguir, hazme las preguntas que haría un tutor para comprobar que la pregunta de investigación es clara y viable con los datos a los que puedo llegar en [los meses que te quedan].
```

**Con tus ficheros:** al contexto del proyecto van documentos que quieres que el tutor tenga siempre delante: la guía oficial del TFM, la rúbrica si la hay, tu propuesta aprobada y un resumen de cada tutoría. Nada de datos personales de entrevistados ni datos confidenciales de una empresa: si los necesitas, anonimízalos antes de subirlos.

**Comprueba que ha salido bien:**

- Consulta 1: entre 12.000 y 15.000 palabras sin bibliografía ni anexos, y citas en APA 7, citando la guía del TFM, apartado 4.
- Consulta 2: no escribe la introducción. Recuerda la regla y ofrece un guion de preguntas o una lista de lo que debe llevar (guía, apartado 3), y lo que dice la guía sobre el uso de la IA (apartado 7).
- Consulta 3: marca [SIN SOPORTE] en "los compradores europeos ya no se fijan en el precio" y en "crecerá un 25 % al año hasta 2030", sin fuente las dos, y dice qué fuente haría falta. No reescribe el apartado.
- Consulta 4: la guía solo dice que en equipo son de dos a cuatro personas (apartado 2); sobre compañeras de otro máster no dice nada, y lo dice con la frase de las instrucciones en lugar de inventar la norma.
- Todas las respuestas terminan con una pregunta.

### Demo 3 · La matriz de consistencia y el calendario del TFM

**Funciona en:** Claude. Plan: sirve el gratuito: los artefactos están en todos los planes.
**Qué necesitas:** `demo-2-proyecto-mi-tfm.zip` (los mismos ficheros de la demo 2)

**Entorno:** chat de claude.ai con artefactos, o un chat dentro del proyecto "Mi TFM" de la demo anterior, que ya tiene la propuesta y la guía.
**En la sesión:** demostración del formador, unos 15 minutos; después la podéis repetir con vuestro TFM.
**Modelo:** Sonnet 5.5 como mínimo, mejor con Opus 5.5.

**El caso.** Una pregunta de investigación bonita puede no tener método: los objetivos piden datos que nadie tiene o una técnica que no los mide. La matriz de consistencia pone en una tabla la pregunta, los objetivos, las hipótesis o preguntas específicas, las variables, la técnica y la fuente, y deja ver lo que no encaja antes de empezar. Del mismo trabajo sale el calendario hasta la entrega, con los hitos de la guía. La práctica usa la propuesta de Envoltia y la guía de ejemplo; con tu TFM, los tuyos.

Ficheros: `propuesta-tfm-envoltia.md` y `guia-tfm-ejemplo.md` (los de la demo del proyecto "Mi TFM").

- `propuesta-tfm-envoltia.md`: la pregunta, los objetivos y el método previsto de Envoltia, en borrador.
- `guia-tfm-ejemplo.md`: la guía de ejemplo, con el calendario de entregas en el apartado 5.

**Por qué este entorno.** La matriz es una tabla que se revisa y se corrige varias veces: va bien como artefacto de documento, que guarda las versiones. El calendario necesita poder filtrarse y marcar lo hecho, así que va como página interactiva. Si lo haces dentro del proyecto "Mi TFM", no hace falta adjuntar nada.

**En el día a día.** Cuando cambias la pregunta o el método, pides que se actualice la matriz y el calendario. Claude devuelve la tabla con lo que no encaja marcado y el calendario con los hitos; decidir el método y el ritmo, y validarlo con tu tutor, sigue siendo tuyo.

**Cómo se hace:**

1. Abre un chat nuevo (o un chat en el proyecto "Mi TFM"). Fuera del proyecto, adjunta los dos ficheros.
2. Lanza el primer prompt: la matriz de consistencia, como artefacto de documento.
3. Lee la columna "Encaja" y las celdas marcadas: es lo que tendrás que resolver con tu tutor.
4. Lanza el segundo prompt en el mismo chat: el calendario interactivo.
5. Prueba el calendario: filtra por fase, marca una tarea como hecha y mira la línea de hoy.
6. Repite con tu TFM: cambia lo que va entre corchetes en las versiones de abajo.

Primer prompt, la matriz de consistencia:

```
Con la propuesta de TFM y la guía que te adjunto, prepara la matriz de consistencia de este TFM como artefacto de documento: una tabla con una fila por objetivo específico y estas columnas:
- Pregunta específica (la parte de la pregunta de investigación que responde ese objetivo)
- Objetivo
- Hipótesis o, si el enfoque es cualitativo, lo que se espera encontrar
- Variables o categorías que hay que observar
- Técnica de recogida y de análisis
- Fuente de los datos
- Encaja: sí, a medias o no, con el motivo en una línea

Reglas:
- Usa solo lo que dicen la propuesta y la guía. Donde la propuesta no lo diga, escribe [POR DECIDIR]; no lo completes tú.
- Marca "no encaja" cuando la técnica o la fuente no permitan responder al objetivo tal como está formulado (otro país, otro tipo de empresa, otro periodo).
- Debajo de la tabla, una lista de las tres decisiones más urgentes que tiene que tomar la autora con su tutor.
```

Segundo prompt, el calendario interactivo:

```
Ahora el calendario del TFM hasta la entrega final, como artefacto interactivo (una página que funcione en el navegador). Toma como fecha de hoy el 16 de noviembre de 2026.

Contenido:
- Los hitos de la guía del TFM (apartado 5), con su fecha exacta, como marcas que destacan.
- Las tareas que salen de la matriz (revisión de fuentes, preparar entrevistas, recoger datos, analizar, escribir cada capítulo, preparar la defensa), repartidas por semanas, cada una antes del hito que la necesita.
- Deja al menos una semana de margen antes de cada entrega y las vacaciones de Navidad (del 23 de diciembre al 6 de enero) sin tareas.

Cómo funciona:
- Un diagrama de Gantt por semanas, con una barra por tarea y una línea vertical en la fecha de hoy.
- Un filtro por fase (marco teórico, trabajo de campo, análisis, redacción, defensa).
- Una casilla para marcar cada tarea como hecha; las hechas se ven atenuadas.
- Debajo, la lista de tareas con fecha de inicio y de fin, para copiarla.
```

La matriz con tu TFM:

```
Esta es la propuesta de mi TFM sobre [tu tema] y la guía del TFM de mi máster. Prepara la matriz de consistencia como artefacto de documento: una tabla con una fila por objetivo específico y las columnas pregunta específica, objetivo, hipótesis o lo que se espera encontrar, variables o categorías, técnica de recogida y de análisis, fuente de los datos y "Encaja" (sí, a medias o no, con el motivo).

Usa solo lo que dicen mis documentos; donde no lo digan, escribe [POR DECIDIR]. Marca lo que no encaja y termina con las tres decisiones más urgentes que tengo que tomar con mi tutor.
```

El calendario con tu TFM:

```
Ahora el calendario de mi TFM como artefacto interactivo, desde hoy, [la fecha de hoy], hasta la entrega final del [fecha de entrega]. Pon los hitos de la guía con su fecha exacta y las tareas que salen de la matriz, por semanas, con margen antes de cada entrega y sin tareas en [tus semanas sin disponibilidad]. Diagrama de Gantt con la línea de hoy, filtro por fase y una casilla para marcar cada tarea como hecha.
```

**Con tus ficheros:** las fechas buenas son las del calendario oficial del máster, no las de la guía de ejemplo. Si tu propuesta aún no tiene objetivos escritos, empieza por la demo del proyecto "Mi TFM" y pide antes las preguntas del tutor.

**Comprueba que ha salido bien:**

- La matriz tiene una fila por cada uno de los cuatro objetivos de la propuesta.
- Marca como dudoso el análisis de los datos de ventas y reclamaciones de Envoltia: son de sus clientes, sobre todo españoles, y la pregunta es sobre compradores de Francia y Alemania.
- Señala que ocho entrevistas no permiten comparar con solidez alimentación y restauración (objetivo 2).
- Donde la propuesta no dice cómo se analizarán las entrevistas, pone [POR DECIDIR] en lugar de inventar una técnica.
- El calendario lleva los cinco hitos de la guía con sus fechas: 15 de diciembre de 2026, 1 de marzo, 3 de mayo y 7 de junio de 2027, y la defensa del 28 de junio al 2 de julio de 2027.
- La línea de hoy está en la semana del 16 de noviembre de 2026 y no hay tareas entre el 23 de diciembre y el 6 de enero.
- El filtro y las casillas funcionan sin recargar la página.

### Demo 4 · Las diapositivas de la defensa, y un tribunal que pregunta

**Funciona en:** Claude. Plan: sirve el gratuito: el artefacto de presentación está en todos los planes desde octubre de 2026 (fuente en la presentación de proyectos y artefactos).
**Qué necesitas:** `demo-4-diapositivas-defensa.zip`

**Entorno:** chat de claude.ai, con el artefacto de presentación (Claude Slides).
**En la sesión:** no se hace en clase: queda en el compañero para cuando llegue ese paso del TFM.
**Modelo:** Sonnet 5.5 como mínimo, mejor con Opus 5.5.

**El caso.** Al final del TFM hay que contar en quince minutos lo que ocupa ochenta páginas, delante de un tribunal que ya lo ha leído. Lo difícil no es hacer diapositivas, sino elegir qué contar y prepararse para las preguntas. Claude monta un primer borrador de diez diapositivas a partir del resumen del TFM y después hace de tribunal. La práctica usa el resumen del TFM terminado de Envoltia, ficticio.

Ficheros: `resumen-tfm-envoltia.md`.

- `resumen-tfm-envoltia.md`: la ficha, la pregunta, los objetivos, el método, los resultados, las conclusiones, las recomendaciones y las limitaciones de un TFM terminado, con cifras ficticias.

**Por qué este entorno.** El artefacto de presentación se ve diapositiva a diapositiva, se corrige pidiendo cambios y se descarga en PowerPoint o PDF. El tribunal simulado va en el mismo chat, porque tiene que conocer la presentación y el resumen.

**En el día a día.** Con tu TFM terminado, pides el borrador de la defensa y el tribunal. Claude devuelve la estructura de diez diapositivas con notas para hablar y las cinco preguntas más difíciles; qué cuentas, cómo lo dices y las respuestas son tuyas, y la presentación final la haces con la plantilla que pida el máster.

**Cómo se hace:**

1. Abre un chat nuevo y adjunta `resumen-tfm-envoltia.md`.
2. Lanza el primer prompt. Si Claude no abre el artefacto de presentación, pídelo: "Hazlo como presentación, con el tipo de artefacto de diapositivas".
3. Repasa las diez diapositivas: ¿cada cifra está en el resumen?
4. Lanza el segundo prompt en el mismo chat: el tribunal.
5. Elige una pregunta y contéstala tú en el chat. Lanza el tercer prompt para que el tribunal valore tu respuesta.
6. Repite con tu TFM: cambia lo que va entre corchetes en las versiones de abajo.

Primer prompt, la presentación:

```
Te adjunto el resumen de mi TFM terminado. Prepara la presentación para la defensa como artefacto de presentación: diez diapositivas para quince minutos ante un tribunal de tres profesores que ya ha leído el trabajo.

Estructura:
1. Título, autora y máster.
2. El problema y por qué importa a la empresa.
3. La pregunta de investigación y los objetivos.
4. El método, en un esquema.
5 a 7. Los tres resultados que más pesan, uno por diapositiva, con su cifra.
8. Conclusiones.
9. Recomendaciones para la empresa.
10. Limitaciones y líneas futuras.

Reglas:
- Usa solo cifras y hechos que estén en el resumen. Si una diapositiva necesita un dato que no está, escribe [FALTA DATO].
- Poco texto por diapositiva: un título que diga la idea y como mucho tres líneas.
- Añade en cada diapositiva una nota para el orador de unas 60 palabras.
```

Segundo prompt, el tribunal:

```
Ahora haz de tribunal. Eres un tribunal de tres profesores de un máster de negocios internacionales: uno experto en metodología, otro en marketing B2B y otro en estrategia internacional. Habéis leído el TFM entero y acabáis de ver la presentación.

Hazme las cinco preguntas más difíciles que me haríais, de la más a la menos incómoda. Para cada una, di quién la hace, qué punto débil del trabajo busca y qué tendría que tener una buena respuesta. No me des la respuesta redactada.
```

Tercer prompt, la valoración de tu respuesta:

```
Esta es mi respuesta a la pregunta [número]: [tu respuesta]. Valórala como lo haría el tribunal: qué convence, qué no y qué pregunta de seguimiento haríais. Sé exigente.
```

Con tu TFM, el primer prompt:

```
Te adjunto el resumen de mi TFM sobre [tu tema]. Prepara la presentación para la defensa como artefacto de presentación: [número] diapositivas para [minutos] minutos ante un tribunal que ya ha leído el trabajo, con el problema, la pregunta y los objetivos, el método, los resultados que más pesan, las conclusiones, las recomendaciones y las limitaciones. Usa solo cifras que estén en el resumen; si falta un dato, escribe [FALTA DATO]. Poco texto por diapositiva y una nota para el orador en cada una.
```

**Con tus ficheros:** el resumen que adjuntas tiene que salir de tu TFM ya escrito: Claude no debe completar resultados que no tienes. Si el máster da una plantilla de diapositivas, descarga el artefacto en PowerPoint y pasa el contenido a la plantilla.

**Comprueba que ha salido bien:**

- Hay diez diapositivas y los tres resultados son los que más pesan en el resumen: el plazo decide más que el precio (siete de diez frente a dos), el 23 % de pedidos internacionales con más de cinco días de retraso frente al 6 % nacional, y la certificación como condición de entrada.
- Ninguna cifra falta en el resumen: si aparece un porcentaje de crecimiento del mercado o un precio, no está en el resumen y hay que quitarlo.
- La diapositiva de limitaciones dice que diez entrevistas no permiten generalizar y que la relación entre retrasos y clientes perdidos es una coincidencia en el tiempo, no una causa.
- El tribunal pregunta, como mínimo, por el tamaño y el sesgo de la muestra y por la recomendación de un almacén en Lyon, que el trabajo no ha calculado.
- El tribunal no te da las respuestas redactadas.

### Demo 5 · De una carpeta de PDFs a la bibliografía, con Cowork

**Funciona en:** Claude. Plan: de pago (Pro, Max, Team o Enterprise): Cowork no está en el plan gratuito. Necesita la aplicación de escritorio instalada con el instalador actual (`claude.com/download`).
**Qué necesitas:** `demo-5-bibliografia.zip`

**Entorno:** Cowork, en la aplicación de escritorio, sobre una carpeta de tu ordenador.
**En la sesión:** demostración del formador, unos 15 minutos; después la podéis repetir con vuestro TFM.
**Modelo:** Opus 5.5, o Sonnet 5.5 si tu plan no lo tiene.

**El caso.** A mitad de TFM, la carpeta de fuentes es un cajón: "descarga (3).pdf", "notas.txt", el mismo artículo guardado dos veces con nombres distintos. Montar la bibliografía a mano a partir de ahí es lento y se cuelan errores. Cowork abre cada fichero, lo renombra con un criterio, monta la bibliografía en APA 7 y una tabla que dice a qué pregunta del TFM responde cada fuente, y señala lo que no puede resolver solo. La práctica usa una carpeta de diez fuentes ficticias del TFM de Envoltia.

Ficheros: la carpeta `fuentes-tfm/`, con diez fuentes ficticias.

- `descarga (3).pdf` y `articulo_proveedores_FINAL.md`: el mismo artículo de revista, guardado dos veces.
- `informe OEES envases 2026.pdf`: el informe sectorial de la demo de Claude.ai.
- `Herrero_cap4_escaneado.pdf`: un capítulo de libro.
- `Ponce2023 tesis.txt`: el resumen de una tesis doctoral.
- `EUreport packaging.md`: un informe técnico de un organismo europeo inventado.
- `doc_sin_titulo.pdf`: las diapositivas de un webinar de una asociación.
- `notas.txt`: notas copiadas de una web, sin autor ni fecha.
- `entrevista_comprador_lyon.md`: las notas de una entrevista de la autora.
- `reclamaciones envoltia 2024-2025.csv`: datos internos de la empresa.

**Por qué este entorno.** Son diez ficheros que hay que abrir uno a uno, renombrar y cruzar: trabajo sobre una carpeta, no una conversación. Cowork propone un plan, trabaja sobre los ficheros y entrega otros ficheros (la bibliografía y la tabla) en la misma carpeta.

**En el día a día.** Cada vez que la carpeta de fuentes crece, le pides que la ordene y que actualice la bibliografía y la tabla. Cowork devuelve los ficheros renombrados, la bibliografía y la lista de lo que no ha podido resolver; completar los datos que faltan y comprobar cada referencia en su fuente sigue siendo tuyo.

**Cómo se hace:**

1. Descarga el zip de la demo y descomprímelo. Haz una copia de la carpeta `fuentes-tfm`: Cowork trabajará sobre la copia.
2. Abre la aplicación de escritorio de Claude y cambia a Cowork. Si ves el selector de modo, elige el manual (Manually approve) para aprobar cada acción.
3. Elige la copia de la carpeta como carpeta de trabajo. Hazlo desde una conversación fuera de un proyecto.
4. Pega el encargo y revisa el plan que propone antes de aprobarlo.
5. Aprueba las acciones una a una y mira cómo cambian los nombres en el explorador de ficheros.
6. Abre `bibliografia.md` y `tabla-de-fuentes.md` y repasa lo que Cowork marca como pendiente.
7. Con tus fuentes: usa la versión con corchetes, sobre una copia de tu carpeta.

El encargo:

```
Esta carpeta tiene las fuentes de mi TFM sobre qué valoran los compradores B2B de Francia y Alemania de un proveedor de envases compostables. Los objetivos del TFM son:
O1. Identificar los atributos que los compradores usan para elegir y para dejar a un proveedor.
O2. Comparar compradores de alimentación y de restauración.
O3. Valorar la posición de la empresa (Envoltia) frente a esos atributos.
O4. Proponer cambios en su propuesta comercial.

Haz esto:
1. Abre cada fichero y averigua autor, año, título y tipo de fuente (artículo, libro, informe, tesis, web, datos internos, entrevista propia...).
2. Renómbralos así: año_autor_titulo-corto, en minúsculas, sin espacios ni tildes. Si falta el año, usa "sf"; si falta el autor, usa "sin-autor".
3. Si dos ficheros son la misma fuente, no borres ninguno: mueve el repetido a una subcarpeta _duplicados y anota de cuál es copia.
4. Crea bibliografia.md con la bibliografía en APA 7, en orden alfabético. Las entrevistas propias no van en la lista de referencias en APA 7: ponlas aparte, en una nota. Si falta un dato, escribe [FALTA: dato] en su sitio; no lo inventes ni lo busques en la web.
5. Crea tabla-de-fuentes.md con una fila por fuente y las columnas: nombre nuevo del fichero, autor, año, tipo, objetivo del TFM al que responde (O1 a O4) y para qué sirve, en una línea.
6. Termina con PENDIENTES.md: los duplicados, las fuentes con datos que faltan y cualquier duda.

Reglas: no borres nada. No cambies el contenido de ningún fichero, solo el nombre y la ubicación de los duplicados.
```

El encargo con tu carpeta:

```
Esta carpeta tiene las fuentes de mi TFM sobre [tu tema]. Los objetivos son:
[O1...]
[O2...]

Abre cada fichero y averigua autor, año, título y tipo. Renómbralos como año_autor_titulo-corto (sin espacios ni tildes; "sf" si falta el año, "sin-autor" si falta el autor). Mueve los duplicados a _duplicados sin borrar nada. Crea bibliografia.md en APA 7 con [FALTA: dato] donde falte algo, tabla-de-fuentes.md (fichero, autor, año, tipo, objetivo al que responde y para qué sirve) y PENDIENTES.md. No borres nada ni cambies el contenido de ningún fichero.
```

**Con tus ficheros:** trabaja siempre sobre una copia y elige solo la carpeta de fuentes, no "Documentos" entero. Si tus fuentes son PDF escaneados sin texto, Cowork puede leer mal autores y años: compruébalos. La bibliografía final la contrastas con cada fuente original (portada, página de créditos, DOI); los gestores de referencias de la biblioteca siguen siendo la mejor herramienta para mantenerla.

**Comprueba que ha salido bien:**

- Hay nueve fuentes distintas: `descarga (3).pdf` y `articulo_proveedores_FINAL.md` son el mismo artículo (Müller y Laurent, 2024), y uno de los dos está en `_duplicados` con la nota de cuál es copia.
- `notas.txt` sale como "sin-autor" y "sf", y aparece en PENDIENTES.md: falta autor, fecha y título; solo hay una dirección web.
- La entrevista de Lyon no está en la lista de referencias; va aparte, como comunicación personal o fuente primaria propia.
- El informe del OEES figura como informe de 2026 y el del CEEE como informe técnico de 2025.
- La tabla asigna la entrevista y el artículo al objetivo O1, y las reclamaciones de Envoltia al O3.
- Ningún fichero se ha borrado y ninguno ha cambiado de contenido: la carpeta sigue teniendo diez ficheros, más los tres nuevos.
- Ninguna referencia lleva un dato que no esté en su fichero (un DOI, una ciudad, un número de páginas inventado).

### Demo 6 · Un revisor de capítulos para el TFM, como skill

**Funciona en:** Claude. Plan: las skills propias se suben en los planes de pago; si en el vuestro no aparece la opción, pegad el contenido de SKILL.md al principio del chat. Necesitan el permiso de ejecución de código y creación de ficheros activado en los ajustes.
**Qué necesitas:** `demo-6-revisor-capitulos.zip` y `skill-revisor-capitulos-tfm.zip`

**Entorno:** chat de claude.ai con la skill `revisor-capitulos-tfm` subida (si tu plan no permite subir skills, el chat con el SKILL.md adjunto; ver el último paso).
**En la sesión:** no se hace en clase: queda en el compañero para cuando llegue ese paso del TFM.
**Modelo:** Sonnet 5.5 como mínimo, mejor con Opus 5.5.
**El caso.** Antes de mandar un capítulo al tutor conviene repasarlo contra la rúbrica: que cada afirmación tenga fuente, que el método responda a la pregunta, que las conclusiones no vayan más allá de los datos. Hacerlo a mano con cada capítulo es pesado, y pedirle a un chat que "lo mejore" devuelve un texto reescrito que ya no es tuyo. La skill guarda el método una vez: revisa contra una rúbrica, cita el fragmento de cada problema y devuelve comentarios, nunca texto. La práctica usa un borrador ficticio del capítulo de metodología de Envoltia con tres problemas puestos a propósito.

Ficheros: `revisor-capitulos-tfm.zip`, la carpeta `revisor-capitulos-tfm/` y `capitulo-3-metodologia-borrador.md`.

- `revisor-capitulos-tfm.zip`: la skill, lista para subir.
- `revisor-capitulos-tfm/SKILL.md`: la misma skill, para leerla. Lleva dentro una rúbrica de ejemplo, no la oficial del máster.
- `capitulo-3-metodologia-borrador.md`: el borrador del capítulo de metodología, ficticio, con los problemas puestos a propósito.

**Por qué este entorno.** Una skill es un método escrito una vez que Claude aplica cuando la tarea encaja, sin nombrarla ni pegar instrucciones. Para revisar cada capítulo del TFM de la misma manera, es justo lo que hace falta: la rúbrica y las reglas (comentar, no reescribir) van dentro.

**En el día a día.** Adjuntas el capítulo que acabas de escribir y pides que lo revise. La skill devuelve la valoración por criterio y los comentarios con el fragmento citado; qué cambias y cómo lo escribes sigue siendo tuyo, y la valoración que cuenta es la de tu tutor.

**Cómo se hace:**

1. En claude.ai, abre los ajustes y comprueba que la ejecución de código y creación de ficheros está activada.
2. En Customize > Skills (o en el apartado de skills de los ajustes), sube `revisor-capitulos-tfm.zip` y actívala. Si el menú tiene otro nombre en vuestra cuenta, buscad "skills" en los ajustes.
3. Abre un chat nuevo, adjunta `capitulo-3-metodologia-borrador.md` y escribe el primer prompt, sin nombrar la skill.
4. Comprueba que la respuesta sigue el formato de la skill: tabla por criterio, comentarios con el fragmento citado y la frase final.
5. Lanza el segundo prompt: pide el texto reescrito y mira cómo se niega.
6. Con tus ficheros: adjunta la rúbrica oficial de tu máster junto al capítulo y la skill la usará en lugar de la de ejemplo. Si tu plan no permite subir skills, adjunta `SKILL.md` y el capítulo en un chat y escribe primero "Sigue las instrucciones de SKILL.md para revisar este capítulo".

Primer prompt, sin nombrar la skill:

```
Revisa este capítulo de mi TFM antes de mandárselo a mi tutor.
```

Segundo prompt, la petición que no debe atender:

```
Vale, ahora pásame el apartado 3.5 corregido, listo para pegar.
```

Con tu capítulo y tu rúbrica:

```
Revisa este capítulo de mi TFM sobre [tu tema] con la rúbrica oficial de mi máster, que te adjunto. Mi pregunta de investigación es: [tu pregunta].
```

**Con tus ficheros:** la rúbrica de la skill es un ejemplo. Para tu TFM, adjunta la rúbrica o la guía oficial, o pide a Claude que ajuste la sección "La rúbrica" del SKILL.md con los criterios de tu máster y vuelve a subir la skill. Si cambias la skill, vuelve a empaquetarla como zip con la carpeta `revisor-capitulos-tfm` y su SKILL.md dentro.

**Comprueba que ha salido bien:**

- Marca "no cumple" en afirmaciones con fuente y cita "según los expertos del sector, el 80 % de los compradores europeos cambiará de proveedor antes de 2028" y "es sabido que los compradores alemanes son los más exigentes".
- Marca "no cumple" en método adecuado: la pregunta es sobre compradores de Francia y Alemania, de alimentación y de restauración, y las entrevistas son a seis cadenas de restauración españolas.
- Marca "no cumple" en conclusiones: tres entrevistas no permiten decir que "el precio no importa a los compradores europeos" ni recomendar subir los precios un 15 %.
- Señala también que la cita "Müller (2024)" no coincide con la bibliografía, donde los autores son Müller y Laurent, y que faltan las limitaciones.
- No devuelve ningún apartado reescrito, y al segundo prompt recuerda que solo comenta.
- Termina con "Revisión hecha por una herramienta de IA como apoyo. La valoración que cuenta es la de tu tutor."

## El TFM con IA · Siete pasos

El resumen de la sesión, ordenado como un TFM: qué paso de vuestro trabajo cubre cada ejercicio y cada demo, lo que la IA no hace por vosotros y cómo se declara lo que sí ha hecho. Es el cierre de la sesión (deck 00, slides 09 a 14) y la ficha a la que volver cuando empecéis cada capítulo.

### Flujo · De la pregunta a la defensa, paso a paso

**Funciona en:** cualquier herramienta; cada paso dice qué ejercicio o demo lo cubre
**Qué necesitas:** el tema de vuestro TFM, aunque sea provisional

Un TFM de investigación de mercados tiene siete pasos. En todos puede ayudar la IA, y en todos hay una parte que solo podéis hacer vosotros. La columna de la derecha dice dónde lo habéis practicado hoy.

| Paso | La IA ayuda a | Lo hacéis vosotros | Dónde está |
|---|---|---|---|
| 1 · Pregunta | Afinar la pregunta, los objetivos y las hipótesis | Elegir el tema y decidir el alcance con el tutor | Ejercicio 1 |
| 2 · Fuentes | Leer y cruzar vuestras fuentes, con la cita de cada idea | Elegir qué fuentes entran y leerlas | Ejercicio 2 y demo 5 |
| 3 · Estado de la cuestión | Buscar y resumir lo publicado | Auditar cada referencia antes de usarla | Ejercicio 3 |
| 4 · Método | Comprobar que pregunta, técnica y datos encajan | Decidir la técnica y justificarla | Demo 3 |
| 5 · Datos y análisis | Limpiar, contar y proponer lecturas | Recoger los datos y comprobar cada cifra | Las sesiones de investigación de mercados de la asignatura |
| 6 · Redacción | Revisar capítulos contra la rúbrica | Escribir: la IA comenta, no redacta | Demos 2 y 6 |
| 7 · Defensa | Preparar las diapositivas y las preguntas del tribunal | Defenderlo sin leer | Demo 4 |

Antes de cada reunión con el tutor, este prompt os ayuda a llegar con las preguntas que importan. Pegad lo que tengáis (la pregunta, el índice, el capítulo en curso) donde dice "lo que tengo".

```
Eres tutor de trabajos finales de un máster en negocios internacionales. Tengo una reunión de tutoría de 30 minutos la semana que viene.

Lo que tengo:
[pegad aquí vuestra pregunta de investigación, el índice y el estado de cada capítulo]

No me resuelvas nada. Hazme esto:
1. Las tres decisiones que debería cerrar con mi tutor en esa reunión, de la más urgente a la menos.
2. Para cada una, la pregunta exacta que le haría, en una frase.
3. Una cosa que yo debería tener hecha antes de la reunión para no perder el tiempo.

Si te falta información para saber en qué paso estoy, pregúntame antes de responder.
```

**Comprueba que ha salido bien:**

- Sabéis en qué paso de los siete está vuestro TFM y qué ejercicio o demo de hoy os sirve para el siguiente.
- Las tres preguntas para el tutor son decisiones, no dudas que podríais resolver solos buscando.

### Límites · Lo que la IA no hace por vosotros

**Funciona en:** cualquier herramienta
**Qué necesitas:** nada; son las normas habituales de integridad académica en un trabajo final

Cuatro límites que valen para cualquier herramienta y cualquier capítulo:

- **No escribe el TFM.** Puede comentar un capítulo, señalar huecos y haceros preguntas. El texto que se entrega es vuestro.
- **No inventa datos ni entrevistas.** Ni respuestas de encuesta, ni citas de expertos, ni cifras de mercado que no estén en una fuente que hayáis abierto.
- **No recibe datos personales.** Las transcripciones de entrevistas se anonimizan antes de subirlas a cualquier herramienta: nombres, empresas, cargos y cualquier detalle que permita reconocer a alguien. Hacedlo a mano o con buscar y reemplazar en vuestro ordenador, nunca pidiéndoselo a la IA, porque eso ya es subir los datos.
- **No sustituye al tutor.** Las decisiones de alcance y de método se acuerdan con quien firma la tutoría.

Son las normas habituales de integridad académica aplicadas a la IA. Si la guía del TFM de vuestro programa añade algo, manda la guía.

**Comprueba que ha salido bien:**

- Podéis explicar con vuestras palabras cada parte de lo que entregáis, sin la IA delante.
- Ninguna transcripción de vuestras entrevistas sale de vuestro ordenador sin anonimizar.

### Declaración · Declarar el uso de la IA en el TFM

**Funciona en:** cualquier herramienta
**Qué necesitas:** el registro de IA que ya usáis en la asignatura, si lo lleváis

Una declaración de uso de la IA contesta cuatro preguntas por cada uso que haya pesado en el trabajo: qué herramienta, para qué, con qué prompt y qué revisasteis vosotros. Lo más cómodo es anotarlo mientras trabajáis, en el registro de IA de la asignatura, y resumirlo al final con esta plantilla en el apartado que pida la guía del TFM.

```
Declaración de uso de herramientas de inteligencia artificial

Uso 1
- Herramienta y versión: [por ejemplo, Gemini, investigación profunda, plan gratuito, noviembre de 2026]
- Para qué y en qué capítulo: [por ejemplo, buscar literatura para el estado de la cuestión, capítulo 2]
- Prompt o enlace a la conversación: [el enlace, o el prompt si la herramienta no deja compartir]
- Qué revisé yo: [por ejemplo, abrí las 14 referencias; descarté 3 que no existían o no decían eso]

Uso 2
[igual]

Lo que no hizo la IA: [por ejemplo, la redacción de los capítulos, el análisis de los datos y las conclusiones son míos]
```

**Comprueba que ha salido bien:**

- Cada uso declarado dice qué revisasteis, no solo qué herramienta usasteis.
- La declaración cuadra con lo que diga la guía del TFM sobre dónde va y qué tiene que incluir.
