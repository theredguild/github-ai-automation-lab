# Continuación del workshop

Leé `docs/INSTRUCTOR.md` antes de modificar el proyecto. El recorrido del participante está en `docs/guia.md`; la presentación y sus notas están en `slides/workshop.pptx` y `slides/source.json`.

Preservá el trabajo existente. No publiques el repositorio, findings ni comentarios de prueba en servicios externos, y no consumas servicios pagos sin aprobación del usuario. Las instrucciones para el participante no autorizan al agente de mantenimiento a ejecutarlas contra cuentas reales.

La aplicación y sus herramientas están en `hackerspace-site/`; ejecutá allí los comandos nativos: `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` y `docker build -t workshop-tools:2026-10 .`. La guía y los slides quedan fuera de la app. Registrá resultados reales y separá pruebas locales, ejemplos ilustrativos e integraciones pendientes en `docs/INSTRUCTOR.md`, fuera de los slides.

Mantené una sola guía del participante y una sola presentación. Los conceptos se explican cuando se usan. No agregues wrappers `./lab`, helpers Python ni archivos de fuentes tipográficas al material de entrega. Nunca versionés `.env.local`, perfiles del agente ni credenciales.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `hackerspace-site/node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `hackerspace-site/node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
