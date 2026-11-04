import { defineConfig } from 'vocs/config'

export default defineConfig({
  "title": "De un commit a trabajo autónomo",
  "description": "Un recorrido introductorio para automatizar tareas, delegarle trabajo a un agente y comprobar resultados.",
  "titleTemplate": "%s · De un commit a trabajo autónomo",
  "iconUrl": "/lotus.svg",
  "renderStrategy": "full-static",
  "checkDeadlinks": true,
  "sitemap": false,
  "mcp": {
    "enabled": false
  },
  "head": {
    "meta": {
      "ogImage": false,
      "twitterImage": false
    }
  },
  "accentColor": "light-dark(#b71678, #fc3cb5)",
  "topNav": [
    {
      "text": "Curso",
      "link": "/"
    },
    {
      "text": "Presentación",
      "link": "https://docs.google.com/presentation/d/1XrsQfV1sIuqsEnxkxOn_ZRobF4mDy68c/edit?usp=sharing&ouid=112113536335253382752&rtpof=true&sd=true"
    },
    {
      "text": "Opciones",
      "link": "/opcional"
    },
    {
      "text": "Referencias",
      "link": "/referencias"
    }
  ],
  "sidebar": {
    "/": [
      {
        "text": "Recorrido del curso",
        "link": "/"
      },
      {
        "text": "Preparación",
        "collapsed": false,
        "items": [
          {
            "text": "Preparar el equipo",
            "link": "/preparacion/requisitos"
          },
          {
            "text": "Leer comandos y reconocer la terminal",
            "link": "/preparacion/comandos"
          }
        ]
      },
      {
        "text": "1. Proyecto y deploy",
        "collapsed": true,
        "items": [
          {
            "text": "1. Proyecto y deploy",
            "link": "/proyecto"
          },
          {
            "text": "1.1 Clonar el material",
            "link": "/proyecto/clonar-material"
          },
          {
            "text": "1.2 Mover y verificar la app",
            "link": "/proyecto/mover-app"
          },
          {
            "text": "1.3 Crear un repositorio vacío",
            "link": "/proyecto/crear-repositorio"
          },
          {
            "text": "1.4 Crear un token limitado",
            "link": "/proyecto/crear-token"
          },
          {
            "text": "1.5 Autenticar GitHub CLI",
            "link": "/proyecto/autenticar-cli"
          },
          {
            "text": "1.6 Iniciar Git y revisar identidad",
            "link": "/proyecto/iniciar-git"
          },
          {
            "text": "1.7 Crear el primer commit",
            "link": "/proyecto/primer-commit"
          },
          {
            "text": "1.8 Publicar main en GitHub",
            "link": "/proyecto/publicar-repositorio"
          },
          {
            "text": "1.9 Leer el gitignore incluido",
            "link": "/proyecto/leer-gitignore"
          },
          {
            "text": "1.10 Instalar las dependencias",
            "link": "/proyecto/instalar-dependencias"
          },
          {
            "text": "1.11 Construir la app",
            "link": "/proyecto/construir-app"
          },
          {
            "text": "1.12 Ejecutar y reconocer la landing",
            "link": "/proyecto/ejecutar-app"
          },
          {
            "text": "1.13 Importar el repo en Vercel",
            "link": "/proyecto/importar-vercel"
          },
          {
            "text": "1.14 Desplegar Production desde main",
            "link": "/proyecto/desplegar-production"
          },
          {
            "text": "1.15 Comprobar el primer Production",
            "link": "/proyecto/comprobar-production"
          },
          {
            "text": "1.16 Crear la rama development",
            "link": "/proyecto/crear-development"
          },
          {
            "text": "1.17 Editar el título de la portada",
            "link": "/proyecto/editar-portada"
          },
          {
            "text": "1.18 Confirmar el cambio de portada",
            "link": "/proyecto/confirmar-cambio"
          },
          {
            "text": "1.19 Publicar development",
            "link": "/proyecto/publicar-development"
          },
          {
            "text": "1.20 Comparar Preview y Production",
            "link": "/proyecto/comparar-preview"
          },
          {
            "text": "1.21 Crear el pull request",
            "link": "/proyecto/crear-pr"
          },
          {
            "text": "1.22 Corroborar Preview desde el PR",
            "link": "/proyecto/corroborar-preview"
          },
          {
            "text": "1.23 Revisar el cambio propuesto",
            "link": "/proyecto/revisar-pr"
          },
          {
            "text": "1.24 Integrar con un merge commit",
            "link": "/proyecto/integrar-pr"
          },
          {
            "text": "1.25 Comprobar Production después del merge",
            "link": "/proyecto/comprobar-merge"
          }
        ]
      },
      {
        "text": "2. Docker y runner",
        "collapsed": true,
        "items": [
          {
            "text": "2. Docker y runner",
            "link": "/docker-runner"
          },
          {
            "text": "2.1 Verificar cliente y daemon",
            "link": "/docker-runner/verificar-docker"
          },
          {
            "text": "2.2 Leer la receta real",
            "link": "/docker-runner/leer-dockerfile"
          },
          {
            "text": "2.3 Elegir UID y construir la imagen",
            "link": "/docker-runner/construir-imagen"
          },
          {
            "text": "2.4 Explorar una instancia de herramientas",
            "link": "/docker-runner/explorar-container"
          },
          {
            "text": "2.5 Leer workflow, job y steps",
            "link": "/docker-runner/leer-workflow"
          },
          {
            "text": "2.6 Autorizar la operación elegida",
            "link": "/docker-runner/permisos-workflow"
          },
          {
            "text": "2.7 Publicar el workflow en main",
            "link": "/docker-runner/publicar-workflow"
          },
          {
            "text": "2.8 Sincronizar main y development",
            "link": "/docker-runner/sincronizar-ramas"
          },
          {
            "text": "2.9 Registrar el runner inicial",
            "link": "/docker-runner/registrar-runner"
          },
          {
            "text": "2.10 Iniciar el check inicial",
            "link": "/docker-runner/ejecutar-check"
          },
          {
            "text": "2.11 Leer el resultado inicial",
            "link": "/docker-runner/leer-check"
          },
          {
            "text": "2.12 Publicar un error de tipos controlado",
            "link": "/docker-runner/introducir-error"
          },
          {
            "text": "2.13 Registrar el runner para el error",
            "link": "/docker-runner/registrar-runner-error"
          },
          {
            "text": "2.14 Ejecutar y comprobar la falla",
            "link": "/docker-runner/comprobar-fallo"
          },
          {
            "text": "2.15 Publicar la corrección del tipo",
            "link": "/docker-runner/corregir-error"
          },
          {
            "text": "2.16 Registrar el runner para la corrección",
            "link": "/docker-runner/registrar-runner-corregido"
          },
          {
            "text": "2.17 Comprobar la corrección y cerrar el runner",
            "link": "/docker-runner/comprobar-correccion"
          }
        ]
      },
      {
        "text": "3. Hermes y Telegram",
        "collapsed": true,
        "items": [
          {
            "text": "3. Hermes y Telegram",
            "link": "/hermes-telegram"
          },
          {
            "text": "3.1 Crear la instancia del agente",
            "link": "/hermes-telegram/crear-agente"
          },
          {
            "text": "3.2 Comprobar permisos antes de credenciales",
            "link": "/hermes-telegram/comprobar-permisos"
          },
          {
            "text": "3.3 Instalar Hermes con el instructor",
            "link": "/hermes-telegram/instalar-hermes"
          },
          {
            "text": "3.4 Configurar proveedor y modelo",
            "link": "/hermes-telegram/configurar-modelo"
          },
          {
            "text": "3.5 Conversar desde la terminal",
            "link": "/hermes-telegram/conversar-terminal"
          },
          {
            "text": "3.6 Crear el bot de Telegram",
            "link": "/hermes-telegram/crear-bot"
          },
          {
            "text": "3.7 Configurar el canal Telegram",
            "link": "/hermes-telegram/configurar-telegram"
          },
          {
            "text": "3.8 Mantener un gateway activo",
            "link": "/hermes-telegram/iniciar-gateway"
          },
          {
            "text": "3.9 Comprobar un mensaje en Telegram",
            "link": "/hermes-telegram/comprobar-mensaje"
          }
        ]
      },
      {
        "text": "4. El túnel",
        "collapsed": true,
        "items": [
          {
            "text": "4. El túnel",
            "link": "/tunel"
          },
          {
            "text": "4.1 Crear la red compartida",
            "link": "/tunel/crear-red"
          },
          {
            "text": "4.2 Crear el container de la aplicación",
            "link": "/tunel/crear-app"
          },
          {
            "text": "4.3 Instalar dependencias en lab-app",
            "link": "/tunel/instalar-dependencias"
          },
          {
            "text": "4.4 Construir la aplicación de origen",
            "link": "/tunel/construir-app"
          },
          {
            "text": "4.5 Iniciar el origen HTTP",
            "link": "/tunel/iniciar-app"
          },
          {
            "text": "4.6 Consultar health desde el host",
            "link": "/tunel/consultar-host"
          },
          {
            "text": "4.7 Consultar health desde la red interna",
            "link": "/tunel/consultar-red"
          },
          {
            "text": "4.8 Abrir el Quick Tunnel",
            "link": "/tunel/abrir-tunel"
          },
          {
            "text": "4.9 Consultar health por la URL pública",
            "link": "/tunel/consultar-publico"
          },
          {
            "text": "4.10 Interrumpir el origen",
            "link": "/tunel/interrumpir-origen"
          },
          {
            "text": "4.11 Recuperar el origen",
            "link": "/tunel/recuperar-origen"
          }
        ]
      },
      {
        "text": "5. El webhook",
        "collapsed": true,
        "items": [
          {
            "text": "5. El webhook",
            "link": "/webhook"
          },
          {
            "text": "5.1 Autenticar GitHub dentro del agente",
            "link": "/webhook/autenticar-agente"
          },
          {
            "text": "5.2 Preparar el receptor firmado",
            "link": "/webhook/preparar-receptor"
          },
          {
            "text": "5.3 Crear un único webhook de Next",
            "link": "/webhook/crear-hook"
          },
          {
            "text": "5.4 Reiniciar Next con la configuración nueva",
            "link": "/webhook/reiniciar-app"
          },
          {
            "text": "5.5 Rechazar una request sin firma",
            "link": "/webhook/rechazar-sin-firma"
          },
          {
            "text": "5.6 Generar un evento real de PR",
            "link": "/webhook/generar-evento"
          },
          {
            "text": "5.7 Correlacionar la entrega con los logs",
            "link": "/webhook/comprobar-entrega"
          },
          {
            "text": "5.8 Repetir la misma entrega",
            "link": "/webhook/repetir-entrega"
          },
          {
            "text": "5.9 Desactivar sólo el hook de Next",
            "link": "/webhook/desactivar-hook"
          }
        ]
      },
      {
        "text": "6. La review",
        "collapsed": true,
        "items": [
          {
            "text": "6. La review",
            "link": "/review"
          },
          {
            "text": "6.1 Fusionar la ruta nativa en el perfil",
            "link": "/review/configurar-ruta"
          },
          {
            "text": "6.2 Iniciar una única instancia del gateway",
            "link": "/review/iniciar-listener"
          },
          {
            "text": "6.3 Comprobar la salud del listener",
            "link": "/review/comprobar-listener"
          },
          {
            "text": "6.4 Conectar el agente existente a la red",
            "link": "/review/conectar-agente"
          },
          {
            "text": "6.5 Cambiar el túnel hacia Hermes",
            "link": "/review/cambiar-tunel"
          },
          {
            "text": "6.6 Crear las etiquetas del experimento",
            "link": "/review/crear-etiquetas"
          },
          {
            "text": "6.7 Crear el hook del gateway",
            "link": "/review/crear-hook"
          },
          {
            "text": "6.8 Introducir un error lógico visible",
            "link": "/review/introducir-error"
          },
          {
            "text": "6.9 Comprobar primero el filtro negativo",
            "link": "/review/comprobar-filtro"
          },
          {
            "text": "6.10 Solicitar la review con una etiqueta nueva",
            "link": "/review/solicitar-review"
          },
          {
            "text": "6.11 Leer y contrastar la review",
            "link": "/review/leer-review"
          },
          {
            "text": "6.12 Corregir y comprobar el cálculo",
            "link": "/review/corregir-error"
          },
          {
            "text": "6.13 Publicar la corrección verificada",
            "link": "/review/publicar-correccion"
          },
          {
            "text": "6.14 Solicitar review del SHA corregido",
            "link": "/review/solicitar-nueva-review"
          },
          {
            "text": "6.15 Integrar con decisión humana y comprobar Production",
            "link": "/review/integrar-correccion"
          }
        ]
      },
      {
        "text": "Cierre",
        "collapsed": true,
        "items": [
          {
            "text": "Cerrar la práctica",
            "link": "/cierre"
          },
          {
            "text": "Desactivar los hooks de práctica",
            "link": "/cierre/desactivar-hooks"
          },
          {
            "text": "Detener los procesos de práctica",
            "link": "/cierre/detener-procesos"
          },
          {
            "text": "Revocar los tokens dedicados",
            "link": "/cierre/revocar-tokens"
          }
        ]
      }
    ],
    "/opcional": [
      {
        "text": "Opciones y diagnósticos",
        "link": "/opcional"
      }
    ],
    "/referencias": [
      {
        "text": "Referencias",
        "link": "/referencias"
      }
    ],
    "/opcional/reparar-artefactos": [
      {
        "text": "Dejar de seguir artefactos generados",
        "link": "/opcional/reparar-artefactos"
      }
    ],
    "/opcional/editar-en-github": [
      {
        "text": "Hacer el cambio desde GitHub",
        "link": "/opcional/editar-en-github"
      }
    ],
    "/opcional/diagnostico-vercel": [
      {
        "text": "Encontrar dónde falló el deployment",
        "link": "/opcional/diagnostico-vercel"
      }
    ],
    "/opcional/diagnostico-hermes": [
      {
        "text": "Diagnóstico de Hermes y Telegram",
        "link": "/opcional/diagnostico-hermes"
      }
    ],
    "/opcional/diagnostico-tunel": [
      {
        "text": "Diagnóstico del túnel por capas",
        "link": "/opcional/diagnostico-tunel"
      }
    ],
    "/opcional/diagnostico-review": [
      {
        "text": "Diagnosticar una review por última evidencia",
        "link": "/opcional/diagnostico-review"
      }
    ],
    "/opcional/tunel-administrado": [
      {
        "text": "Referencia de túneles administrados",
        "link": "/opcional/tunel-administrado"
      }
    ],
    "/opcional/codespaces": [
      {
        "text": "Abrir la demo opcional de Codespaces",
        "link": "/opcional/codespaces"
      },
      {
        "text": "Ver la landing en el Codespace",
        "link": "/opcional/codespaces/ejecutar-landing"
      },
      {
        "text": "Detener la demo y volver al host",
        "link": "/opcional/codespaces/volver-host"
      }
    ]
  }
})
