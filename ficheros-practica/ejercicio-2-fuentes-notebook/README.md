# Ejercicio 2 · Preguntar a vuestras fuentes con Gemini Notebook

Guion del formador. Creado el 06/11/2026. Deck 02, slides 18 (enunciado) y 19 (puesta en común); RAG y herramientas en las slides 14 a 17. Ficheros: los seis de `envoltia-fuentes/`, o 5 a 8 fuentes propias del TFM. En parejas; cambian los papeles respecto al ejercicio 1.

NotebookLM se llama Gemini Notebook desde el 16/07/2026; notebooklm.google sigue abriendo la herramienta. Plan gratuito, según la ayuda de Google consultada el 31/10/2026: 100 cuadernos, 50 fuentes por cuaderno y hasta 500.000 palabras o 200 MB por fuente. Admite ficheros Markdown (.md) y PDF. TODO: verificar la víspera que todo sigue igual.

## Plan

| Tramo | Tiempo |
|---|---|
| Crear el cuaderno y subir las fuentes | 3 min |
| El mapa de la literatura, con el prompt del compañero | 7 min |
| Las dos trampas | 4 min |
| Abrir tres citas y puesta en común | 6 min |

## Antes de clase

- Crear un cuaderno con las seis fuentes de Envoltia y lanzar el prompt del mapa: es el de referencia que se enseña si una pareja se atasca.
- Comprobar que Gemini Notebook acepta los `.md` (si no, pegar el texto como fuente).

## Las fuentes de Envoltia, y lo que llevan plantado

| Fuente | Qué es | Lo plantado |
|---|---|---|
| 1 · Lindqvist y Moreau (2025) | Artículo cuantitativo, grandes cadenas, 412 compradores en cinco países | Certificación primero (47 %), precio segundo (29 %); la capacidad elimina a las pymes |
| 2 · Ferrer y Okafor (2024) | Artículo cualitativo, 18 pymes en tres países | Riesgo operativo y pruebas antes que precio; "pagarían algo más", sin cifra |
| 3 · Observatorio (2025) | Informe sectorial financiado por la industria | Precio primero para el 61 %; tamaño de mercado estimado por extrapolación; metodología débil |
| 4 · Entrevista C1 | Compradora de una cadena alemana mediana | Certificado como filtro, fiabilidad, atención en su idioma, prueba en su línea |
| 5 · Nota interna de Envoltia | La empresa habla de sí misma | "Nuestros clientes están contentos" sin medirlo; capacidad limitada; no saben cuánto pagarían fuera |
| 6 · Resumen del reglamento de envases | Norma real resumida, con avisos | Solo obliga a ser compostables a unos pocos envases; el resto, reciclables |

**La contradicción plantada:** la fuente 1 dice que la certificación es lo primero; la fuente 3, que es el precio (61 %). No es un error de ninguna: miden poblaciones distintas (grandes cadenas frente a empresas de todos los tamaños) y la 3 tiene una metodología más débil y un financiador interesado. Lo que se espera es que la pareja lo vea y diga qué fuente pesa más para qué pregunta.

## Las dos trampas

1. **"¿Cuánto más están dispuestos a pagar los compradores franceses por un envase compostable?"** No consta en ninguna fuente. La 2 dice "algo más" sin cifra y la 5 dice que no lo saben. Una respuesta con un porcentaje es una alucinación.
2. **"¿Qué opinan los compradores suecos o daneses?"** No consta: los estudios cubren Alemania, Francia, Países Bajos, Italia, España y Bélgica. Si la IA generaliza "los compradores nórdicos" a partir de los alemanes o neerlandeses, es el fallo "otro mercado".

Quien trabaje con fuentes propias se inventa sus dos trampas: algo que sabe que sus fuentes no dicen.

## Mapa de referencia, resumido

| Tema | Qué dicen | Fuentes | Coinciden o se contradicen |
|---|---|---|---|
| Primer criterio de compra | Certificación (grandes cadenas) frente a precio (muestra general) | 1, 3, 4 | Se contradicen; poblaciones distintas |
| Riesgo operativo | Que funcione en sus máquinas y llegue a tiempo | 2, 4 | Coinciden |
| Capacidad de suministro | Elimina a las pymes ante grandes cadenas | 1, 5 | Coinciden |
| Cercanía e idioma | Pesa en pymes y cadenas medianas | 2, 4, 5 | Coinciden |
| Disposición a pagar más | Nadie da una cifra | 2, 5 | Hueco |
| Normativa | Obliga a pocos envases compostables; el resto, reciclables | 6, 4 | La compradora no sabe qué le obliga: oportunidad de servicio |

**Hueco de la literatura que debería aparecer:** no hay datos sobre compradores medianos con método cuantitativo, ni sobre disposición a pagar. Es exactamente el hueco que podría cubrir un TFM.

## Errores frecuentes

- **No abrir las citas.** Leer el mapa y darlo por bueno. Pedir que abran tres, sin excepción.
- **Tratar la nota interna como evidencia.** "Los clientes están contentos" es lo que dice la empresa de sí misma.
- **No ver quién financia la fuente 3.** Está en la primera línea.
- **Subir el PDF de un artículo de pago descargado de forma no autorizada.** Si usan fuentes propias, mejor resúmenes, versiones en abierto o lo que tengan con el acceso de la biblioteca.

## Puesta en común

Tres o cuatro parejas. Empezar por las trampas (¿ha contestado?) y acabar con la contradicción: ¿cuál pesa más y por qué? Si nadie la ha visto, enseñarla en el cuaderno de referencia.

## Plan B

- **Sin cuenta de Google:** un proyecto de ChatGPT o de Claude con los mismos ficheros, y el mismo prompt pidiendo "cita el documento y la frase".
- **Sin conexión:** las seis fuentes en papel o en pantalla; el mapa se hace a mano en 10 minutos. Pierde la parte de la IA, pero enseña lo mismo sobre fuentes.
- **Si va justo:** las trampas se hacen entre todos, en el cuaderno de referencia proyectado.
