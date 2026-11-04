# De un commit a trabajo autónomo

Curso en Vocs sobre la landing Next.js del HackerSpace de Nodo Serrano. Preparación, seis capítulos y cierre, con una operación comprobable por página. La aplicación inicial sigue en [`hackerspace-site/`](hackerspace-site/); el curso vive en [`docs/src/pages/`](docs/src/pages/).

## Abrir el curso

Desde la raíz del material, con Node 22.23.4 y pnpm 10.20.0:

```bash
pnpm --dir docs install --frozen-lockfile
pnpm --dir docs dev
```

Abrí la dirección que imprima Vocs, normalmente `http://127.0.0.1:5173`. Seguí **Next** para recorrer las páginas. Codespaces, reparaciones y diagnósticos quedan en Opciones, con enlaces de regreso.

Para construir y revisar el sitio:

```bash
pnpm --dir docs build
pnpm --dir docs preview
```

No se configuró un deployment público. Vocs genera el sitio estático; no requiere modelos, claves de API ni servicios pagos para leerlo. Su proyecto y lockfile son independientes de la app.

## Material

| Material | Ubicación |
| --- | --- |
| Curso del participante | [docs/src/pages/](docs/src/pages/) |
| Iniciador breve del curso | [docs/guia.md](docs/guia.md) |
| Aplicación para mover a `lab` | [hackerspace-site/](hackerspace-site/) |
| Presentación única y notas nativas | [slides/workshop.pptx](slides/workshop.pptx) |
| Fuentes, verificaciones y continuación del instructor | [docs/INSTRUCTOR.md](docs/INSTRUCTOR.md) |

El material sigue siendo privado: resolvé acceso de lectura antes de clonarlo. El PAT del sitio no lo concede. El curso indica cuándo mover la app a `lab`, crear tu repo vacío, configurar el token y publicar. Después seguís en `lab`, sin otro clon.

Los comandos del sitio Vocs corren en `docs/` del material. Los comandos de la app y su Dockerfile corren en `lab`. No mezcles ambos proyectos ni copies la guía dentro de la app.

El PPTX no cambió con esta migración. Para Google Slides, importalo y revisá notas y posibles sustituciones de fuentes. Su código editable usa Inconsolata. Las notas son breves y pueden estar vacías; fuentes y evidencia quedan fuera del guion hablado.
