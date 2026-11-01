# Handoff del instructor y del agente local

Actualizado el 1 de noviembre de 2026. Este archivo contiene el estado técnico de preparación. No se proyecta y no forma parte del recorrido del participante.

## Punto de entrada y estructura

El participante sigue `docs/guia.md`. La app Next.js autocontenida está en `hackerspace-site/`, separada de documentación y `slides/`. Desde el host clona el material, copia el contenido del starter a una carpeta inicial, comprueba `.gitignore`, publica su repo propio y **después del push correcto** lo clona en otra carpeta para trabajar. Guía y presentación no se suben al repo de la app. `slides/workshop.pptx` conserva 178 diapositivas con notas nativas; no se entrega ni mantiene un PDF.

El recorrido completo recomendado es **host + containers**. Codespaces queda limitado a una demo opcional de la landing, sin certificación de los ejercicios 2–6. La configuración `.devcontainer/devcontainer.json` se conserva dentro del starter, pero su presencia no prueba que runner, autenticación del agente, túnel y publicación de reviews funcionen allí. Las plantillas de ejercicios siguen en `hackerspace-site/docs/snippets/`.

Esta revisión modifica sólo la guía y este registro, por pedido del usuario. `README.md` aún indica descarga ZIP y equivalencia entre Codespaces y host; no usar esas dos indicaciones para preparar la clase. La guía contiene el recorrido actualizado. PPTX y fuente de slides quedan sin cambios; sincronizarlos requiere retomar la edición de la presentación.

El paquete se consolidó a partir del ZIP anterior del workshop y la fuente de 216 diapositivas. Las versiones anteriores se conservaron durante la edición. No se tuvo disponible el handoff original mencionado al inicio ni el template visual original para contrastarlos de nuevo; no afirmar que esta revisión auditó esos originales. Se conserva el diseño aprobado conocido: negro, magenta, amarillo y cyan, con Unbounded y Poppins. El código ahora usa Courier New explícita y colores por sintaxis. No se entrega un paquete de fuentes tipográficas.

## Decisiones del usuario que deben conservarse

- Público con muy poca experiencia; pasos que puedan repetirse sin el instructor. Duración flexible de 3 a 6 horas.
- Seis ejercicios: landing y Vercel; Docker y runner; Hermes y Telegram; túnel; webhook sin IA; review solicitada por etiqueta.
- Empezar haciendo: dos diapositivas de apertura y el primer ejercicio. Enseñar Git, virtualización, redes y webhooks justo al necesitarlos.
- App de ejemplo: landing Next.js del HackerSpace de NodoSerrano.org. Hacer build real y deploy de main y development; el código de la landing es secundario al proceso.
- Separar material y app. Clonar el material en el host, copiar el starter incluyendo ocultos, publicar un solo repo propio y clonarlo sólo después de un push correcto.
- Usar comandos nativos y alternativa web donde existe. `gh auth login` corresponde al host o al agente aislado del host cuando lo necesita; no usarlo para reemplazar autenticación heredada de Codespaces ni exportar/borrar tokens.
- Priorizar el host y containers; no depurar Codespaces o Gitpod durante la clase ni afirmar equivalencia de los seis ejercicios sin ensayo real. Mantener PPTX y fuente de slides sin cambios durante esta revisión escrita.
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
| Código de aplicación | App autocontenida en `hackerspace-site/`, sin duplicado en la raíz del material. Se conservan Next.js 16.4.3, React 19.3.0, Node objetivo 22.x, pnpm 10.20.0 y Biome 2.4.2. La exportación de sus 23 archivos versionados incluye dotfiles, Dockerfile, devcontainer y ambas plantillas, pero no guía, slides, caches ni instrucciones del mantenedor. |
| Formato y lint | `pnpm lint` pasó desde la app anidada y desde un repo independiente creado con su exportación: 14 archivos, sin cambios de formato. Biome conserva exclusiones Git en ambos casos. Se quitó sólo la exclusión de slides, porque ya no están dentro de la app. |
| TypeScript | `pnpm typecheck` terminó con código 0 desde la app anidada y desde el repo independiente en Node 22.23.4. |
| Receptor y funciones | `pnpm test` pasó sus 23 comprobaciones en ambas ubicaciones. El servidor de producción exportado respondió health 200, evento firmado UTF-8 `received`, reentrega `duplicate` y evento sin firma 401. Los otros límites HTTP se habían probado en la corrección anterior; no se cambiaron sus handlers al moverlos. |
| Entorno de estas comprobaciones | Exportación limpia: Linux amd64, Node 22.23.4 y pnpm 10.20.0; install frozen, lint, typecheck, tests y build pasaron sin depender del material padre. Checkout anidado: host Node 26.10.0 emitió el aviso de engines y pasó lint, typecheck, tests y build; no sustituye el ensayo Node 22. En la corrección anterior también se comprobó la recreación interactiva de dependencias existentes y el store fuera del proyecto. |
| Build de producción | `pnpm build` pasó tanto anidado como independiente. En el repo exportado se arrancaron `pnpm dev` y `pnpm start --hostname 0.0.0.0`; landing revisada visualmente en ambos, producción sin errores de página. La primera navegación dev registró `net::ERR_ABORTED` para una fuente del overlay de Next; su endpoint respondió luego HTTP 200. La carga de `.env.local` tras el build se comprobó en la corrección anterior, sin cambiar ese comportamiento en esta reorganización. |
| Dependencias | El lockfile se conserva. La consulta de advisories de producción de la preparación del 31 de octubre no encontró vulnerabilidades conocidas. No se repitió en esta revisión de instrucciones. No es una certificación de seguridad. |
| Dockerfile | `docker build -t workshop-tools:2026-10 .` pasó usando como único contexto el repo exportado. Imagen conservada `sha256:4bdd0f2f053e3904c546cbe9e39042a503b45b58673a59c15f1712bf157a18ea`; Dockerfile y versiones no cambiaron. Las pruebas anteriores de UID 12345/GID 20 y rechazo de IDs inválidos siguen documentadas; no se repitieron por el cambio de carpeta. Arm64, Desktop y rootless no ejecutados. |
| Codespaces | Se intentó acceder a la instancia existente facilitada por el usuario, sin crear otra: lista CLI vacía, API HTTP 403 `Resource not accessible by personal access token`, reader y navegador redirigidos al login de GitHub; descubrimiento de sesión de navegador autenticada agotó 30 s. No hubo conexión a terminal ni comprobaciones remotas. Es un bloqueo de acceso, no evidencia de fallo del runtime del Codespace. Se necesita una conexión autenticada de la cuenta creadora; compartir la URL no concede acceso. No se modificaron tokens, permisos ni instancias. |
| Hermes y canales | Revisión estática contrastada con código upstream de Hermes v0.22.5: instalación, allowlist numérica de Telegram, YAML, filtros previos al modelo, HMAC de GitHub, bind/puerto y entrega `github_comment` mediante sesión guardada de `gh`. No se instaló Hermes aquí, no se cargaron credenciales, no se llamó a modelos ni se enviaron mensajes a Telegram. |
| Presentación | En la reorganización anterior se ajustaron slides 3, 5–8, 10, 15, 17 y 23, conservando 178 diapositivas, 178 notas y las 759 partes del PPTX. Sólo cambiaron 17 partes XML de texto/notas; las otras 742 y la estructura no textual permanecieron idénticas. El PPTX real se renderizó con LibreOffice 7.4.7.2 y se revisaron las 9 slides afectadas, sin recortes ni solapamientos observados. Fuentes temporales fuera del repo; no es verificación en PowerPoint ni Google Slides. La revisión escrita actual comprobó que su SHA-256 no cambió. |
| Google Slides | No se importó en una cuenta de Google. Revisar tipografías, resaltado, conectores, recortes y conservación de las 178 notas después de convertir. No afirmar que esa importación se probó. |
| Documentación | La guía actual tiene 61 bloques Bash que pasan `bash -n`; los 16 enlaces locales entre guía y handoff resuelven y el anchor de reparación existe. Los 36 destinos externos Markdown respondieron HTTP 200 tras redirects; Codespaces y creación de repos redirigen al login, no prueban acceso autenticado. Se reemplazaron dos enlaces oficiales que daban 404 y se actualizó otro a su ruta canónica. El repo privado del material respondió a una consulta Git autenticada. La comparación de los 59 bloques de slides con el PPTX corresponde al ensayo anterior, no se repitió. |
| Capturas | Referencias reales de documentación oficial de GitHub, Cloudflare, Vercel y OpenRouter/Hermes; foto publicada por Nodo Serrano. No son capturas de nuestras integraciones. Los ejemplos de salida se rotulan como ejemplos. |
| DeepSec | Sigue pendiente una captura real y acceso al producto. No se inventó una pantalla ni se agregó una demo ficticia al recorrido de seis ejercicios. |
| Publicación | El usuario autorizó el historial en el repo privado `theredguild/github-ai-automation-lab` y la incorporación de `slides/workshop.pptx` para continuar editándolo. Los archivos de autoría adicionales y `docs/consulta.pdf` quedan locales y excluidos de Git. No se crearon findings ni se consumieron servicios pagos. |

### Correcciones verificadas para el ensayo

- **Build y producción.** El Route Handler usa el runtime Node predeterminado, compatible con Cache Components. Las comprobaciones unitarias se complementaron con navegador y requests al servidor de producción, no sólo imports directos.
- **Store y permisos.** La imagen define el store de pnpm fuera del bind mount y permite preparar `node` con UID/GID del participante. Se probó escritura en proyecto, home, store e instalación del runner con UID 12345/GID 20. La guía comprueba permisos antes de cargar credenciales.
- **Perfil existente.** La migración documentada copia a otro volumen y cambia sólo sus propietarios. En el ensayo, el marcador y propietario originales siguieron en 1000:1000 y la copia quedó escribible en 12345:20. También se comprobó que un container existente conserva su UID original aunque se cambie el destino de la etiqueta de imagen.
- **Vercel.** Guía y presentación conservan autodetección de Install Command; no ofrecen un override genérico incompatible con el lockfile. La selección se contrastó con documentación oficial, no con un deployment real.
- **Review inmutable.** El prompt compara base/head del evento y base `main` antes de obtener el diff y antes de devolver la respuesta. Usa `gh api` con comparación entre ambos SHA, no un diff de rama mutable. Una consulta de sólo lectura a GitHub sobre dos commits ya existentes devolvió los cambios esperados. Un repo Git temporal con historias divergentes comprobó que la comparación de tres puntos excluye cambios exclusivos de base y conserva el diff solicitado tras mover head, base y merge-base. Esto no prueba que un modelo siga las instrucciones ni hace atómica la publicación.
- **Red.** El servidor de producción respondió el mismo health desde loopback del host y desde otro container por el alias `lab-app`. La publicación quedó limitada a `127.0.0.1`; no se abrió un túnel público.
- **Integraciones pendientes.** No se registró un runner, ejecutó un job, creó un Codespace ni publicó un deployment de Vercel. No se configuraron cuentas de Hermes, OpenRouter o Telegram ni se consumieron modelos. La revisión estática de Hermes v0.22.5 no sustituye esos recorridos. Los recursos y fixtures temporales de ejecución se retiraron.

### Separación del starter y del material

El recorrido se prepara en el host. Se copia el starter a una carpeta inicial distinta del material, se conserva `.gitignore`, se hace el primer commit y se publica por CLI o web con repo vacío. Sólo tras el push correcto se clona ese repo propio en otra carpeta; allí continúan los seis ejercicios. Codespaces puede abrir el repo ya publicado para una demo de la app con su checkout automático, sin crear ni clonar otro repo dentro de él y sin reemplazar su autenticación.

En la validación anterior se exportó únicamente el árbol versionado de `hackerspace-site/`, se hizo un commit Git local y se clonó a otra carpeta temporal. Ese checkout tuvo su propio `.git`, ejecutó todas las comprobaciones y sirvió la app sin montar el material del taller. No se creó un repo real en una cuenta de GitHub para simular este paso.

La revisión actual ejecutó los comandos escritos de copia, restauración de `.gitignore` y preparación del índice en repos temporales. Comprobó que restaurar un archivo faltante conserva las reglas personalizadas cuando ya existe, que `.env.example` sí se añade y que dependencias, builds, caches y `.env.local` no se añaden. Un push a un remoto bare local terminó antes del clon del sitio, que recibió su propio historial y `.gitignore`, sin artefactos.

Otro fixture partió de artefactos ya versionados. La reparación dejó de seguirlos sin borrar archivos del disco ni añadir una edición ajena sin staging; detectó un `node_modules` anidado para retirarlo por su ruta exacta. Un objeto de un commit anterior siguió disponible después del commit de reparación, como advierte la guía. Estos ensayos no repararon el repo real del participante ni comprobaron un push a GitHub. Los fixtures se eliminaron y no se recreó `hackerspace-site/node_modules`.

La revisión final detectó que clonar no conserva la identidad local del repo inicial. Un fixture con identidad global ajena reprodujo ese caso; después ejecutó la configuración local indicada en 1.2 y confirmó que el siguiente commit tenía el autor correcto sin modificar la configuración global. La guía vuelve a comprobar nombre y email en el clon aunque Git no muestre un error.

Los comandos `cp docs/snippets/checks.yml ...` y las instrucciones de Hermes sobre `docs/snippets/hermes-webhook.yaml` siguen siendo relativos a la raíz del repo del participante. Sólo los enlaces de la guía apuntan a la ubicación dentro del material. `next dev` puede generar instrucciones propias de Next en el proyecto; no se copia allí el handoff ni el `AGENTS.md` del mantenedor.

## Cambios que afectan al ensayo

El runner usa `--ephemeral` y se inicia con `exec ./run.sh`: así reemplaza la shell, el container termina tras un job y `--rm` libera su nombre. Para la segunda y tercera ejecución se registra otro runner. Usar Bash sin `exec` dejaría una shell viva tras el job.

Para agregar el workflow hay dos alternativas explícitas: web o CLI. La CLI actualiza main antes de copiar y confirmar el YAML. Si se elige web, no se deja una copia sin seguimiento que pueda impedir el siguiente pull. `workflow_dispatch` requiere que el workflow exista en main; luego se sincroniza development y se selecciona esa rama al iniciar el run.

El runner no recibe mounts, sesión de gh, perfil del agente ni socket Docker, y usa la red predeterminada. El agente comparte únicamente la carpeta del proyecto por un bind mount **con escritura**. Esa carpeta también la usa lab-app. Esto permite delegar la edición de `.env.local`; no equivale a aislamiento completo ni a acceso de sólo lectura.

La sesión de `gh auth login` del host no se monta dentro del agente. Se inicia una sesión propia cuando el ejercicio 5 la necesita. El flujo OAuth puede conceder más alcance que un repo; no afirmar restricciones propias de un fine-grained PAT. El gateway debe poder usar esa misma sesión guardada para `gh pr view`, `gh api` y `github_comment` sin exportar tokens. **Este punto requiere ensayo end-to-end.**

El agente configura archivos y hooks desde `hermes chat`, en otra shell. No se le pide reiniciar por Telegram el gateway que transporta su propia conversación. La persona reinicia el proceso de Next o del gateway en su terminal. No se monta el socket Docker para evitar esa acción humana.

El receptor Next responde `received` al evento aceptado y no invoca IA. La deduplicación es local, acotada y se pierde al reiniciar. El receptor nativo del ejercicio 6 tiene otra ruta, otro secret y una respuesta asíncrona: verificar el comentario final además del acuse HTTP.

### Migrar una instancia y su perfil

Para un proyecto nuevo, construir la imagen con los UID/GID del participante antes de crear `lab-agent` y `lab-app`. Los argumentos predeterminados son 1000; no representan a cualquier host. El usuario final sigue siendo `node`. La coincidencia de IDs se aplica a permisos Linux convencionales; verificar por separado Docker Desktop, rootless y user namespaces.

Reconstruir una etiqueta no modifica containers existentes. Si sólo se retoma la misma imagen e IDs, usar `docker start` como indica la guía. Si cambian IDs o se necesita la imagen nueva, primero detener tareas y gateway, conservar el container viejo y copiar el perfil a **otro volumen**. No borrar el original:

```bash
docker stop lab-agent
docker rename lab-agent lab-agent-anterior
docker volume create hermes-home-migrado
docker run --rm --user 0 \
  -v hermes-home:/origen:ro \
  -v hermes-home-migrado:/destino \
  workshop-tools:2026-10 \
  bash -c 'cp -a /origen/. /destino/ && chown -R node:node /destino'
```

Usar nombres de destino libres; si ya existen, elegir otros sin sobrescribirlos. El container administrativo sólo copia y prepara propietarios de ese volumen, no ejecuta Hermes ni la app y no recibe el proyecto, home del host o socket Docker.

Repetir el comando de 3.1 con `-v hermes-home-migrado:/home/node/.hermes` en lugar de `hermes-home`, comprobar escritura y verificar o reinstalar Hermes siguiendo 3.2, conservando la configuración del perfil. La instalación, sus entornos y el launcher pueden depender de archivos de la capa anterior. El login de `gh` está fuera del volumen del perfil: iniciar sesión de nuevo mediante 5.2. El container anterior conserva sus archivos y el volumen original queda intacto para recuperación. No arrancar simultáneamente los dos gateways.

Para reemplazar `lab-app`, conservar también la instancia anterior con otro nombre y repetir 4.2 con la imagen nueva. El bind mount conserva el proyecto y `.env.local`; no copiar credenciales al runner. Revisar permisos del proyecto antes de instalar dependencias, sin aplicar `chmod 777`.

## Continuación recomendada en el entorno local

1. Con Node 22 y pnpm 10.20.0, entrar en `hackerspace-site/` desde la raíz del material y ejecutar:

   ```bash
   cd hackerspace-site
   pnpm install --frozen-lockfile
   pnpm lint
   pnpm typecheck
   pnpm test
   pnpm build
   ```

   Los comandos siguientes de aplicación y Docker usan esa carpeta como directorio actual. En el repo independiente del participante se ejecutan desde su propia raíz, sin otro `cd hackerspace-site`.

2. Construir y abrir la imagen:

   ```bash
   docker build -t workshop-tools:2026-10 \
     --build-arg WORKSHOP_UID="$(id -u)" \
     --build-arg WORKSHOP_GID="$(id -g)" .
   docker run --rm workshop-tools:2026-10 \
     bash -lc 'node --version; pnpm --version; gh --version; cloudflared --version'
   ```

   Contrastar versiones y SHA si se actualiza el Dockerfile. Probar la arquitectura de las máquinas del taller. Comprobar permisos del usuario node y de la carpeta montada.

3. No crear un Codespace como sustituto de la clase. Para un ensayo separado, conectar una instancia existente con acceso autenticado de su creador y comprobar primero herramientas y app; no dar por validados Docker, credenciales, hooks o canales. Registrar fallos y alcance antes de ampliar la recomendación.

4. Con autorización para un repo de ensayo, seguir `docs/guia.md` desde cero: clone del material, copia, primer push, clon del sitio publicado, Production, Preview, PR, review web/CLI, merge commit y nuevo Production.

5. Ejecutar los tres checks con runners efímeros nuevos. Guardar los run IDs, SHA y mensajes reales. No abrir el runner a PRs de terceros.

6. Instalar Hermes según la documentación vigente y completar el wizard en lab-agent. Verificar chat, Telegram con allowlist, persistencia del perfil y login de gh propio. Elegir un modelo gratuito que realmente admita las herramientas y contexto utilizados; no pasar automáticamente a pago.

7. Seguir las pruebas local/interna/pública del túnel, caída y recuperación. Después recibir un PR real en Next, verificar firma inválida, `received` y `duplicate`.

8. Fusionar la plantilla `hackerspace-site/docs/snippets/hermes-webhook.yaml` del material, que en el repo del participante queda como `docs/snippets/hermes-webhook.yaml`. Comprobarla contra la versión instalada y habilitar Webhooks. Confirmar el caso negativo de etiqueta sin llamada al modelo, el caso positivo con comentario, el control del SHA y una segunda revisión tras la corrección. Si `github_comment` requiere autenticación adicional en esa versión, resolverlo con el flujo nativo y actualizar guía y slides juntos.

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
