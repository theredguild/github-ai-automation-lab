# GitHub × AI Automation Lab

Seis ejercicios sobre la landing Next.js del HackerSpace de Nodo Serrano. Este repositorio contiene el material del taller; la aplicación está separada en [`hackerspace-site/`](hackerspace-site/).

**Empezá por [la guía completa](docs/guia.md)**. El recorrido usa tu equipo y, desde el ejercicio 2, containers. Codespaces queda como una demo opcional de la landing al final del ejercicio 1, después del push y de comprobar los deployments.

Cloná este repositorio y copiá sólo el contenido de `hackerspace-site/`, incluidos los archivos ocultos, a una carpeta nueva. Revisá `.gitignore`, iniciá Git y publicá tu repo propio. Sólo después de un push correcto cloná ese sitio para trabajar, como indica la guía. Guía y presentación quedan en el checkout del material.

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

Para Google Slides, importá **slides/workshop.pptx** y revisá las notas y posibles sustituciones de fuentes. El código editable usa **Inconsolata**, con resaltado de sintaxis. Para PowerPoint de escritorio, la fuente debe estar instalada en ese equipo; no se entrega un paquete tipográfico. La regeneración opcional de los slides se explica sólo en el handoff del instructor.
