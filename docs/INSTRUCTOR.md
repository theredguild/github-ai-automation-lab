# Handoff del instructor y del agente local

Actualizado el 31 de octubre de 2026. Este archivo contiene el estado técnico de preparación. No se proyecta y no forma parte del recorrido del participante.

## Punto de entrada y estructura

El participante abre `README.md` y sigue únicamente `docs/guia.md`. La app Next.js está en la raíz. `slides/workshop.pptx` es una sola presentación de 178 diapositivas con notas nativas, para importar en Google Slides. No se entrega ni se mantiene un PDF por ahora.

Codespaces es una alternativa de preparación, no un segundo plan. Se conserva la configuración `.devcontainer/devcontainer.json` del proyecto anterior. Los seis ejercicios y sus comandos posteriores son los mismos en ambos entornos.

El paquete se consolidó a partir del ZIP anterior del workshop y la fuente de 216 diapositivas. Las versiones anteriores se conservaron durante la edición. No se tuvo disponible el handoff original mencionado al inicio ni el template visual original para contrastarlos de nuevo; no afirmar que esta revisión auditó esos originales. Se conserva el diseño aprobado conocido: negro, magenta, amarillo y cyan, con Unbounded y Poppins. El código ahora usa Courier New explícita y colores por sintaxis. No se entrega un paquete de fuentes tipográficas.

## Decisiones del usuario que deben conservarse

- Público con muy poca experiencia; pasos que puedan repetirse sin el instructor. Duración flexible de 3 a 6 horas.
- Seis ejercicios: landing y Vercel; Docker y runner; Hermes y Telegram; túnel; webhook sin IA; review solicitada por etiqueta.
- Empezar haciendo: dos diapositivas de apertura y el primer ejercicio. Enseñar Git, virtualización, redes y webhooks justo al necesitarlos.
- App de ejemplo: landing Next.js del HackerSpace de NodoSerrano.org. Hacer build real y deploy de main y development; el código de la landing es secundario al proceso.
- Comandos nativos y alternativa web donde existe. Usar `gh auth login`, sin exportar ni borrar variables de tokens. Delegar llamadas repetitivas a la API al agente o usar los formularios web.
- Mantener suficiente contenido para presentar detenidamente: pasos, comandos, salidas relevantes, capturas reales, explicaciones, diagramas y notas nativas. No reemplazar el taller por un resumen de pocas diapositivas.
- Historial Git con carriles y curvas; usar main y development en el ejercicio. Explicar merge commit, squash y rebase, y mostrar la interfaz real de PR.
- Una diapositiva Host, VM y container antes de Docker. Explicar localhost, puerto, DNS y origen por capas antes del webhook.
- Quick Tunnels sin crear una cuenta Cloudflare ni dominio durante la clase. El túnel administrado sólo aparece como ampliación opcional.
- Una imagen de herramientas y procesos fáciles de reconocer. Instancias distintas para runner, agente y app; no compartir el perfil del agente con el runner.
- El instructor instala Hermes en vivo siguiendo su documentación y completa el wizard: OpenRouter/modelo gratuito disponible, luego Telegram. No convertir la instalación de uv u otras dependencias en el tema del taller.
- Receptor preparado, pseudocódigo y gráficos. El alumno puede pedir a Hermes que lo adapte y configure los hooks. No hay un puente Python ni `./lab`.
- No publicar repositorios, findings ni ejecutar servicios pagos sin aprobación. No usar una etiqueta de práctica como autorización para un agente de mantenimiento.
- Resultados verificados y bloqueos se informan aquí. Los slides enseñan; no contienen un reporte público de auditoría.

## Estado real de validación

| Área | Resultado y alcance |
| --- | --- |
| Código de aplicación | Se conservó el código del ZIP anterior: Next.js 16.4.3, React 19.3.0, Node objetivo 22.x, pnpm objetivo 10.20.0 y Biome 2.4.2. No se sustituyó la app por una nueva. |
| Formato y lint | Ejecutados sobre el proyecto consolidado. Biome terminó sin errores ni avisos informativos tras corregir el estilo de los tests. La carpeta de autoría de slides se excluye del lint de la app. |
| TypeScript | `tsc --noEmit` terminó con código 0 sobre el proyecto consolidado. |
| Receptor y funciones | 23 comprobaciones locales pasan en `tests/webhook.test.mjs`: HMAC, alteración del body, UTF-8, JSON inválido, tamaño, repo, delivery, duplicados, eventos, configuración, health y capacidad. Se importan los handlers directamente. No prueban un servidor Next ni entregas reales de GitHub. |
| Entorno de estas comprobaciones | Host Node 24.22.1 y pnpm 11.25.0. Para ejecutar scripts con las dependencias ya disponibles se desactivó la verificación/gestión automática de pnpm en esta sesión. No sustituye una instalación limpia con Node 22 y pnpm 10.20.0. |
| Build de producción | Intentado de nuevo desde la raíz consolidada. Falla con `ENOENT`, syscall `uv_resident_set_memory`. El mismo problema del host se había reproducido con `process.memoryUsage()`. Es una función de libuv, no el instalador Python uv ni una instalación de Hermes. Build pendiente en el runtime objetivo. |
| Dependencias | El lockfile se conserva. La consulta de advisories de producción de la revisión anterior, del mismo 31 de octubre, no encontró vulnerabilidades conocidas. No es una certificación de seguridad. |
| Dockerfile | Mantiene versiones y SHA-256 contrastados con los releases oficiales en la revisión anterior para amd64 y arm64. No hay Docker disponible aquí: no se construyó ni arrancó la imagen. |
| Codespaces | Configuración conservada y revisión estática. No se creó un Codespace. Comprobar imagen, features, pnpm, daemon Docker y permisos de bind mount en una instancia real. |
| Hermes y canales | Documentación y configuración provista. No se instaló Hermes aquí, no se cargaron credenciales y no se llamó a modelos ni se enviaron mensajes a Telegram. |
| Presentación | Validación estructural e importación en el motor de autoría completadas: 178 slides, 178 notas que coinciden con la fuente, 16 tablas nativas y sin hallazgos de geometría. Una secuencia de 178 diapositivas; notas nativas, texto de código y tablas editables. El código tiene Courier New explícita en sus runs y varios colores en el XML exportado. Renders generados para todas las diapositivas y revisión visual del recorrido y de los layouts modificados. |
| Google Slides | No se importó en una cuenta de Google. Revisar tipografías, resaltado, conectores, recortes y conservación de las 178 notas después de convertir. No afirmar que esa importación se probó. |
| Documentación | En esta incorporación se verificaron 18 enlaces locales sin faltantes, integridad ZIP del PPTX, 178 diapositivas y 178 notas. En la preparación anterior, 59 bloques Bash de la fuente pasaron bash -n y se generó un PDF de 178 páginas con muestras renderizadas con Poppler. Ese export queda local, fuera de la entrega y sin obligación de actualizarlo. |
| Capturas | Referencias reales de documentación oficial de GitHub, Cloudflare, Vercel y OpenRouter/Hermes; foto publicada por Nodo Serrano. No son capturas de nuestras integraciones. Los ejemplos de salida se rotulan como ejemplos. |
| DeepSec | Sigue pendiente una captura real y acceso al producto. No se inventó una pantalla ni se agregó una demo ficticia al recorrido de seis ejercicios. |
| Publicación | El usuario autorizó el historial en el repo privado `theredguild/github-ai-automation-lab` y la incorporación de `slides/workshop.pptx` para continuar editándolo. Los archivos de autoría adicionales y `docs/consulta.pdf` quedan locales y excluidos de Git. No se crearon findings ni se consumieron servicios pagos. |

## Cambios que afectan al ensayo

El runner usa `--ephemeral` y se inicia con `exec ./run.sh`: así reemplaza la shell, el container termina tras un job y `--rm` libera su nombre. Para la segunda y tercera ejecución se registra otro runner. Usar Bash sin `exec` dejaría una shell viva tras el job.

Para agregar el workflow hay dos alternativas explícitas: web o CLI. La CLI actualiza main antes de copiar y confirmar el YAML. Si se elige web, no se deja una copia sin seguimiento que pueda impedir el siguiente pull. `workflow_dispatch` requiere que el workflow exista en main; luego se sincroniza development y se selecciona esa rama al iniciar el run.

El runner no recibe mounts, sesión de gh, perfil del agente ni socket Docker, y usa la red predeterminada. El agente comparte únicamente la carpeta del proyecto por un bind mount **con escritura**. Esa carpeta también la usa lab-app. Esto permite delegar la edición de `.env.local`; no equivale a aislamiento completo ni a acceso de sólo lectura.

La sesión de `gh auth login` del host no se monta dentro del agente. Se inicia una sesión propia cuando el ejercicio 5 la necesita. El flujo OAuth puede conceder más alcance que un repo; no afirmar restricciones propias de un fine-grained PAT. El gateway debe poder usar esa misma sesión guardada para `gh pr view`, `gh pr diff` y `github_comment` sin exportar tokens. **Este punto requiere ensayo end-to-end.**

El agente configura archivos y hooks desde `hermes chat`, en otra shell. No se le pide reiniciar por Telegram el gateway que transporta su propia conversación. La persona reinicia el proceso de Next o del gateway en su terminal. No se monta el socket Docker para evitar esa acción humana.

El receptor Next responde `received` al evento aceptado y no invoca IA. La deduplicación es local, acotada y se pierde al reiniciar. El receptor nativo del ejercicio 6 tiene otra ruta, otro secret y una respuesta asíncrona: verificar el comentario final además del acuse HTTP.

## Continuación recomendada en el entorno local

1. Con Node 22 y pnpm 10.20.0, ejecutar desde la raíz:

   ```bash
   pnpm install --frozen-lockfile
   pnpm lint
   pnpm typecheck
   pnpm test
   pnpm build
   ```

2. Construir y abrir la imagen:

   ```bash
   docker build -t workshop-tools:2026-10 .
   docker run --rm workshop-tools:2026-10 \
     bash -lc 'node --version; pnpm --version; gh --version; cloudflared --version'
   ```

   Contrastar versiones y SHA si se actualiza el Dockerfile. Probar la arquitectura de las máquinas del taller. Comprobar permisos del usuario node y de la carpeta montada.

3. Crear un Codespace sólo cuando esté autorizado el uso de esa cuenta y su cuota. Confirmar Node, pnpm, gh, Docker Client/Server y los mismos comandos de los ejercicios. Si falla una feature, corregir la configuración común; no crear un segundo plan pedagógico.

4. Con autorización para un repo de ensayo, seguir `docs/guia.md` desde cero: upload/clone, Production, Preview, PR, review web/CLI, merge commit y nuevo Production.

5. Ejecutar los tres checks con runners efímeros nuevos. Guardar los run IDs, SHA y mensajes reales. No abrir el runner a PRs de terceros.

6. Instalar Hermes según la documentación vigente y completar el wizard en lab-agent. Verificar chat, Telegram con allowlist, persistencia del perfil y login de gh propio. Elegir un modelo gratuito que realmente admita las herramientas y contexto utilizados; no pasar automáticamente a pago.

7. Seguir las pruebas local/interna/pública del túnel, caída y recuperación. Después recibir un PR real en Next, verificar firma inválida, `received` y `duplicate`.

8. Fusionar `docs/snippets/hermes-webhook.yaml`, comprobarlo contra la versión instalada y habilitar Webhooks. Confirmar el caso negativo de etiqueta sin llamada al modelo, el caso positivo con comentario, el control del SHA y una segunda revisión tras la corrección. Si `github_comment` requiere autenticación adicional en esa versión, resolverlo con el flujo nativo y actualizar guía y slides juntos.

9. Importar la presentación en Google Slides. Revisar notas de una slide de código, una de captura y una de gráfico, y luego recorrer las 178. Si hay sustitución de fuente, corregir el estilo de los comandos en Slides manteniéndolo monoespaciado.

10. Actualizar esta tabla con comandos, versiones, IDs y evidencias reales. Capturar las interfaces autorizadas del propio ensayo. Nunca capturar credenciales. Mantener los pendientes fuera de los slides del público.

## Editar y regenerar la presentación

Para cambios manuales, `slides/workshop.pptx` contiene texto, código con runs de color, tablas, diagramas y notas. Se puede importar en Google Slides sin instalar archivos de fuentes.

En el entorno local se conserva la fuente editable adicional `slides/source.json`: orden, texto, comandos, salidas ilustrativas, notas y enlaces oficiales por diapositiva. Los estilos están en `theme.mjs`, `layouts.mjs`, `base.mjs` y `metrics.json`. Estos archivos de autoría no se publican en el repo; el PPTX es la presentación versionada. Las capturas compartidas están en `docs/assets/`.

Si se dispone de esos archivos locales, hay un generador opcional con una dependencia pública fijada, PptxGenJS 4.0.1:

```bash
cd slides
npm install
npm run build
```

Escribe `workshop-generated.pptx`, sin sobrescribir la versión entregada. Se comprobó que el generador exporta las 178 slides y notas; **su salida alternativa requiere revisión visual** antes de sustituir el PPTX. El archivo entregado se renderizó con el motor de autoría original. El generador opcional no interviene en ningún comando del participante.

Si cambian orden o contenido, actualizar también guía y notas cuando corresponda. El PDF queda fuera del flujo de mantenimiento por ahora. Si se vuelve a necesitar, exportarlo desde la versión aprobada de la presentación en Google Slides o PowerPoint.

## Límites operativos

El proyecto es un taller reproducible en preparación, no un servicio listo para producción. Un Quick Tunnel es público y temporal. Los prompts no son una frontera de seguridad. El runner, las credenciales del agente y el código de PRs deben permanecer separados. Probar contra cuentas reales requiere el acceso y autorización correspondientes; estas instrucciones no conceden permiso para publicar nada ni generar cargos.

No crear nuevas guías paralelas, documentos de plan por entorno, diapositivas de auditoría ni paquetes de tipografías. Registrar aquí los problemas concretos para que el siguiente agente continúe sobre este mismo proyecto.
