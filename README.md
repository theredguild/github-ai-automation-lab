# GitHub × AI Automation Lab

Seis ejercicios sobre la landing Next.js del HackerSpace de Nodo Serrano. La aplicación está en esta raíz; no hay que entrar en otra carpeta.

**Empezá por [la guía completa](docs/guia.md)**. Incluye la preparación con Codespaces o tu equipo, comandos nativos, alternativas web, capturas, resultados esperados y diagnóstico. Ambos entornos siguen los mismos ejercicios.

| Material | Ubicación |
| --- | --- |
| Guía del participante | [docs/guia.md](docs/guia.md) |
| Presentación única, con notas nativas | [slides/workshop.pptx](slides/workshop.pptx) |
| Continuación técnica para instructor o agente local | [docs/INSTRUCTOR.md](docs/INSTRUCTOR.md) |

Para abrir sólo la landing, con Node 22 y pnpm 10.20.0:

~~~bash
pnpm install --frozen-lockfile
pnpm dev
~~~

Abrí el puerto 3000. Los comandos habituales del proyecto son `pnpm lint`, `pnpm typecheck`, `pnpm test` y `pnpm build`.

Para Google Slides, importá **slides/workshop.pptx** y revisá las notas después de convertirlo. No hay que instalar ni importar un paquete de fuentes. El código utiliza Courier New y resaltado de sintaxis editable. La regeneración opcional de los slides se explica sólo en el handoff del instructor.
