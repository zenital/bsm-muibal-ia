# Notas de las slides

Las notas del orador de los seis decks, en orden. Es lo mismo que se ve en la vista del orador (tecla N en el deck); aquí se puede leer entero antes de clase. Este texto se genera con `npm run build`: para cambiar una nota, cambiadla en el deck.

Actualizado el 31/10/2026.

## Apertura y cierre · La sesión y el TFM con IA

### 01 · Portada

*Apertura · 15 min en total (slides 01 a 08)*

Proyectad esta slide mientras entran. En cuanto haya quórum, pasad a la 07 (el compañero) y pedid que lo abran en el portátil: lo van a necesitar en el primer ejercicio, dentro de una hora.

Este deck abre y cierra la sesión. Las slides 09 a 14 son el cierre: el TFM con IA en siete pasos.

### 02 · Quién soy

Un minuto. Lo que importa al grupo: hoy no viene alguien que solo usa la IA, sino alguien que la enseña por dentro (deep learning) y la aplica en empresa. Eso justifica el deck 01: cómo funciona por dentro.

### 03 · La sesión en una página

Confirmado con Manel: lo de esta sesión entra en el examen tipo test del 23/11/2026. Decidlo al principio: cambia cómo se toman la sesión.

### 04 · El plan

Los minutos de cada bloque están en internal/plan-sesion.md. La pausa, de unos 15 minutos, se decide sobre la marcha. Si el deck 01 se alarga, el bloque de Claude es el que absorbe el retraso: tiene una versión con una sola demo.

### 05 · Lo que ya visteis con Manel

No se repite nada de las sesiones de Manel (encuestas, Trends, Analytics, TAM, ficha de fuente). Si alguien saca un tema de esos, se le remite al compañero de la asignatura.

### 06 · El caso: vuestro TFM o Envoltia

Pedid que cada pareja decida ahora con qué caso trabaja: si los dos tienen tema, eligen uno. El caso Envoltia está en ficheros-practica/caso-envoltia.md.

### 07 · El compañero

El QR abre el compañero del alumnado: https://presentation.zenital.io/share/wTniVbSYok-L-fmwB1fhU1e5G5GhYVAi. Dejad la slide un minuto para que lo escaneen; el mismo enlace está en el Aula Global.

### 08 · Tres reglas para hoy

Un minuto y al deck 01. Las tres reglas vuelven en el cierre (slides 11 y 12). Las tres reglas son las habituales de integridad académica en un trabajo final: la autoría es de quien firma, lo que se usa se cita y lo que hace una herramienta se declara.

### 09 · El TFM con IA

*Cierre · 15 min (slides 09 a 14)*

Se vuelve a este deck después de las demos de Claude. Es el resumen de la sesión ordenado como un TFM: cada paso dice qué ejercicio o demo de hoy lo cubre.

### 10 · Siete pasos

Recorred la tabla de arriba abajo en 4 minutos, señalando lo que ya han hecho hoy. El paso 5 remite a las sesiones de Manel a propósito: análisis de encuestas y datos ya se vio allí.

### 11 · Lo que la IA no hace por vosotros

Son las normas habituales de integridad académica aplicadas a la IA: autoría propia, nada inventado, protección de datos de las personas entrevistadas y el tutor como quien valida las decisiones. Si la guía del TFM de BSM añade algo, manda la guía.

## Qué es la IA generativa

### 01 · Portada

*Bloque 1 · 45 min (40 si va justo)*

El módulo 0 común, para que todo el grupo parta del mismo sitio. Tiempos orientativos: 01 a 03, apertura y dos visiones (3 min); 04 a 08, la vela, la aceleración y el zumo de limón (6 min, la historia en un minuto: el grupo ya la vio con Manel); 09 a 13, qué es, tokens, embeddings y predicción (10 min); 14 a 18, la misma conversación (5 min, con la 16 sola si va justo); 19 a 25, caja negra, alucinaciones, sesgos y human in the loop (12 min); 26, de responder a actuar (2 min); 27 a 29, prompting básico (4 min, el deck 02 lo retoma); 30 a 33, automatización, el 95 % y cierre (3 min).

Lo que no hay que repetir: en las sesiones de Manel ya vieron la historia de GPT-4 y la regla de comprobar cada dato. Aquí el foco es cómo funciona por dentro y por qué eso cambia cómo se usa en un TFM.

Sin conexión, las slides 05 y 06 no cargan (las animaciones usan Tailwind y fuentes de internet): se salta de la 04 a la 07.

### 03 · Dos visiones de la IA

*2 min*

Dos personas que saben mucho de IA y dicen cosas opuestas. La pregunta a la sala: ¿con cuál os quedáis? No hace falta resolverlo; el módulo da criterio para decidir.

La frase de Schmidt es su charla de TED2025, entrevistado por Bilawal Sidhu (traducción propia). La comparación de la IA con el fuego o la electricidad, que circula atribuida a él, es de Sundar Pichai (2018); no usarla aquí.

LeCun dejó Meta en noviembre de 2025 para fundar AMI Labs. Su idea de que la IA aún no llega al nivel de un gato la repite desde 2018 (Quote Investigator la documenta). TODO: verificar que la frase exacta sale en el vídeo citado; si no, citarla como idea recurrente de LeCun.

TODO: verificar la fuente y la licencia de las dos fotos y ponerla en el pie.

### 16 · La misma conversación, hoy

*16 y 17 · 3 min las dos (con 14 y 15, 6 min)*

Las mismas dos preguntas de 14 y 15, hechas a un asistente actual. Aquí resuelve el acertijo clásico y además cuenta la variante del paraguas. Si va justo, de 14 a 17 se cuenta con esta sola slide: se lee la pregunta, se recuerda la respuesta de hace unos meses (baja estatura, una discapacidad, las bolsas, el ejercicio) y se enseña esta.

Antes del 4/11: volver a hacer las dos preguntas en un asistente gratuito (Gemini, ChatGPT o Claude) y, si la respuesta cambia, transcribirla aquí con la herramienta y la fecha.

### 17 · La misma conversación, hoy · 2

La trampa: en esta versión no hay acertijo. Hace unos meses el modelo contestaba "es un niño" porque reconocía la forma del acertijo, no su contenido (slide 15). Hoy detecta que falta la anomalía. Es el puente a la 18: los modelos siguen mejorando.

Respuesta generada con Claude el 31/10/2026 al preparar el deck. Antes del 4/11, repetir la pregunta en el asistente gratuito que vaya a usar la clase y, si contesta distinto, transcribir su respuesta con herramienta y fecha. Si alguna herramienta vuelve a decir "es un niño", mejor: se enseña como ejemplo de alucinación.

### 26 · De responder a actuar

*3 min*

Puente al deck 02: el agente es lo que se usa en el bloque 3 (investigación profunda, ejercicio 3) y en la demo de la tarea programada.

### 30 · IA + script + automatización

*30 y 31 · 2 min las dos*

La idea: la IA hace una vez la parte difícil (escribir el script) y una herramienta de automatización la repite siempre igual. El ejemplo es del TFM a propósito: la vigilancia de competidores ya la vieron con Manel.

Los falsos positivos son reales: una palabra clave amplia trae artículos de otros campos. Por eso alguien tiene que revisar lo que la máquina marca.

### 31 · IA + script + automatización · 2

No se monta nada ahora. El mensaje: la máquina trae, la persona decide qué entra en el estado de la cuestión. Si alguien pregunta, OpenAlex tiene una API gratuita (TODO: verificar los límites de uso actuales antes de la sesión).

### 32 · Encender una bombilla no es iluminar el edificio

*3 min, y se cierra el módulo*

La cifra es real, pero conviene leerla con cuidado, y es un buen ejemplo para una asignatura de investigación: es un informe preliminar del proyecto NANDA del MIT, con 52 organizaciones entrevistadas y 153 directivos encuestados, y mide el retorno declarado por las propias empresas. Preguntad a la sala qué le falta a la cifra para fiarse de ella (muestra, definición de retorno, quién responde).

El mensaje no cambia: una demo impresiona, ponerla a funcionar cada día con datos reales es otro trabajo.

### 33 · Gracias

*Sin pausa aquí*

Se pasa directamente al deck 02, bloque 1: pedir bien. La pausa va después del ejercicio 1.

## La IA para investigar: prompts, documentos y agentes

### 01 · Portada

*Después del módulo 0 · unos 100 minutos con la pausa dentro: bloque 1 (30), pausa (15), bloque 2 (25) y bloque 3 (30, con el ejercicio 3 en su versión de 15 min)*

Tres bloques, un ejercicio en cada uno, todos sobre el TFM de cada persona. Quien todavía no tiene tema trabaja con Envoltia, el caso de reserva. El módulo 0 ya ha contado tokens, alucinaciones, sesgos, human in the loop y el prompting básico: aquí no se repite, se construye encima.

Los tres ejercicios, en parejas: con unas 40 personas, unas 20 parejas. En la pareja, una persona trae su tema de TFM y la otra hace de tutora; en el ejercicio siguiente se cambian los papeles. En las puestas en común salen tres o cuatro parejas y el resto añade lo que falte.

Que tengan abiertos el compañero y los ficheros. Para el ejercicio 2 hace falta una cuenta de Google (o un proyecto de ChatGPT o de Claude); para el 3, al menos una persona por pareja con una herramienta que tenga investigación profunda en su plan (Gemini la tiene en el gratuito, con límite).

Ojo: las sesiones de Manel Vericat en esta misma asignatura ya han trabajado encuestas, análisis, reseñas, herramientas digitales y mercados internacionales con su propio caso. Aquí no se citan ni se repiten: si alguien pregunta por ellas, "eso ya lo visteis; hoy es la IA para el TFM".

### 02 · Vuestro TFM, o Envoltia

*2 min · el hilo*

Preguntar a mano alzada quién tiene ya tema de TFM. Los que no, Envoltia. Cada bloque deja una pieza del TFM: la pregunta, el mapa de fuentes y el estado de la cuestión auditado. Se recogen en la slide 32.

Si alguien pregunta si puede usar la IA en el TFM: lo que diga la guía del TFM y su tutor manda; hoy aprendemos a usarla sin que escriba por ellos y declarando cómo se ha usado (lo cierra la sesión).

### 03 · 1 · Pedir bien: el prompt de investigación

*Bloque 1 · unos 30 min*

Slides 04 a 12. El módulo 0 dejó la idea: "no es magia, es ser claro". Aquí se le pone método. Si va justo: la 05 se cuenta dentro de la 04, la 07 se salta y la 08 y la 09 se cuentan como una.

### 04 · El marco, aplicado a investigar

*3 min · el marco*

El módulo 0 dio cinco hábitos sueltos; aquí se ordenan en un marco. Subrayar que **el contexto manda**: en un TFM, el contexto es el problema que hay detrás y el tiempo que hay para resolverlo. Una pregunta de investigación sin problema detrás es una curiosidad, y un tribunal lo nota.

### 05 · Dos piezas más: ejemplos y límites

*2 min · ejemplos y límites*

El límite del "no consta" vuelve en el bloque 2: es lo que se comprueba con las preguntas trampa del ejercicio 2. Recorte: se cuenta en una frase al final de la 04.

### 06 · Técnicas con nombre

*2 min · técnicas con nombre*

Cuatro nombres que van a encontrar en cualquier guía de prompting. El few-shot ya salió en el módulo 0: la siguiente slide lo aplica a una tarea típica del TFM, ordenar la literatura.

### 07 · Un ejemplo vale más que una explicación

*2 min · few-shot aplicado*

El mismo gesto que el módulo 0, aplicado a lo primero que hace casi todo TFM: ordenar la literatura. Con 30 o 40 resúmenes clasificados así, se ve enseguida si un tema solo tiene estudios cualitativos o si todo lo que hay son informes de consultoras. El "no consta" es el límite de la slide 05.

Avisar: la clasificación se revisa. Un resumen que dice "estudio de caso" puede ser cualitativo o mixto según lo que haya dentro. Recorte: es la primera que cae del bloque.

### 08 · Modelos generales y modelos razonadores

*2 min · generales y razonadores*

Diseñar la investigación de un TFM es tarea de razonador: en el ejercicio 1 lanzan el mismo prompt en los dos modos y comparan.

Los nombres del selector cambian cada pocos meses: enseñar dónde está en la herramienta que se proyecte, sin prometer el nombre.

### 09 · Cómo cambia el prompt con un razonador

*3 min · cómo cambia el prompt*

Matiz respecto al módulo 0, que recomendaba "piénsalo paso a paso": con un modelo general sigue ayudando; con un razonador, sobra. El consejo depende del modelo.

La tercera fila es la que más rinde en un TFM: el criterio de éxito es la viabilidad. La IA propone sin problema una investigación que llevaría dos años; decirle el tiempo y los datos a los que se tiene acceso la baja a tierra.

### 10 · El truco

*1 min · el truco*

El de más retorno por esfuerzo. En el ejercicio 1 lo van a necesitar: "quiero hacer el TFM sobre sostenibilidad en el comercio exterior" no dice qué sector, qué país, qué datos ni para quién. Si la IA pregunta bien, ya tienen media lista de lo que le falta a su tema.

### 11 · Ejercicio 1 · De vuestro tema de TFM a la pregunta de investigación

*Ejercicio 1 · 15 min, puesta en común incluida*

Minuto 0: que abran el ejercicio 1 en el compañero y la plantilla plantilla-pregunta-investigacion.md. Minuto 3: si una pareja no ha escrito sus tres líneas, que pase a Envoltia (caso-envoltia.md). Minuto 9: el mismo prompt en el otro modo. Minuto 12: puesta en común con la slide 12, tres parejas.

Con unas 20 parejas no se llega a todas las mesas: empezar por las que no tienen tema, que son las que más se atascan. Resultado de referencia para Envoltia, errores frecuentes y plan B: ficheros-practica/ejercicio-1-pregunta-investigacion/README.md.

### 12 · Ejercicio 1 · Qué hemos visto

*Puesta en común · 3 min, del minuto 12 al 15*

Lo habitual: el prompt rápido da una pregunta enorme ("¿cómo afecta la sostenibilidad al comercio internacional?") que no cabe en un TFM. El bueno la acota por sector, país, periodo y tipo de dato. Si alguien trae una hipótesis que no se puede contrastar con los datos que tendrá, es el mejor ejemplo de la tercera fila de la slide 09.

Que guarden la pregunta y los objetivos: son el contexto que pegarán en el ejercicio 3 y en el proyecto de Claude de la segunda parte.

### 13 · 2 · Preguntar a vuestras fuentes: RAG y Gemini Notebook

*Bloque 2 · unos 25 min, después de la pausa*

Slides 14 a 19. NotebookLM se llama Gemini Notebook desde el 16/07/2026 (blog de Google); notebooklm.google sigue funcionando y redirige. Decirlo al principio: buscarán "NotebookLM" y encontrarán lo mismo. TODO: verificar la víspera que el nombre y la dirección siguen así.

Si va justo, la 14 se salta: el ejercicio 2 es lo que no se recorta del bloque.

### 14 · La ventana de contexto

*2 min · la ventana de contexto*

Explica dos frustraciones que la sala ya ha vivido: que un chat nuevo no recuerde nada y que pegar diez artículos enteros dé respuestas flojas. La salida a las dos es la siguiente slide. Si preguntan cuánto cabe: depende del modelo y cambia cada pocos meses; la regla no cambia.

La referencia de Liu y otros es, de paso, un buen ejemplo de cita que se puede comprobar: sale en el bloque 3.

### 15 · Qué es RAG

*3 min · RAG*

Explicarlo con una biblioteca: no se lee todos los libros cada vez, va a la estantería que toca. Es exactamente lo que necesita un TFM: preguntar a 20 artículos a la vez sin pegarlos enteros.

Recorte: la nota de abajo se dice en una frase.

### 16 · Proyectos, cuadernos y Gems

*2 min · el mismo patrón*

Gemini Notebook es el que usamos en el ejercicio 2 porque solo responde con las fuentes y enseña la cita al lado. Quien no tenga cuenta de Google: un proyecto de ChatGPT o de Claude, con los mismos ficheros.

Para un TFM, un cuaderno por capítulo o por bloque de literatura funciona mejor que uno con todo: menos ruido en cada respuesta.

Ojo con las Gems: Google anunció que pasan a solo lectura el 17/11/2026, el día después de esta sesión, y que desaparecen el 17/12 en cuentas personales (TODO: verificar la víspera en la ayuda de Google). No recomendar que monten nada nuevo en una Gem: mejor un cuaderno, un proyecto o una skill.

Lo que siempre se comparte son las instrucciones y los documentos. Según la herramienta y la configuración de memoria, un chat puede recordar o no otros chats del mismo proyecto (TODO: verificar el comportamiento actual en Claude y en ChatGPT).

### 17 · Lo que hace bien y sus límites

*2 min · límites*

"Con más frecuencia" es a propósito: no es infalible. Es lo que van a comprobar con las dos preguntas trampa del ejercicio 2.

Sobre las entrevistas propias: además de anonimizar, el consentimiento informado que firme la persona entrevistada tiene que permitir ese uso. Si su TFM tiene trabajo de campo con personas, que lo consulten con su tutor.

### 18 · Ejercicio 2 · Preguntar a vuestras fuentes

*Ejercicio 2 · 20 min, puesta en común incluida*

Minuto 0: que descarguen las seis fuentes de Envoltia (o reúnan las suyas: PDF de artículos, informes, notas). Cambio de papeles: ahora trae el tema la otra persona de la pareja. Minuto 3: todos con el cuaderno creado; si alguien no puede, que se una a otra pareja. Minuto 10: las trampas. Minuto 14: abrir tres citas. Minuto 17: puesta en común con la slide 19.

Las trampas, la contradicción plantada entre dos fuentes de Envoltia y el mapa de referencia: ficheros-practica/ejercicio-2-fuentes-notebook/README.md. Quien use sus propias fuentes: las trampas se las inventa la pareja, preguntando algo que saben que sus fuentes no dicen.

### 19 · Ejercicio 2 · Qué hemos visto

*Puesta en común · 3 min*

La tercera pregunta es la clave de un estado de la cuestión: no basta con resumir, hay que decir qué fuente pesa más (artículo revisado por pares frente a informe de una asociación del sector, muestra grande frente a pequeña, reciente frente a vieja).

La cuarta es el puente al bloque 3: con seis fuentes se ve un hueco; para saber si el hueco es real hay que buscar fuera, y eso es lo que hace la investigación profunda.

### 20 · 3 · Investigación profunda y agentes

*Bloque 3 · unos 30 min con el ejercicio 3 en su versión de 15 min, 40 con todo*

Slides 21 a 31. Lo que no se recorta: 22 a 26 (cómo trabaja, qué falla, cómo se audita una referencia y el ejercicio). Para cuadrar: el ejercicio 3 en su versión de 15 min (notas de la slide 25), la 28, la 29 y la 30 a casa, y la multimodalidad (31) en un minuto.

Lanzar la investigación profunda de referencia (Envoltia) la víspera y tenerla abierta en una pestaña: es la que se audita en directo mientras corren las de la sala.

### 21 · Qué es un agente

*2 min · qué es un agente*

Un agente comprende un objetivo, planifica, ejecuta y corrige. La automatización sola se rompe con la primera excepción; la IA sola no repite igual. **La IA pone el criterio, la automatización pone la constancia.**

Un agente de los que se usan hoy (ChatGPT, Gemini, Claude) no aprende solo entre una tarea y otra, salvo que guarde notas o memoria. Si sale el aprendizaje por refuerzo, es tu terreno: una frase, sin desviarse.

### 22 · Investigación profunda: cómo trabaja

*2 min · cómo trabaja*

Contarlo con la de referencia abierta: enseñar el plan que hizo y la lista de fuentes que consultó. Paso 1: si nadie pulsa el botón del plan en Gemini, la investigación no empieza; decirlo en voz alta al lanzar el ejercicio 3 (comprobar el flujo actual la víspera). La última línea del paso 4 es el puente a la slide 24.

### 23 · Dónde está la investigación profunda

*2 min · dónde está*

Lo práctico: en cada pareja, al menos una persona con Gemini o ChatGPT. Perplexity también tiene un modo de investigación con límite diario en el plan gratuito (TODO: verificar el límite actual). Para literatura académica hay buscadores con IA especializados (Elicit, Consensus, Semantic Scholar); se pueden mencionar, sin recomendar uno.

Esta tabla caduca rápido: revisarla la víspera, el domingo 15/11, y cambiar la fecha del título si algo cambia (TODO: verificar los cuatro planes).

### 24 · Seis fallos típicos de la investigación profunda

*3 min · lo que falla*

Lo que hace bien ya se ha visto: en diez minutos lee lo que a una persona le costaría una tarde, y deja la lista de fuentes. El problema es que el informe parece terminado. Las alucinaciones del módulo 0, aquí con enlaces.

Ejemplos de cada fallo, sacados de la de referencia de Envoltia: guion del ejercicio 3, apartado "Fallos típicos".

### 25 · ¿Existe la cita y dice eso?

*3 min · auditar una referencia*

Hacerlo en directo con una referencia de la investigación de referencia: copiar el título en Google Scholar, abrir el DOI, buscar la cifra. Con práctica, treinta segundos por referencia, y es lo que separa un estado de la cuestión defendible de uno que se cae en la primera pregunta del tribunal.

La fila que más sorprende: la cita que existe pero no dice eso. Es el fallo más frecuente de la investigación profunda y el más difícil de ver, porque el enlace funciona.

Revistas depredadoras: no hay una lista oficial; la señal práctica es si la revista está indexada en Scopus o Web of Science, o en DOAJ si es de acceso abierto.

Esto no es lo mismo que comprobar un dato estadístico concreto, que ya trabajaron en otra sesión de la asignatura: aquí se audita la referencia académica entera.

### 26 · Ejercicio 3 · El estado de la cuestión, auditado

*Ejercicio 3 · 25 min, puesta en común incluida*

Minuto 0: lanzar. Minuto 5: todos en la de referencia; abrir dos referencias en directo con la tabla de la slide 25. Minuto 12 o cuando acaben: la suya, cinco referencias con plantilla-auditoria-referencias.md. Minuto 22: puesta en común con la slide 27.

Versión de 15 min, la de partida para cuadrar la sesión: lanzar (5), una referencia de la de referencia entre todos (4), dos referencias propias en la tabla (4) y una puesta en común rápida (2); las otras tres, en casa. Si una investigación tarda más de 15 minutos, la pareja audita referencias de la de referencia. Referencias comprobadas, fallos típicos y plan B: ficheros-practica/ejercicio-3-estado-de-la-cuestion/README.md.

### 27 · Ejercicio 3 · Qué hemos visto

*Puesta en común · 3 min*

Lo esperable: casi todas las parejas encuentran al menos una referencia que existe pero no dice eso, o un informe de consultora citado como si fuera un estudio. Las referencias académicas inventadas son menos frecuentes con investigación profunda que con un chat sin búsqueda, pero aparecen: si una pareja encuentra una, enseñarla a toda la sala.

La cuarta pregunta prepara el cierre de la sesión: la IA encuentra y ordena; la síntesis, la discusión y las conclusiones son del autor del TFM.

### 28 · Con qué se conecta un agente

*2 min · conexiones*

Sin hacer publicidad de ningún servicio. Los conectores y MCP vuelven en la segunda parte, dentro de Claude. Recorte: pasa a casa.

### 29 · Tres niveles de herramientas

*2 min · tres niveles*

Categorías, no marcas: los nombres de producto cambian cada pocos meses. Si alguien del máster programa, el N3 es una salida para un TFM con prototipo; si no, el N1 basta. Recorte: pasa a casa.

### 30 · Cuándo no delegar en un agente

*2 min · cuándo no*

Retoma el human in the loop del módulo 0 con casos del TFM. Lo que se permite y cómo se declara siguen las normas habituales de integridad académica: la autoría es vuestra, lo que hace la IA se declara y nada se inventa (deck 00, slides 11 y 12). Decirlo antes de que lo piense la sala: hay casos en que la respuesta es no. Recorte: pasa a casa.

### 31 · Más allá del texto

*1 a 2 min · multimodalidad*

Una slide, con usos de un TFM. La transcripción de entrevistas es la que más tiempo les va a ahorrar: recordar el consentimiento y que la transcripción se revisa con el audio delante.

### 32 · Lo que ya tenéis para el TFM

*2 min · cierre de la primera parte*

Las tres piezas son el arranque de cualquier TFM: si las tienen escritas antes de la primera tutoría, la tutoría rinde el doble. Que guarden los enlaces de las conversaciones: sirven para la declaración de uso de IA.

Puente: la segunda parte enseña lo mismo con Claude, donde la pregunta del ejercicio 1 pasa a ser las instrucciones de un proyecto y las fuentes del ejercicio 2, su base de conocimiento.

### 33 · Gracias

*Fin de la primera parte*

Lo que no se haya hecho en clase está en el compañero como "En casa, para aprender": el prompt en los dos modos, el mapa con las fuentes propias y la auditoría de las cinco referencias.
