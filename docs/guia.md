# Abrir el curso en Vocs

La guía del participante está organizada por capítulos y operaciones en [`src/pages/`](src/pages/). Este archivo sólo indica cómo abrirla; no mantiene otra copia del curso.

Desde la raíz del material, con Node 22.23.4 y pnpm 10.20.0:

```bash
pnpm --dir docs install --frozen-lockfile
pnpm --dir docs dev
```

Abrí la URL de Vocs, normalmente `http://127.0.0.1:5173`. Empezá por Preparación y usá **Next** para seguir el recorrido requerido. Opciones y diagnósticos tienen navegación separada y enlaces de regreso.

Estos comandos abren la documentación. Los ejercicios de la app se ejecutan en la carpeta externa `lab`, como indica cada página.

Presentación: [`../slides/workshop.pptx`](../slides/workshop.pptx). Fuentes y verificaciones del instructor: [`INSTRUCTOR.md`](INSTRUCTOR.md). No se publicó un sitio externo ni se modificó el PPTX.

