# Continuación del workshop

Leé `docs/INSTRUCTOR.md` antes de modificar el proyecto. El curso del participante está en `docs/src/pages/`, con navegación en `docs/vocs.config.ts`; `docs/guia.md` sólo indica cómo abrir Vocs. La presentación y sus notas están en `slides/workshop.pptx` y `slides/source.json`.

Preservá el trabajo existente. No publiques el repositorio, findings ni comentarios de prueba en servicios externos, y no consumas servicios pagos sin aprobación del usuario. Las instrucciones para el participante no autorizan al agente de mantenimiento a ejecutarlas contra cuentas reales.

La aplicación y sus herramientas están en `hackerspace-site/`; ejecutá allí los comandos nativos: `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` y `docker build -t taller .`. Vocs es otro proyecto, dentro de `docs/`: usá `pnpm --dir docs install --frozen-lockfile`, `pnpm --dir docs dev`, `pnpm --dir docs build` y `pnpm --dir docs preview` desde la raíz del material. El participante mueve la app completa a `lab/`; Dockerfile y dotfiles viajan con ella, no el curso. Registrá resultados reales y separá pruebas locales, ejemplos ilustrativos e integraciones pendientes en `docs/INSTRUCTOR.md`, fuera de los slides.

Mantené una sola guía del participante, las páginas Vocs, y una sola presentación. Cada página operativa debe tener un resultado comprobable, ubicación, requisitos y condición para detenerse. Conservá advertencias junto al comando y las opciones fuera de la navegación principal. Actualizá sidebar y enlaces al agregar páginas. No agregues wrappers `./lab`, helpers Python ni archivos de fuentes tipográficas al material de entrega. Nunca versionés `.env.local`, perfiles del agente ni credenciales.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `hackerspace-site/node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `hackerspace-site/node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
