# Handoff del instructor y del agente local

Actualizado el 1 de noviembre de 2026. Este archivo contiene el estado técnico de preparación. No se proyecta y no forma parte del recorrido del participante.

## Punto de entrada y estructura

El participante sigue `docs/guia.md`. La app Next.js autocontenida está en `hackerspace-site/`, separada de documentación y `slides/`. Clona el material en el host y mueve esa carpeta completa a `../lab`, con destino libre. Crea su repo vacío en GitHub, configura un fine-grained PAT limitado a ese repo, ejecuta login/status y publica desde `lab`. No vuelve a clonar el sitio. `.gitignore` viaja desde el principio y se explica después del primer push, antes de instalar dependencias. `slides/workshop.pptx` contiene 198 diapositivas; no se entrega ni mantiene un PDF.

El recorrido completo recomendado es **host + containers**. Codespaces queda limitado a una demo opcional de la landing al final del ejercicio 1, después del push correcto, build, Production/Preview y PR integrado. No certifica los ejercicios 2–6. `.devcontainer/devcontainer.json` prepara únicamente esa demo; se quitó Docker-in-Docker. El `Dockerfile` local, `.dockerignore`, configuración remota y plantillas de `docs/snippets/` viajan juntos dentro de `lab`.

Guía, README, PPTX y fuente local reflejan ese recorrido. Los archivos locales de autoría permanecen excluidos de la publicación. La autorización para actualizar la presentación no reabrió el ensayo remoto de Codespaces ni permitió crear otra instancia.

El paquete se consolidó a partir del ZIP anterior del workshop y la fuente de 216 diapositivas. Las versiones anteriores se conservaron durante la edición. No se tuvo disponible el handoff original mencionado al inicio ni el template visual original para contrastarlos de nuevo; no afirmar que esta revisión auditó esos originales. Se conserva el diseño aprobado conocido: negro, magenta, amarillo y cyan, con Unbounded y Poppins. El código ahora usa Inconsolata explícita y colores por sintaxis. No se entrega un paquete de fuentes tipográficas.

## Decisiones del usuario que deben conservarse

- Público con muy poca experiencia; pasos que puedan repetirse sin el instructor. Duración flexible de 3 a 6 horas.
- Seis ejercicios: landing y Vercel; Docker y runner; Hermes y Telegram; túnel; webhook sin IA; review solicitada por etiqueta.
- Empezar haciendo: dos diapositivas de apertura y el primer ejercicio. Enseñar Git, virtualización, redes y webhooks justo al necesitarlos.
- App de ejemplo: landing Next.js del HackerSpace de NodoSerrano.org. Hacer build real y deploy de main y development; el código de la landing es secundario al proceso.
- Separar material y app con un `mv`, sin copias con exclusiones, cadenas de guardas ni clon adicional. El destino debe estar libre; si falla un paso o no coincide carpeta/estructura, detenerse antes de inicializar Git.
- Crear el repo por web y enseñar el PAT antes de `gh auth login`, `gh auth status` y push. Seleccionar sólo el repo propio y añadir permisos cuando se necesitan. No usar OAuth amplio como atajo, refrescar scopes de PAT ni reemplazar autenticación heredada de Codespaces.
- Priorizar host y containers. Demo opcional en slides 65–67, después del checkpoint del ejercicio 1; detener Next y Codespace, y volver al host antes de Docker. No depurar Codespaces o Gitpod durante la clase.
- Mantener pasos, capturas reales y diagramas. **Notas del presentador: guion breve, sólo información útil ausente de la slide; vacío cuando no hace falta.** Sin pistas al instructor, relleno, repetición ni listas de fuentes.
- Historial Git con carriles y curvas; usar main y development en el ejercicio. Explicar merge commit, squash y rebase, y mostrar la interfaz real de PR.
- Host, VM y límites de containers explícitos; después leer el Dockerfile antes del build. Imagen `taller`, sin etiqueta fechada. Explicar redes cuando se usan, en el ejercicio 4; conectar el agente existente en el 6.
- Quick Tunnels sin crear una cuenta Cloudflare ni dominio durante la clase. El túnel administrado sólo aparece como ampliación opcional.
- Una imagen de herramientas y procesos fáciles de reconocer. Instancias distintas para runner, agente y app; no compartir el perfil del agente con el runner.
- El instructor instala Hermes en vivo siguiendo su documentación y completa el wizard: OpenRouter/modelo gratuito disponible, luego Telegram. No convertir la instalación de uv u otras dependencias en el tema del taller.
- Receptor preparado, pseudocódigo y gráficos. El alumno puede pedir a Hermes que lo adapte y configure los hooks. No hay un puente Python ni `./lab`.
- No publicar repositorios, findings ni ejecutar servicios pagos sin aprobación. No usar una etiqueta de práctica como autorización para un agente de mantenimiento.
- Resultados verificados y bloqueos se informan aquí. Los slides enseñan; no contienen un reporte público de auditoría.

## Estado real de validación

| Área | Resultado y alcance de esta revisión |
| --- | --- |
| App y separación | Se exportaron los 23 archivos versionados actuales del starter, incluidos dotfiles, Dockerfile, devcontainer y snippets. Un clon temporal del material se movió con `mv hackerspace-site ../lab`. `lab` recibió su propio `.git`, autor local, commit y push a remoto bare local, sin un segundo clon ni guía/slides en la app. No se creó un repo real en GitHub. |
| Paradas manuales | Se comprobó que un destino existente hace que `mv` anide la carpeta; un origen ausente falla; un `cd` fallido deja la terminal en el material. En esos fixtures se detuvo el recorrido antes de `git init`. Los bloques son pasos manuales, **no una transacción con guardas automáticas**. La guía exige destino libre y verificar carpeta/estructura. |
| Comprobaciones nativas | Desde `lab` independiente, Linux amd64, Node 22.23.4 y pnpm 10.20.0: install frozen, lint, typecheck, 23 tests y build pasaron. Biome comprobó 14 archivos sin corregirlos. No se recreó `hackerspace-site/node_modules` del material. |
| Error del ejercicio 6 | Cambiar temporalmente la resta por suma hizo fallar `pnpm test`: `AssertionError [ERR_ASSERTION]`, `25 !== 15`. Restaurar la resta pasó los 23 tests, lint y typecheck. No se añadió otro test ni un comando Node inline. El test conserva el aviso no fatal `[MODULE_TYPELESS_PACKAGE_JSON]` del import TypeScript. |
| Artefactos Git | Después de install/build, el árbol versionado quedó limpio; Git marcó `.next/`, `node_modules/` y `tsconfig.tsbuildinfo` como ignorados. `git ls-files node_modules .next` no devolvió archivos. `.gitignore` ya estaba incluido en el primer push. |
| Imagen local | `docker build -t taller .` pasó desde la raíz de `lab`, único contexto. Imagen `sha256:4bdd0f2f053e3904c546cbe9e39042a503b45b58673a59c15f1712bf157a18ea`. Dockerfile y versiones no cambiaron. La shell real mostró Node 22.23.4, pnpm 10.20.0, gh 2.103.3 y cloudflared 2026.10.3. |
| Usuario y mounts | La instancia del agente se creó antes de la red propia, con usuario 1000:1000. Las pruebas `touch`/`rm` escribieron en proyecto montado y perfil nuevo, sin credenciales ni socket Docker. Otro build con UID 12345/GID 20 pasó; ese usuario escribió en workspace de volumen nuevo, perfil, store y runner. GID 20 se muestra como `dialout` por un grupo preexistente: importa el número, no su nombre. No se ensayaron Desktop, arm64, rootless ni bind mount de un host con UID 12345. |
| App y red | Next de producción arrancó dentro de la imagen. Landing respondió con su título; health devolvió `{"status":"ok","service":"nodoserrano"}` tanto por loopback publicado como desde otro container por DNS. Se conectó el agente ya existente a la red y otro container alcanzó su puerto 8644. Este último caso usó un servidor Node temporal para probar transporte, **no Hermes**. No se abrió un túnel público. |
| Login y runner | En containers nuevos, sin red ni credenciales, se recorrieron los prompts reales de gh hasta `Paste your authentication token:` y del runner hasta `What is your runner register token?`. Se cancelaron sin introducir tokens. Se observó la ayuda de scopes clásicos de gh; no define los permisos del token fino. Esto no prueba autenticación ni registro real. |
| Permisos CLI | Documentación oficial y código de gh v2.103.3 contrastados. PAT inicial: Contents/Pull requests write, Metadata read automático; Actions write para dispatch, Workflows write sólo para push del YAML. Runner web usa otro token temporal. Agente: Contents read/Pull requests write; Webhooks write sólo si administra hooks. Se reemplazaron `gh run watch`, vistas de PR por defecto y edición CLI de etiquetas por consultas explícitas o web. Sin ensayo autenticado. |
| PPTX nativo | 198 slides, 198 notas emparejadas, 852 partes; resuelven 1041 relaciones internas. Se conservan las identidades de las 178 slides anteriores y sus media, temas, masters y layouts originales. Se añadieron 20 slides y 13 payloads de imagen, con 12 capturas nuevas distribuidas. Footers y progreso siguen el orden actual. |
| Notas | 37 guiones breves y 161 notas vacías; máximo 23 palabras. El cuerpo nativo coincide con la fuente local. Sin bloques de fuentes ni instrucciones editoriales. Referencias y límites de verificación quedan en este archivo, no en el guion hablado. |
| Render y tipografía | PPTX renderizado con LibreOffice 7.4.7.2 e Inconsolata Regular/Bold temporales. Sus 119 cajas de código, diff, salida y editor conservaron texto completo, familia Inconsolata y límites con tolerancia de 2 pt. Se revisó la vista general de las 198 slides; tabla de ramas, ejemplos densos y rótulo de red se corrigieron contra el render real. No se ensayaron PowerPoint ni Google Slides. |
| Revisión final | Se corrigieron los cinco hallazgos: sincronización explícita de main antes de development, segunda review después del push corregido, build por defecto excluyente del adaptado, permiso Workflows antes del push y cuatro notas sin cláusulas repetidas. Los caminos web y CLI se ejecutaron con Git real y remotos bare locales: main, development y origin/development recibieron el workflow completo. Se renderizaron las slides corregidas; la segunda petición queda en 194, después de corrección/checks/push en 191–193. `ripwire --quality-delta` no encontró regresiones en código indexado; no mide la corrección del PPTX. |
| Vercel | Referencias públicas contrastadas: GitHub App separada del PAT, Preview automático después del primer deployment, Production Branch Tracking y protección de acceso. Se muestran importación, build, Ready, entornos, Preview y evidencia en GitHub. No se creó un deployment propio ni se presentan imágenes de proyectos distintos como una ejecución correlacionada. |
| Codespaces | Investigación remota cerrada por el usuario. En el intento anterior, CLI no listó instancias y API devolvió HTTP 403 `Resource not accessible by personal access token`; navegador exigió login. No se conectó a terminal ni se reintentó aquí. No demuestra fallo del runtime. |
| Integraciones pendientes | Login real con PAT, runner/job, Vercel, Hermes, Telegram, hooks públicos, review de modelo, importación en Google y demo remota. No se registraron cuentas, consumieron modelos ni usaron servicios pagos. La revisión estática y los prompts offline no sustituyen estos recorridos. |
| Evidencia anterior | La preparación previa comprobó handlers HTTP firmados, deduplicación y comparación de SHA inmutables; esos handlers y snippets no cambiaron aquí. La consulta de advisories del 31 de octubre no se repitió. No es certificación de seguridad. DeepSec sigue sin acceso ni captura real. |
| Publicación | Autorizado el repo privado `theredguild/github-ai-automation-lab` y el PPTX. Fuentes de autoría, PDF y tipografías quedan fuera de Git. No se publicaron findings ni comentarios de prueba. |

### Ensayos anteriores que siguen siendo relevantes

- **Build y producción.** El Route Handler usa el runtime Node predeterminado, compatible con Cache Components. Las comprobaciones unitarias se complementaron con navegador y requests al servidor de producción, no sólo imports directos.
- **Store y permisos.** La imagen define el store de pnpm fuera del bind mount y permite preparar `node` con UID/GID del participante. Se probó escritura en proyecto, home, store e instalación del runner con UID 12345/GID 20. La guía comprueba permisos antes de cargar credenciales.
- **Perfil existente.** La migración documentada copia a otro volumen y cambia sólo sus propietarios. En el ensayo, el marcador y propietario originales siguieron en 1000:1000 y la copia quedó escribible en 12345:20. También se comprobó que un container existente conserva su UID original aunque se cambie el destino de la etiqueta de imagen.
- **Vercel.** Guía y presentación conservan autodetección de Install Command; no ofrecen un override genérico incompatible con el lockfile. La selección se contrastó con documentación oficial, no con un deployment real.
- **Review inmutable.** El prompt compara base/head del evento y base `main` antes de obtener el diff y antes de devolver la respuesta. Usa `gh api` con comparación entre ambos SHA, no un diff de rama mutable. Una consulta de sólo lectura a GitHub sobre dos commits ya existentes devolvió los cambios esperados. Un repo Git temporal con historias divergentes comprobó que la comparación de tres puntos excluye cambios exclusivos de base y conserva el diff solicitado tras mover head, base y merge-base. Esto no prueba que un modelo siga las instrucciones ni hace atómica la publicación.
- **Red.** El servidor de producción respondió el mismo health desde loopback del host y desde otro container por el alias `lab-app`. La publicación quedó limitada a `127.0.0.1`; no se abrió un túnel público.
- **Integraciones pendientes.** No se registró un runner, ejecutó un job, creó un Codespace ni publicó un deployment de Vercel. No se configuraron cuentas de Hermes, OpenRouter o Telegram ni se consumieron modelos. La revisión estática de Hermes v0.22.5 no sustituye esos recorridos. Los recursos y fixtures temporales de ejecución se retiraron.

### Separación del starter y del material

El recorrido actual mueve la carpeta completa fuera del material y continúa en `lab`, sin clon adicional. La `.git` del material permanece en su sitio. Los comandos de `git init`, autor local, commit y push se ejecutaron en un fixture aislado con remoto bare; sólo el transporte de publicación fue local. Las dependencias y el build se probaron después desde ese proyecto independiente.

Destino libre y comprobación de carpeta son condiciones humanas explícitas. `mv` no rechaza por sí solo un destino que ya es directorio, ni una secuencia de bloques impide continuar tras un error. No reintroducir las cadenas `&&`, copias con exclusiones o grupos Bash de la revisión anterior para ocultar esa diferencia.

Los ensayos anteriores de reparación de artefactos comprobaron que `git rm --cached` no borra archivos locales ni elimina secretos de commits previos. La guía conserva esa reparación como caso opcional, separada de la explicación inicial del archivo ya incluido. No se reparó ningún repo real de un participante.

Los comandos `cp docs/snippets/checks.yml ...` y las instrucciones de Hermes sobre `docs/snippets/hermes-webhook.yaml` siguen siendo relativos a la raíz del repo del participante. Sólo los enlaces de la guía apuntan a la ubicación dentro del material. `next dev` puede generar instrucciones propias de Next en el proyecto; no se copia allí el handoff ni el `AGENTS.md` del mantenedor.

## Cambios que afectan al ensayo

El runner usa `--ephemeral` y se inicia con `exec ./run.sh`: así reemplaza la shell, el container termina tras un job y `--rm` libera su nombre. Para la segunda y tercera ejecución se registra otro runner. Usar Bash sin `exec` dejaría una shell viva tras el job.

Para agregar el workflow hay dos alternativas explícitas: web o CLI. La CLI actualiza main antes de copiar y confirmar el YAML. Si se elige web, no se deja una copia sin seguimiento que pueda impedir el siguiente pull. `workflow_dispatch` requiere que el workflow exista en main; luego se sincroniza development y se selecciona esa rama al iniciar el run.

El runner no recibe mounts, sesión de gh, perfil del agente ni socket Docker, y usa la red predeterminada. El agente comparte únicamente la carpeta del proyecto por un bind mount **con escritura**. Esa carpeta también la usa lab-app. Esto permite delegar la edición de `.env.local`; no equivale a aislamiento completo ni a acceso de sólo lectura.

La sesión del host no se monta dentro del agente. En el ejercicio 5 se inicia otra sesión con PAT de corta duración y sólo el repo propio: Contents read y Pull requests write; Webhooks write únicamente si se delega administrar hooks. No exportar tokens ni montar credenciales del host. `gh` puede guardar el token en texto plano dentro de ese container. El gateway debe reutilizar esa sesión para consultas explícitas de PR, `gh api` y `github_comment`. **Requiere ensayo autenticado end-to-end.**

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
  taller \
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
   docker build -t taller \
     --build-arg WORKSHOP_UID="$(id -u)" \
     --build-arg WORKSHOP_GID="$(id -g)" .
   docker run --rm taller \
     bash -lc 'node --version; pnpm --version; gh --version; cloudflared --version'
   ```

   Contrastar versiones y SHA si se actualiza el Dockerfile. Probar la arquitectura de las máquinas del taller. Comprobar permisos del usuario node y de la carpeta montada.

3. Mantener el recorrido completo en host + containers. Demo opcional en 1.9 de la guía y slides 65–67, después de push, deployments y PR. El usuario cerró la investigación remota; no reintentar ni crear otra instancia sin nuevo pedido.

4. Con autorización para un repo de ensayo, seguir `docs/guia.md`: clone del material, mover a `lab`, crear repo vacío por web, PAT seleccionado, login/status, primer push, `.gitignore`, install/build, Production, Preview, PR, review y nuevo Production. No agregar un segundo clon.

5. Ejecutar los tres checks con runners efímeros nuevos. Guardar los run IDs, SHA y mensajes reales. No abrir el runner a PRs de terceros.

6. Instalar Hermes según la documentación vigente y completar el wizard en lab-agent. Verificar chat, Telegram con allowlist, persistencia del perfil y login de gh propio. Elegir un modelo gratuito que realmente admita las herramientas y contexto utilizados; no pasar automáticamente a pago.

7. Seguir las pruebas local/interna/pública del túnel, caída y recuperación. Después recibir un PR real en Next, verificar firma inválida, `received` y `duplicate`.

8. Fusionar la plantilla `hackerspace-site/docs/snippets/hermes-webhook.yaml` del material, que en el repo del participante queda como `docs/snippets/hermes-webhook.yaml`. Comprobarla contra la versión instalada y habilitar Webhooks. Confirmar el caso negativo de etiqueta sin llamada al modelo, el caso positivo con comentario, el control del SHA y una segunda revisión tras la corrección. Si `github_comment` requiere autenticación adicional en esa versión, resolverlo con el flujo nativo y actualizar guía y slides juntos.

9. Importar la presentación en Google Slides. Revisar código, capturas, gráficos y las 198 notas, incluidas vacías; recorrer las 198 slides. Si se sustituye Inconsolata, corregir los comandos manteniéndolos monoespaciados.

10. Actualizar esta tabla con comandos, versiones, IDs y evidencias reales. Capturar las interfaces autorizadas del propio ensayo. Nunca capturar credenciales. Mantener los pendientes fuera de los slides del público.

## Editar y regenerar la presentación

Para cambios manuales, `slides/workshop.pptx` contiene texto, código con runs de color, tablas, diagramas y notas. El código editable usa Inconsolata; títulos y prosa mantienen Unbounded y Poppins. Después de importar en Google Slides, comprobar posibles sustituciones; en PowerPoint de escritorio la fuente debe estar instalada. No se incrustan ni se entregan archivos tipográficos con el PPTX.

En el entorno local se conserva la fuente editable adicional `slides/source.json`: orden, texto, comandos, salidas ilustrativas, notas y enlaces oficiales por diapositiva. Los estilos están en `theme.mjs`, `layouts.mjs`, `base.mjs` y `metrics.json`. Estos archivos de autoría no se publican en el repo; el PPTX es la presentación versionada. Las capturas compartidas están en `docs/assets/`.

Si se dispone de esos archivos locales, hay un generador opcional con una dependencia pública fijada, PptxGenJS 4.0.1:

```bash
cd slides
npm install
npm run build
```

El generador escribe `workshop-generated.pptx`, sin sobrescribir la entrega. Su ensayo anterior exportó 178 slides; no se repitió tras ampliar a 198. **La salida alternativa requiere revisión visual.** Esta revisión actualizó selectivamente el OOXML nativo y renderizó el PPTX real; el generador opcional no forma parte de los comandos del participante.

La fuente local conserva orden, contenido y guiones mínimos, incluidos blancos. `base.mjs` no añade fuentes al cuerpo de las notas. El formato inline de código se segmenta nativamente en el PPTX; el generador opcional no reproduce todos esos detalles. Para validar se usaron Inconsolata Regular/Bold y fuentes del diseño sólo en una carpeta temporal fuera del repo. Ni fuentes tipográficas ni PDF forman parte de la entrega.

Si cambian orden o contenido, actualizar también guía y notas cuando corresponda. El PDF queda fuera del flujo de mantenimiento por ahora. Si se vuelve a necesitar, exportarlo desde la versión aprobada de la presentación en Google Slides o PowerPoint.

## Capturas y fuentes fuera del guion

Las capturas nuevas son referencias públicas, no ejecuciones de nuestras cuentas. Conservan crédito visible. GitHub Blog: Hirsch Singhal, 18 de octubre de 2022; no se verificó una licencia abierta para sus imágenes y no se atribuyen como CC-BY. La imagen Community pertenece al post público enlazado, no a documentación oficial. Las demás proceden de documentación/changelog de sus titulares.

| Archivo en `docs/assets/` | Imagen de origen | Alcance |
| --- | --- | --- |
| `github-pat-creation-expiry.png` | [Original](https://github.blog/wp-content/uploads/2022/10/PAT3.gif) | Fotograma 0, 2022; nombre/vencimiento; sin token generado. |
| `github-pat-selected-repository.png` | [Original](https://github.blog/wp-content/uploads/2022/10/PAT3.gif) | Fotograma 175, 2022; cuenta/repo de ejemplo; interfaz histórica Beta. |
| `github-vercel-app-repository-permissions.png` | [Original](https://docs.github.com/assets/images/github-apps/install-app.png) | Octo App genérica; no muestra permisos actuales de Vercel. |
| `vercel-setup-import-repositories.png` | [Original](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/docs/concepts/deployments/git/index/repo-list-light.png) | Importador oficial; repos de ejemplo. |
| `vercel-setup-framework-detection.png` | [Original](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/docs/concepts/deployments/build-step/framework-settings-light.png) | Recorte real (0, 0, 1864, 450) de imagen 1864×1114; omite overrides turbo/manuales; no altera controles. |
| `vercel-check-build-logs.png` | [Original](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/docs/concepts/deployments/logs/buttons-light.png) | Ubicación del botón Build Logs; no logs exitosos. |
| `vercel-check-production-url.png` | [Original](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/docs/concepts/deployments/generated-url-prod-light.png) | Ejemplo histórico Next.js 13: Ready/main/URL; sin repo completo ni SHA. |
| `vercel-setup-environments-branch-tracking-community.png` | [Original](https://global.discourse-cdn.com/vercel/original/2X/1/1eed8aa80320906829b1fac3c6e5f9a0c1f98a5f.png) | Publicada por willessing-4027, Vercel Community, 2025-09-10; lista de entornos, no editor expandido. |
| `vercel-check-deployment-filters.png` | [Original](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/docs/concepts/deployments/filtering-deployments/filter-status-light.png) | Filtros de entorno/estado; no prueba estado de nuestra app. |
| `vercel-setup-preview-protection.png` | [Original](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/contentful/image/e5382hct74si/7LHNvuRkcDlKMWswY7c8xd/858a8627a82bcec2c456bcd42618b3f5/Screenshot_2025-07-09_at_5.05.58%C3%A2__pm.png) | Acceso protegido; no activación de generación Preview. |
| `github-vercel-pr-deployment-details.png` | [Original](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/docs/concepts/deployments/git-link-light.png) | Ejemplo oficial de 2024: comentario, Ready, Inspect/Visit Preview y View deployment. |
| `github-vercel-commit-status.png` | [Original](https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/7wzza5neuEZJ9buQ1IYSR4/12066ac9f6c8d4c4fd95247e74662237/Terminal.png) | Check consolidado de monorepo; nombre/cantidad no obligatorios para la landing. |

Origen de los fotogramas PAT: [artículo de GitHub Blog](https://github.blog/security/application-security/introducing-fine-grained-personal-access-tokens-for-github/). Origen Community: [post de septiembre de 2025](https://community.vercel.com/t/commits-to-production-branch-main-are-triggering-preview-deployments/22180). Sólo se usa su lista de entornos, no como prueba de resolución del fallo del post.

No se obtuvo una captura actual del editor Branch Tracking expandido ni de Connected Git Repository configurado. Las rutas se explican desde documentación; las evidencias de repo, SHA y deployments propios se producen durante la práctica autorizada. No se sintetizó interfaz ni se emparejaron ejemplos públicos como si compartieran commit.

### Índice de referencias de la presentación

Estas referencias antes se anexaban a las notas. Se conservan aquí; no forman parte del texto hablado. Las páginas de creación de repos/tokens y Codespaces requieren autenticación para operar.

Comprobación actual: 70 bloques Bash entre README, guía y este registro, más 64 extraídos del PPTX, pasaron `bash -n`. Resuelven 29 destinos locales y 8 anchors. Los 121 enlaces externos únicos respondieron HTTP 200, siguiendo redirecciones cuando corresponden. Crear repo, crear token y Codespaces terminaron en login: ese HTTP 200 no prueba acceso a una cuenta.

#### App y herramientas

- <https://nextjs.org/docs/app/api-reference/cli/create-next-app>
- <https://nextjs.org/docs/app/api-reference/cli/next>
- <https://nextjs.org/docs/app/api-reference/file-conventions/route>
- <https://nodejs.org/api/assert.html>
- <https://nodejs.org/api/typescript.html>
- <https://nodejs.org/en/download>
- <https://nodoserrano.org/>
- <https://nodoserrano.org/somos/hackerspace.webp>
- <https://pnpm.io/cli/install>
- <https://pnpm.io/installation>

#### Cloudflare

- <https://developers.cloudflare.com/tunnel/concepts/>
- <https://developers.cloudflare.com/tunnel/get-started/>
- <https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/>
- <https://developers.cloudflare.com/tunnel/troubleshooting/>
- <https://raw.githubusercontent.com/cloudflare/cloudflare-docs/production/src/assets/images/changelog/cloudflare-one/tunnel-hostname-routing.webp>

#### Docker

- <https://docs.docker.com/build/building/packaging/>
- <https://docs.docker.com/engine/network/drivers/bridge/>
- <https://docs.docker.com/engine/network/port-publishing/>
- <https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/>
- <https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/>
- <https://docs.docker.com/reference/cli/docker/container/exec/>
- <https://docs.docker.com/reference/cli/docker/container/run/>

#### Git y ramas

- <https://git-scm.com/docs/git-checkout>
- <https://git-scm.com/docs/git-switch>
- <https://git-scm.com/install/>

#### GitHub y CLI

- <https://cli.github.com/>
- <https://cli.github.com/manual/>
- <https://cli.github.com/manual/gh_auth_login>
- <https://cli.github.com/manual/gh_auth_refresh>
- <https://cli.github.com/manual/gh_pr_create>
- <https://cli.github.com/manual/gh_pr_diff>
- <https://cli.github.com/manual/gh_pr_merge>
- <https://cli.github.com/manual/gh_pr_review>
- <https://cli.github.com/manual/gh_pr_view>
- <https://cli.github.com/manual/gh_repo_create>
- <https://cli.github.com/manual/gh_run_view>
- <https://cli.github.com/manual/gh_run_watch>
- <https://cli.github.com/manual/gh_workflow_run>
- <https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners>
- <https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow>
- <https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs>
- <https://docs.github.com/en/actions/how-tos/security-for-github-actions/security-guides/security-hardening-for-github-actions>
- <https://docs.github.com/en/actions/reference/runners/self-hosted-runners>
- <https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax>
- <https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party>
- <https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens>
- <https://docs.github.com/en/billing/concepts/product-billing/github-codespaces>
- <https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository>
- <https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace>
- <https://docs.github.com/en/codespaces/reference/security-in-github-codespaces>
- <https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers>
- <https://docs.github.com/en/get-started/git-basics/ignoring-files>
- <https://docs.github.com/en/get-started/using-git/about-git>
- <https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels>
- <https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request>
- <https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request>
- <https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request>
- <https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request>
- <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github>
- <https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository>
- <https://docs.github.com/en/rest/actions/self-hosted-runners>
- <https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens>
- <https://docs.github.com/en/rest/repos/webhooks>
- <https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/redelivering-webhooks>
- <https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/viewing-webhook-deliveries>
- <https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks>
- <https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries>
- <https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request>
- <https://github.blog/security/application-security/introducing-fine-grained-personal-access-tokens-for-github/>
- <https://github.com/actions/checkout/tree/v7.0.1>
- <https://github.com/cli/cli/blob/v2.103.3/pkg/cmd/auth/shared/login_flow.go>
- <https://github.com/codespaces>
- <https://github.com/new>
- <https://github.com/settings/personal-access-tokens/new>

#### Hermes, modelos y Telegram

- <https://core.telegram.org/bots/features#creating-a-new-bot>
- <https://hermes-agent.nousresearch.com/docs/getting-started/quickstart>
- <https://hermes-agent.nousresearch.com/docs/guides/webhook-github-pr-review>
- <https://hermes-agent.nousresearch.com/docs/integrations/providers>
- <https://hermes-agent.nousresearch.com/docs/reference/cli-commands>
- <https://hermes-agent.nousresearch.com/docs/user-guide/configuration>
- <https://hermes-agent.nousresearch.com/docs/user-guide/messaging>
- <https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram>
- <https://hermes-agent.nousresearch.com/docs/user-guide/messaging/webhooks>
- <https://hermes-agent.nousresearch.com/docs/user-guide/security>
- <https://openrouter.ai/blog/tutorials/hermes-agent/>
- <https://openrouter.ai/docs/guides/features/tool-calling>
- <https://openrouter.ai/docs/guides/routing/model-variants/free>
- <https://openrouter.ai/docs/quickstart>

#### Vercel

- <https://community.vercel.com/t/commits-to-production-branch-main-are-triggering-preview-deployments/22180>
- <https://vercel.com/changelog/consolidated-commit-status-now-available-for-github>
- <https://vercel.com/docs/deployment-protection>
- <https://vercel.com/docs/deployments>
- <https://vercel.com/docs/deployments/configure-a-build>
- <https://vercel.com/docs/deployments/environments>
- <https://vercel.com/docs/deployments/generated-urls>
- <https://vercel.com/docs/deployments/logs>
- <https://vercel.com/docs/git>
- <https://vercel.com/docs/package-managers>
- <https://vercel.com/docs/project-configuration/git-configuration>
- <https://vercel.com/kb/guide/can-i-use-a-non-default-branch-for-production>
- <https://vercel.com/kb/guide/unable-to-find-github-repository>


## Límites operativos

El proyecto es un taller reproducible en preparación, no un servicio listo para producción. Un Quick Tunnel es público y temporal. Los prompts no son una frontera de seguridad. El runner, las credenciales del agente y el código de PRs deben permanecer separados. Probar contra cuentas reales requiere el acceso y autorización correspondientes; estas instrucciones no conceden permiso para publicar nada ni generar cargos.

No crear nuevas guías paralelas, documentos de plan por entorno, diapositivas de auditoría ni paquetes de tipografías. Registrar aquí los problemas concretos para que el siguiente agente continúe sobre este mismo proyecto.
