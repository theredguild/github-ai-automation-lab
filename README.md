# GitHub × AI Automation Lab

Seis ejercicios sobre la landing Next.js del HackerSpace de Nodo Serrano. Este repositorio contiene el material del taller; la aplicación está separada en [`hackerspace-site/`](hackerspace-site/).

**Empezá por [la guía completa](docs/guia.md)**. El recorrido usa tu equipo y, desde el ejercicio 2, containers. Codespaces queda como una demo opcional de la landing al final del ejercicio 1, después del push y de comprobar los deployments.

Cloná este repositorio y mové `hackerspace-site/` completa a una carpeta externa nueva llamada `lab`. Creá tu repo vacío en GitHub, generá un token fino limitado a ese repo, hacé login y publicá desde `lab`. Seguís en esa misma carpeta, sin otro clon. `.gitignore`, Dockerfile y devcontainer ya viajan con la app; guía y presentación quedan en el material.

| Material | Ubicación |
| --- | --- |
| Guía del participante | [docs/guia.md](docs/guia.md) |
| Aplicación inicial para mover a `lab` | [hackerspace-site/](hackerspace-site/) |
| Presentación única, con notas nativas | [slides/workshop.pptx](slides/workshop.pptx) |
| Continuación técnica para instructor o agente local | [docs/INSTRUCTOR.md](docs/INSTRUCTOR.md) |

El repo del material sigue siendo privado; necesitás acceso de lectura previo al clon. El PAT del sitio no lo concede. La guía explica el orden completo y los permisos mínimos, sin pedir un token clásico.

Después del primer push se explica `.gitignore`, se instala con Node 22/pnpm 10.20.0, se construye y se abre la landing. Los comandos de app se ejecutan desde `lab`, no desde la raíz del material. El build Docker es `docker build -t taller .`, después de leer `lab/Dockerfile` y revisar permisos.

Las notas del PPTX son un guion breve: sólo información útil que no está en pantalla, sin pistas ni fuentes repetidas. Donde no hace falta ampliar, quedan vacías.

Para Google Slides, importá **slides/workshop.pptx** y revisá las notas y posibles sustituciones de fuentes. El código editable usa **Inconsolata**, con resaltado de sintaxis. Para PowerPoint de escritorio, la fuente debe estar instalada en ese equipo; no se entrega un paquete tipográfico. La regeneración opcional de los slides se explica sólo en el handoff del instructor.
