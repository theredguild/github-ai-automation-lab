# Handoff del instructor y del agente local

Actualizado el 4 de noviembre de 2026. Este archivo contiene el estado técnico de preparación. No se proyecta ni se publica como página del curso.

## Punto de entrada y estructura

El participante sigue el curso Vocs de `docs/src/pages/`, con navegación en `docs/vocs.config.ts`. `docs/guia.md` quedó como iniciador breve, no otra copia de las instrucciones. La app Next.js autocontenida sigue en `hackerspace-site/`. El recorrido conserva clon del material, movimiento completo a `../lab`, repo propio vacío, PAT limitado, login/status y primer push. `.gitignore` viaja desde el principio y se explica después del push. La presentación actual tiene 200 diapositivas: conserva las 198 anteriores y agrega los mandamientos y la instalación de Hermes.

Título visible aprobado: **De un commit a trabajo autónomo**, sin el prefijo "Taller:". Es consistente en README, portada y configuración de Vocs, plantilla del título de página, presentación del capítulo 1 y apertura/cierre del PPTX. Los slugs del repo y del package y la app no cambian.

La portada aprobada agrega "Sobre este taller", "Qué necesitás saber" y "Qué vas a aprender" antes del recorrido de capítulos. Presenta automatización, delegación y comprobación de resultados sin abrir con una lista de tecnologías; conserva requisitos mínimos, autoría y contexto laboral indicados por el usuario. Chromium comprobó texto, orden de secciones, título y descripción, pantalla móvil de 320 px y navegación hacia requisitos y capítulo 1, sin errores ni overflow horizontal. Se mantuvieron el favicon de loto y la tipografía compacta.

Se conservó ese nombre completo y se compactó su tipografía: marca de navegación de 16 px y títulos de página de 24–28 px mediante los hooks nativos de Vocs. El favicon es `docs/public/lotus.svg`, un loto vectorial sin recursos externos, configurado con `iconUrl`. Chromium comprobó desktop, móviles de 390 y 320 px, menú y navegación, sin recorte de la marca ni overflow horizontal. El SVG respondió `200`, decodificó a 32×32 y mostró el magenta correspondiente en modo claro y oscuro. El build estático aislado pasó con Node 22.23.4, incluyó el SVG entre 632 archivos públicos y conservó el título formal; también se verificaron el CSS y el icono desde ese output de producción. No se cambió la app, el PPTX ni la configuración de deployment.

El recorrido completo recomendado es **host + containers**. Codespaces queda limitado a una demo opcional de la landing al final del ejercicio 1, después del push correcto, build, Production/Preview y PR integrado. No certifica los ejercicios 2–6. `.devcontainer/devcontainer.json` prepara únicamente esa demo; se quitó Docker-in-Docker. El `Dockerfile` local, `.dockerignore`, configuración remota y plantillas de `docs/snippets/` viajan juntos dentro de `lab`.

Vocs es la única guía del participante. El README explica cómo abrirla; el PPTX es el material proyectado de la clase. Los archivos locales de autoría del PPTX permanecen excluidos de la publicación. Preparar esta web no reabrió el ensayo remoto de Codespaces ni autorizó deployments, cuentas o consumos pagos.

La portada y la navegación global de Vocs enlazan la presentación de Google Slides indicada por el usuario, con el rótulo "Presentación". Ambos enlaces conservan la URL compartida y abren otra pestaña. Chromium comprobó la portada y la navegación en 1280 px y el selector del menú móvil en 320 px, sin overflow horizontal ni errores de navegador. `pnpm --dir docs build` pasó, con avisos de profiling del bundler y tamaño de chunks. La lectura del destino identificó `workshop (2).pptx` en Google Slides; no se ensayaron permisos de edición ni se modificó ese archivo.

El paquete se consolidó a partir del ZIP anterior del workshop y la fuente de 216 diapositivas. Las versiones anteriores se conservaron durante la edición. No se tuvo disponible el handoff original mencionado al inicio ni el template visual original para contrastarlos de nuevo; no afirmar que esta revisión auditó esos originales. Se conserva el diseño aprobado conocido: negro, magenta, amarillo y cyan, con Unbounded para títulos y Poppins para prosa. El código usa Inconsolata; los textos de apoyo, Tektur. No se entrega un paquete de fuentes tipográficas.

## Revisión técnica y pedagógica publicada

Se revisaron introducción, preparación, los seis capítulos y cierre con el criterio de explicar los términos al usarlos, sin omitir detalles técnicos. Se ajustaron 66 páginas: modelo, harness y agente; operaciones de Git y deployments; imagen, container y runner; permisos y persistencia; redes y requests; firma y filtros; revisión por SHA y decisión humana. El cierre también sirve si se interrumpe un capítulo. No se cambiaron rutas, navegación, capturas, PPTX, starter ni configuración de deployment. Esta revisión se publicó en `main` con el commit firmado `63e757f`; GitHub confirmó su firma como válida.

Los bloques de código originales se conservaron íntegros. La única diferencia entre bloques es el ejemplo nuevo `pwd` en preparación. Los 126 bloques Bash del curso pasan `bash -n`, que comprueba sintaxis, no ejecución.

El build aislado pasó con Node 26.10.0 y pnpm 10.20.0, con enlaces internos estrictos y búsqueda local. Generó 632 archivos públicos. Un recorrido HTTP comprobó las 111 páginas con estado 200 y su H1 esperado. Chromium comprobó texto nuevo y ausencia de overflow horizontal en diez páginas representativas a 1280 y 320 px, incluidas las tablas de componentes y workflow; las imágenes de las páginas inspeccionadas cargaron correctamente. También se comprobó el enlace Next desde cierre a desactivar hooks y se observaron capturas de las tablas en móvil y escritorio. Una revisión independiente detectó que el cierre incompleto aún asumía Docker instalado y omitía exploración y runner activo. Se corrigió esa omisión, se reconstruyó el curso y se comprobó la página final en ambos anchos, sin errores de navegador.

Estas comprobaciones cubren la guía publicada localmente. No se repitieron ejercicios contra GitHub, Vercel, Telegram, modelos ni Cloudflare, ni se certificaron esas integraciones. La revisión no autoriza publicarlas o consumir servicios pagos. El archivo preexistente no versionado `docs/src/pages.gen.ts` se conservó sin cambios.

## Reescritura con voz docente

Por pedido del usuario se reescribió la narrativa de las 111 páginas del curso, incluidas opciones y referencias, con voz de docente que acompaña la práctica. Los campos repetidos de ubicación, requisitos y comprobación se integraron al relato sin eliminar esas condiciones. Se explican el propósito de cada paso y la lectura del resultado. Las advertencias de riesgo siguen visibles junto a las acciones. También se aclaró que, al mover el starter, la `.git` del material queda dentro de `github-ai-automation-lab/`, fuera de `lab`.

La comparación contra la versión previa confirmó que se conservaron íntegros los bloques de código, prompts y configuración, frontmatter, encabezados, imports, imágenes y destinos de enlaces de las 111 páginas. No se cambiaron rutas, sidebar, app, PPTX ni configuración de deployment. Los 126 bloques Bash pasan `bash -n`. El archivo ajeno no versionado `docs/src/pages.gen.ts` se mantuvo intacto y fuera de los cambios.

El build aislado pasó con Node 26.10.0 y pnpm 10.20.0, con validación estricta de enlaces y búsqueda local. Generó 632 archivos públicos. El recorrido HTTP comprobó las 111 rutas con estado 200 y H1 esperado. Chromium comprobó 13 páginas representativas a 1280 y 320 px, con texto nuevo visible, imágenes cargadas y sin overflow horizontal ni errores de navegador. Se observó la presentación del primer commit en escritorio y de las opciones de build de Docker en móvil. El enlace Next desde primer commit hasta publicar el repo funcionó.

La revisión semántica detectó una inferencia incorrecta entre no estar versionado y estar ignorado en la página de build. Se corrigió, se reconstruyó Vocs y se volvió a comprobar esa página en ambos anchos. Una prueba local descartable con dos repositorios Git mostró que `git ls-files` vacío puede preceder tanto a un archivo que `git add .` prepara como a uno excluido por `.gitignore`. `git status --ignored` distinguió este último con `!! .next/`. Se retiraron esos repositorios de prueba.

Estas pruebas comprueban la guía y su navegación, no las integraciones externas del taller. No se ejecutaron ejercicios contra cuentas reales, llamadas a modelos, cambios de webhooks ni consumos pagos durante esta pasada.

`docs/src/pages.gen.ts` contiene tipos de rutas que Waku genera al iniciar el servidor de desarrollo y al cambiar páginas. No se mantiene a mano ni se versiona. La regla específica `/docs/src/pages.gen.ts` quedó en el `.gitignore` raíz; no se borró ni modificó el archivo generado. `git check-ignore -v` comprobó esa regla y `git status` dejó de mostrarlo como no versionado. Las 111 páginas de autoría siguen fuera de las exclusiones.

## Hermes en imagen mínima y libatomic

Los participantes reportaron que instalar `libatomic1` resolvió el fallo en ARM. La [documentación oficial de instalación](https://hermes-agent.nousresearch.com/docs/getting-started/installation#prerequisites) confirma que el Node administrado por Hermes necesita `libatomic.so.1` en Linux glibc y que las imágenes mínimas pueden no incluirla. Se agregó `libatomic1` a la instalación común de paquetes de `hackerspace-site/Dockerfile`, sin cambiar el usuario final `node`, versiones, descargas ni checksums. Debian Bookworm publica el mismo paquete para [arm64](https://packages.debian.org/bookworm/arm64/libatomic1).

`docker build -t taller .` pasó desde `hackerspace-site/` en amd64. Imagen obtenida: `sha256:bebd75c9d4eb42f37483c1930241df468f9b21b899d9fa67fa2fd7f503d5cdb7`. Dentro de una instancia descartable sin mounts ni credenciales, el usuario `node`, UID/GID 1000, cargó `libatomic.so.1` con `ctypes.CDLL`; `dpkg-query` mostró `libatomic1:amd64 12.2.0-14+deb12u1`. El instalador oficial completó Hermes v0.22.7, commit `b200f5bc60e3`, y se ejecutaron correctamente `hermes --version` y `hermes --help`.

El ensayo usó `--non-interactive --skip-browser --skip-computer-use`. No configuró proveedores, Telegram, webhooks ni cuentas, no llamó modelos y no prueba browser o computer-use. La instalación emitió un warning de npm por `store-dir` y el CLI avisó que era PID 1 sin init; esos avisos no se ocultaron ni bloquearon el resultado. El container se eliminó con `--rm`. El builder sólo ofrece amd64/386 y no tiene emulación ARM registrada: este ensayo no certifica una ejecución ARM. El resultado ARM proviene del reporte de los participantes, no de un ensayo local.

La guía explica la dependencia y ofrece dos comandos de administración desde el host para reparar sólo el `lab-agent` existente, sin borrar el perfil ni ejecutar Hermes como root. Se mantienen nombres distintos e intencionales: `lab-agent` ejecuta Hermes y su receptor en 8644; `lab-app` ejecuta Next en 3000. Ambos parten de `taller` y comparten el proyecto montado en `/workspace`, incluido `/workspace/node_modules`. Sus instalaciones de paquetes del sistema no se comparten. Los comandos de Hermes apuntan al agente y el túnel cambia de la app al agente en el capítulo 6.

Vocs construyó con Node 22.23.4 y pnpm 10.20.0 de la imagen corregida, sin red y con validación estricta de enlaces. Los 127 bloques Bash pasan `bash -n`. Chromium comprobó las cuatro páginas modificadas en escritorio de 1280 px y móvil de 320 px, sin overflow horizontal ni errores de navegador. Se recorrieron el enlace al diagnóstico de `libatomic.so.1` y su regreso a instalación. El PPTX, las credenciales existentes y los containers de los participantes no se modificaron.

## Presentación final de 200 diapositivas

Se editó el OOXML del PPTX existente, sin regenerarlo desde el generador alternativo. La apertura y el cierre llevan el título aprobado. El mapa de seis ejercicios sigue en la slide 2 y agrega los objetivos generales: automatizar checks, delegar una revisión y evaluar el resultado con criterio humano. Su copia **6 mandamientos** queda en la slide 3, con el orden y la excepción al uso de AI indicados por el usuario.

La tabla de herramientas incluye `libatomic1` como dependencia del Node administrado por Hermes en Linux glibc. Las slides 108, 127 y 182 distinguen `lab-agent:8644` de `lab-app:3000`: misma imagen `taller` y workspace compartido, incluido `node_modules`, pero paquetes del sistema independientes y perfil privado sólo en el agente. Se conserva la instrucción de detener el túnel anterior y conectar el agente a la red una sola vez. La slide 109 separa modelo, harness, agente, proveedor, canal y entorno.

La slide 110 agrega la instalación CLI de Linux dentro de `lab-agent`, como `node`, con proyecto y perfil escribibles. Enlaza la sección correspondiente de la [guía oficial](https://hermes-agent.nousresearch.com/docs/getting-started/installation#linux--macos--wsl2) y muestra `hermes --version` como comprobación posterior, no como instalador. El wizard sigue en la 111. La slide 199 permite cerrar también a mitad del curso: sólo recursos propios creados, omitir Docker si no se usó, cerrar exposición aunque falle la desactivación del hook, detener `herramientas` y `lab-runner` incluso durante un job, cancelar sólo el run propio y conservar los perfiles privados.

El usuario confirmó **Tektur**, de Google Fonts, para subtítulos, contextos y comentarios en `#FC3CB5`. Los fragmentos inline de código, rutas y URLs conservan Inconsolata. Los 89 bloques de código/diff están en negrita; 34 usan 40 pt reales, incluido `pnpm dev`. El resto usa entre 21 y 39,5 pt, según espacio. Se conservan los colores de sintaxis de los 88 bloques anteriores. La fuente local `slides/source.json` acompaña el orden y las notas de las 200 slides.

El paquete final conserva las identidades de las 198 slides anteriores y las 55 partes originales ajenas a slides/notas/metadatos, incluidos media, temas, masters y layouts. Tiene 860 partes y resuelve sus 1051 relaciones internas. Las 200 notas coinciden con la fuente local: 38 guiones breves y 162 notas vacías; máximo 23 palabras. No se agregaron fuentes ni instrucciones editoriales al guion.

Se renderizaron las 200 slides con LibreOffice 7.4.7.2 en un container descartable, sin red, usando las familias y estilos reales verificados por fontconfig. Se revisaron las diez vistas generales y 14 slides en detalle; las corregidas se volvieron a renderizar. La comparación del texto nativo con el PDF no encontró caracteres faltantes. Las 360 cajas de código y apoyo pasan el control de límites con tolerancia de 2 pt; las 119 cajas anteriores de código, diff, salida y árbol del editor conservan su texto íntegro. El enlace de instalación quedó clickeable y magenta; `pdfinfo -url` confirmó su destino en la slide 110.

Este ensayo prueba el render de LibreOffice, no la importación en PowerPoint o Google Slides. No se repitieron integraciones, logins ni llamadas a modelos. Las páginas e imágenes de Vocs permanecen sin cambios: esta edición corresponde al material proyectado y no altera el contenido técnico de las figuras del curso. Fuentes, PDF, renderer y scripts de comprobación son temporales, fuera del repo; no forman parte de la entrega.

SHA-256 del PPTX final: `c34233ac2a8b262a1714e73a417b5ff8d6c57bd9b78da3d1166ba826d5ccfadf`.


## Decisiones del usuario que deben conservarse

- Público con muy poca experiencia; se requieren nociones de Git, GitHub, programación y conceptos generales de informática, que se retoman durante el recorrido. No hace falta experiencia con automatización o agentes. Pasos que puedan repetirse sin el instructor. Duración flexible de 3 a 6 horas.
- Voz de docente que acompaña la práctica. Explicar para qué hacemos cada paso y cómo leer su resultado, con prosa natural en español rioplatense. Evitar fichas repetidas de "Dónde", "Antes" y "Comprobación", frases telegráficas y muletillas. Ubicación, requisitos, resultados y condiciones para detenerse siguen siendo obligatorios, pero pueden integrarse al relato. Conservar advertencias de seguridad visibles junto a la acción.
- Seis ejercicios: landing y Vercel; Docker y runner; Hermes y Telegram; túnel; webhook sin IA; review solicitada por etiqueta.
- Taller muy introductorio, práctico e improvisado, diseñado por The Red Guild para darse inicialmente en NodoSerrano. Pensado para sumar herramientas y práctica que mejoren las posibilidades de inserción laboral. La portada presenta objetivos generales antes del mapa técnico de capítulos.
- Empezar haciendo: portada, mapa de seis ejercicios y **6 mandamientos**, antes del primer ejercicio. Enseñar Git, virtualización, redes y webhooks justo al necesitarlos.
- App de ejemplo: landing Next.js del HackerSpace de NodoSerrano.org. Hacer build real y deploy de main y development; el código de la landing es secundario al proceso.
- Separar material y app con un `mv`, sin copias con exclusiones, cadenas de guardas ni clon adicional. El destino debe estar libre; si falla un paso o no coincide carpeta/estructura, detenerse antes de inicializar Git.
- Crear el repo por web y enseñar el PAT antes de `gh auth login`, `gh auth status` y push. Seleccionar sólo el repo propio y añadir permisos cuando se necesitan. No usar OAuth amplio como atajo, refrescar scopes de PAT ni reemplazar autenticación heredada de Codespaces.
- Priorizar host y containers. Demo opcional en slides 66–68, después del checkpoint del ejercicio 1; detener Next y Codespace, y volver al host antes de Docker. No depurar Codespaces o Gitpod durante la clase.
- Mantener pasos, capturas reales y diagramas. **Notas del presentador: guion breve, sólo información útil ausente de la slide; vacío cuando no hace falta.** Sin pistas al instructor, relleno, repetición ni listas de fuentes.
- Historial Git con carriles y curvas; usar main y development en el ejercicio. Explicar merge commit, squash y rebase, y mostrar la interfaz real de PR.
- Host, VM y límites de containers explícitos; después leer el Dockerfile antes del build. Imagen `taller`, sin etiqueta fechada. Explicar redes cuando se usan, en el ejercicio 4; conectar el agente existente en el 6.
- Quick Tunnels sin crear una cuenta Cloudflare ni dominio durante la clase. El túnel administrado sólo aparece como ampliación opcional.
- Una imagen de herramientas y procesos fáciles de reconocer. Instancias distintas para runner, agente y app; no compartir el perfil del agente con el runner.
- El instructor instala Hermes en vivo siguiendo su documentación y completa el wizard: OpenRouter/modelo gratuito disponible, luego Telegram. No convertir la instalación de uv u otras dependencias en el tema del taller.
- Receptor preparado, pseudocódigo y gráficos. El alumno puede pedir a Hermes que lo adapte y configure los hooks. No hay un puente Python ni `./lab`.
- No publicar repositorios, findings ni ejecutar servicios pagos sin aprobación. No usar una etiqueta de práctica como autorización para un agente de mantenimiento.
- Resultados verificados y bloqueos se informan aquí. Los slides enseñan; no contienen un reporte público de auditoría.

## Curso Vocs por capítulos

El proyecto de documentación está aislado dentro de `docs/`. Usa Vocs 2.12.0, Waku 1.0.0-rc.4, Vite 8.3.5 y la terna React, React DOM y React Server DOM Webpack 19.3.1, fijados con lockfile propio. Node debe cumplir `^22.15.0 || ^24.0.0 || ^26.0.0`; Node 22.23.4 del taller cumple ese contrato. El starter conserva sus dependencias y lockfile anteriores.

Desde la raíz del material:

```bash
pnpm --dir docs install --frozen-lockfile
pnpm --dir docs dev
pnpm --dir docs build
pnpm --dir docs preview
```

El dev server abre normalmente en `127.0.0.1:5173` y preview en `127.0.0.1:4173`. Estos comandos no van en `lab`. No se configuró un deployment público ni una URL canónica inventada.

### Estructura y mantenimiento

- Hay 111 rutas: 99 del recorrido requerido, 11 opcionales y una de referencias. Incluyen preparación, índices de capítulo y cierre, además de las operaciones.
- Una página representa un resultado comprobable, no una línea de shell. Advertencia, elección, operación peligrosa y comprobación inmediata quedan juntas. Se indican terminal, carpeta, rama y requisitos cuando corresponden.
- La sidebar requerida une preparación, los seis capítulos y cierre. Sus grupos no enlazan fuera de ese recorrido. Opciones y referencias se descubren por top nav y enlaces contextuales.
- Codespaces tiene su propia secuencia de tres páginas. Cada reparación o diagnóstico tiene sidebar independiente y regreso explícito. No incluirlos en la sidebar principal: Vocs los convertiría en Next obligatorio aunque estuvieran colapsados.
- Cada archivo MDX nuevo necesita su entrada en `vocs.config.ts`. No agregar otro router, manifest de navegación paralelo, store de progreso ni guía larga en Markdown.
- Las capturas se importan desde `docs/assets/` mediante MDX. Nunca usar todo `docs/` como directorio público: contiene este registro y un PDF local.
- `renderStrategy: 'full-static'`, enlaces muertos estrictos, búsqueda local y MCP desactivado. Los controles Ask AI y feedback están ocultos en todas las páginas. No hacen falta claves ni servicios de modelos para leer o construir el curso.
- Los outputs, caches y dependencias no se versionan. El ensayo de esta migración instaló y construyó fuera del repo, sin recrear `hackerspace-site/node_modules`.

### Deployment manual desde Vercel

El usuario conectará el repositorio desde la web de Vercel. Se retiraron los archivos de configuración del intento por CLI y no se creó ningún proyecto ni deployment remoto desde el agente. El repositorio sigue siendo privado; no se autorizaron cambios de plan ni consumos pagos.

La [integración Git de Vercel](https://vercel.com/docs/git#using-hobby-teams) no permite repositorios privados de organizaciones en Hobby. Este repo pertenece a `theredguild`: usar un equipo Pro existente si corresponde. Si el panel pide pagar, detenerse; no cambiar la visibilidad del repo ni contratar un plan como atajo.

Crear un proyecto exclusivo para el curso con estos valores:

| Ajuste | Valor |
| --- | --- |
| Root Directory | `docs` |
| Framework Preset | `Other` |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm build` |
| Output Directory | `dist/public` |
| Environment Variable | `ENABLE_EXPERIMENTAL_COREPACK=1` para respetar `pnpm@10.20.0` |

La integración Git concede a Vercel acceso a las fuentes del repositorio privado. Root Directory no es un filtro de acceso al repo y `.vercelignore` no protege una importación desde Git. No publicar `docs/` como carpeta estática: contiene este registro y el PDF local.

Vocs detecta `VERCEL=1` y genera su Build Output API en `.vercel/output/`. El build aislado comprobado con Node 22.23.4 y pnpm 10.20.0 produjo `config.json`, 631 archivos estáticos y ninguna carpeta `functions`. Las 111 páginas respondieron con sus H1 correctos; instructor, PDF, launcher, package, PPTX y endpoints API devolvieron `404` en el servidor estático local. Chromium comprobó búsqueda y recarga de una ruta profunda. Se retiró ese temporal después del ensayo. Esto no certifica un deployment remoto.

### Cobertura de la migración

La fuente escrita anterior se conserva en Git en `33c045c:docs/guia.md`; sus 66 bloques Bash contienen 126 invocaciones, todas con correspondencia en las páginas nuevas. Se conservaron sus 20 capturas distintas. El inventario del PPTX asigna sus 198 slides a páginas; el curso no depende de `slides/source.json`, que sigue siendo autoría local.

| Fuente previa | Páginas del curso |
| --- | --- |
| Introducción y convenciones de comandos | `/`, `/preparacion/requisitos`, `/preparacion/comandos` |
| Ejercicio 1, secciones 1.1–1.8 | `/proyecto` y sus 25 operaciones |
| Reparación de artefactos y alternativa de edición web | `/opcional/reparar-artefactos`, `/opcional/editar-en-github` |
| Demo 1.9 de Codespaces | `/opcional/codespaces` y sus dos páginas siguientes |
| Ejercicio 2, secciones 2.1–2.6 | `/docker-runner` y sus 17 operaciones, con tres registros efímeros distintos |
| Ejercicio 3, secciones 3.1–3.3 | `/hermes-telegram` y sus nueve operaciones |
| Ejercicio 4, secciones 4.1–4.5 | `/tunel` y sus 11 operaciones |
| Ejercicio 5, secciones 5.1–5.7 | `/webhook` y sus nueve operaciones |
| Ejercicio 6, secciones 6.1–6.8 | `/review` y sus 15 operaciones |
| Cierre y fuentes para profundizar | `/cierre`, sus tres operaciones y `/referencias` |
| Tablas de diagnóstico y túnel administrado | Páginas independientes en `/opcional` |

Se exportaron 22 diagramas del PPTX a `docs/assets/course-*.png`: seis de Git/deploys, cuatro de Docker/runner, uno de Telegram, cinco de URL/red/túnel, dos de webhook/HMAC, tres de filtros/review y el mapa final. Son figuras del taller, no capturas de integraciones reales. Se renderizó el PPTX con sus fuentes en una carpeta temporal y se recortó la figura sin modificar la presentación. Si cambia una figura, exportar esa imagen de nuevo y comprobar su página; no regenerar ni sustituir el PPTX como efecto secundario de editar Vocs.

La migración también incorporó comandos que estaban concretos sólo en slides: publicación del error de tipos, PR que provoca un evento y commit/push de la corrección lógica. Mantiene corrección → checks → push → etiqueta nueva → comparación del SHA.

### Verificación de Vocs

La instalación congelada pasó con pnpm 10.20.0. El build inicial pasó en Node 26.10.0; el build final, en Node 22.23.4 de `taller`, sin red. Generó las 111 rutas y 229 archivos de SSG, con búsqueda local y validación estricta de enlaces. La primera compilación detectó la anotación no soportada `gitignore`; el fragmento conserva sus reglas como texto monoespaciado, sin desactivar validaciones. No se aprobaron indiscriminadamente scripts de dependencias.

El `/tmp` del host alcanzó su cuota de usuario durante la preparación. Se movieron sólo los temporales propios a otro filesystem de scratch; no se borraron recursos ajenos. PDF y fuentes usados para exportar diagramas son temporales, no entregables.

- El dev server nativo respondió `200` en `/proyecto/mover-app`, con el H1 exacto de su fuente. Preview se ejecutó en loopback sobre el build de producción.
- El crawl HTTP comprobó las 111 páginas contra su H1 fuente y cargó sus 50 imágenes distintas. Los 125 bloques Bash pasan `bash -n`; eso comprueba sintaxis, no ejecuta ejercicios ni valida integraciones.
- Chromium comprobó Next en los siete límites entre preparación, capítulos y cierre; Previous entre capítulos; las tres páginas de Codespaces sin salto accidental al curso; una reparación aislada; regreso desde menú móvil; búsqueda local por `firma` y apertura de su resultado. La última página no tiene Next.
- Se observaron el diagrama de host/VM/container y la captura de Vercel en GitHub. A 390 px, el documento conserva 390 px y los comandos largos desplazan sólo su bloque.
- La prueba detectó que Vocs oculta Copy code cuando no hay hover. `_root.css` revela los controles nativos en ese caso y al recibir `:focus-visible`. Tras reconstruir, todos mostraron opacidad `1`; Tab mantuvo el contorno visible de 2 px.
- Click y Enter cambiaron el clipboard nativo desde dos valores centinela a `docker build -t taller .` y `id -u` / `id -g`, respectivamente. El navegador de prueba necesitó permisos explícitos; su helper devolvió una vez un shim obsoleto y produjo antes `NotAllowedError: Failed to execute 'writeText' on 'Clipboard': Write permission denied.` La comprobación final usó el clipboard real y esperó el resultado asíncrono, no sólo el aviso Copied.
- El output estático publicable es **`docs/dist/public/`**, no `docs/` ni `docs/dist/server/`. No contiene el registro del instructor, el PDF local ni endpoints API. Con esos archivos privados presentes como input fuera de `src/pages`, `/INSTRUCTOR.md`, `/consulta.pdf` y `/guia.md` devolvieron `404`; tampoco aparecieron sus marcadores privados en HTML, Markdown o índices.
- El preview nativo no equivale a un host de archivos estáticos: conserva rutas del framework. `GET /api/mcp` respondió `404`, `/api/og` devolvió una imagen y `/api/feedback` respondió `500`, aunque no hay controles de feedback en las páginas. No exponer ese servidor como deployment público suponiendo que carece de APIs.
- El SHA-256 del PPTX se mantuvo en `2039c67296a272bdcecb2ebc8b4b80eb272e527efb6594c1224cdd58959ef1b8`. No se modificó el starter ni se repitieron logins, despliegues, hooks, mensajes o llamadas a modelos reales durante esta migración.

## Verificaciones anteriores de la app y del PPTX

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

Los comandos `cp docs/snippets/checks.yml ...` y las instrucciones de Hermes sobre `docs/snippets/hermes-webhook.yaml` siguen siendo relativos a la raíz del repo del participante. El curso muestra esas rutas locales y no depende de que sigan dentro del checkout del material después del movimiento. `next dev` puede generar instrucciones propias de Next en el proyecto; no se copia allí este registro ni el `AGENTS.md` del mantenedor.

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

Repetir el comando de `hermes-telegram/crear-agente` con `-v hermes-home-migrado:/home/node/.hermes` en lugar de `hermes-home`, comprobar escritura y verificar o reinstalar Hermes siguiendo `hermes-telegram/instalar-hermes`, conservando el perfil. La instalación, sus entornos y el launcher pueden depender de la capa anterior. El login de `gh` está fuera del volumen del perfil: iniciar sesión de nuevo mediante `webhook/autenticar-agente`. El container anterior conserva sus archivos y el volumen original queda intacto para recuperación. No arrancar simultáneamente los dos gateways.

Para reemplazar `lab-app`, conservar también la instancia anterior con otro nombre y repetir `tunel/crear-app` con la imagen nueva. El bind mount conserva el proyecto y `.env.local`; no copiar credenciales al runner. Revisar permisos del proyecto antes de instalar dependencias, sin aplicar `chmod 777`.

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

3. Mantener el recorrido completo en host + containers. La demo opcional está en `docs/src/pages/opcional/codespaces/` y slides 66–68, después de push, deployments y PR. El usuario cerró la investigación remota; no reintentar ni crear otra instancia sin nuevo pedido.

4. Con autorización para un repo de ensayo, seguir el curso Vocs desde Preparación: clon del material, mover a `lab`, crear repo vacío por web, PAT seleccionado, login/status, primer push, `.gitignore`, install/build, Production, Preview, PR, review y nuevo Production. No agregar un segundo clon.

5. Ejecutar los tres checks con runners efímeros nuevos. Guardar los run IDs, SHA y mensajes reales. No abrir el runner a PRs de terceros.

6. Instalar Hermes según la documentación vigente y completar el wizard en lab-agent. Verificar chat, Telegram con allowlist, persistencia del perfil y login de gh propio. Elegir un modelo gratuito que realmente admita las herramientas y contexto utilizados; no pasar automáticamente a pago.

7. Seguir las pruebas local/interna/pública del túnel, caída y recuperación. Después recibir un PR real en Next, verificar firma inválida, `received` y `duplicate`.

8. Fusionar la plantilla `hackerspace-site/docs/snippets/hermes-webhook.yaml` del material, que en el repo del participante queda como `docs/snippets/hermes-webhook.yaml`. Comprobarla contra la versión instalada y habilitar Webhooks. Confirmar el caso negativo de etiqueta sin llamada al modelo, el caso positivo con comentario, el control del SHA y una segunda revisión tras la corrección. Si `github_comment` requiere autenticación adicional en esa versión, resolverlo con el flujo nativo y actualizar guía y slides juntos.

9. Importar la presentación en Google Slides. Revisar código, capturas, gráficos y las 200 notas, incluidas vacías; recorrer las 200 slides. Comprobar posibles sustituciones de Tektur e Inconsolata; conservar comentarios magenta y comandos monoespaciados en negrita.

10. Actualizar esta tabla con comandos, versiones, IDs y evidencias reales. Capturar las interfaces autorizadas del propio ensayo. Nunca capturar credenciales. Mantener los pendientes fuera de los slides del público.

## Editar y regenerar la presentación

Para cambios manuales, `slides/workshop.pptx` contiene texto, código con runs de color, tablas, diagramas y notas. Los comandos usan Inconsolata en negrita; títulos y prosa mantienen Unbounded y Poppins. Subtítulos, contextos y comentarios usan Tektur en `#FC3CB5`, salvo sus fragmentos inline de código. Después de importar en Google Slides, comprobar posibles sustituciones; en PowerPoint de escritorio las fuentes deben estar instaladas. No se incrustan ni se entregan archivos tipográficos con el PPTX.

En el entorno local se conserva la fuente editable adicional `slides/source.json`: orden, texto, comandos, salidas ilustrativas, notas y enlaces oficiales por diapositiva. Los estilos están en `theme.mjs`, `layouts.mjs`, `base.mjs` y `metrics.json`. Estos archivos de autoría no se publican en el repo; el PPTX es la presentación versionada. Las capturas compartidas están en `docs/assets/`.

Si se dispone de esos archivos locales, hay un generador opcional con una dependencia pública fijada, PptxGenJS 4.0.1:

```bash
cd slides
npm install
npm run build
```

El generador escribe `workshop-generated.pptx`, sin sobrescribir la entrega. Su ensayo anterior exportó 178 slides; no se repitió para la versión actual de 200. No reproduce todas las ediciones nativas, incluido el panel de instalación, sus enlaces y la tipografía final. **La salida alternativa no debe sustituir al PPTX aprobado sin una revisión completa.** La edición actual actualizó selectivamente el OOXML y renderizó la presentación real; el generador opcional no forma parte de los comandos del participante.

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
