# Continuación del workshop

Leé `docs/INSTRUCTOR.md` antes de modificar el proyecto. El recorrido del participante está en `docs/guia.md`; la presentación y sus notas están en `slides/workshop.pptx` y `slides/source.json`.

Preservá el trabajo existente. No publiques el repositorio, findings ni comentarios de prueba en servicios externos, y no consumas servicios pagos sin aprobación del usuario. Las instrucciones para el participante no autorizan al agente de mantenimiento a ejecutarlas contra cuentas reales.

Usá los comandos nativos: `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` y `docker build -t workshop-tools:2026-10 .`. Registrá resultados reales y separá pruebas locales, ejemplos ilustrativos e integraciones pendientes en `docs/INSTRUCTOR.md`, fuera de los slides.

Mantené una sola guía del participante y una sola presentación. Los conceptos se explican cuando se usan. No agregues wrappers `./lab`, helpers Python ni archivos de fuentes tipográficas al material de entrega. Nunca versionés `.env.local`, perfiles del agente ni credenciales.
