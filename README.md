# GitHub × AI Automation Lab

Seis ejercicios sobre la landing Next.js del HackerSpace de Nodo Serrano. Este repositorio contiene el material del taller; la aplicación está separada en [`hackerspace-site/`](hackerspace-site/).

**Empezá por [la guía completa](docs/guia.md)**. Incluye la preparación con Codespaces o tu equipo, comandos nativos, alternativas web, capturas, resultados esperados y diagnóstico. Ambos entornos siguen los mismos ejercicios.

Descargá el material con **Code → Download ZIP** y seguí la guía antes de crear tu repositorio. Vas a copiar sólo el contenido de `hackerspace-site/`, no el taller completo. La guía y la presentación quedan en la carpeta del material descargado.

| Material | Ubicación |
| --- | --- |
| Guía del participante | [docs/guia.md](docs/guia.md) |
| Aplicación inicial para copiar a tu propio repositorio | [hackerspace-site/](hackerspace-site/) |
| Presentación única, con notas nativas | [slides/workshop.pptx](slides/workshop.pptx) |
| Continuación técnica para instructor o agente local | [docs/INSTRUCTOR.md](docs/INSTRUCTOR.md) |

Para abrir sólo la landing, con Node 22 y pnpm 10.20.0:

~~~bash
cd hackerspace-site
pnpm install --frozen-lockfile
pnpm dev
~~~

Abrí el puerto 3000. Los comandos habituales del proyecto son `pnpm lint`, `pnpm typecheck`, `pnpm test` y `pnpm build`.

Para Google Slides, importá **slides/workshop.pptx** y revisá las notas después de convertirlo. No hay que instalar ni importar un paquete de fuentes. El código utiliza Courier New y resaltado de sintaxis editable. La regeneración opcional de los slides se explica sólo en el handoff del instructor.
