# Complexud Cms Server

Servidor de gesti贸n de contenido del grupo complejidad de la Universidad Distrital Francisco Jos茅 de Caldas.

## Comenzando 馃殌

Para obtener una copia del proyecto basta con descargar los archivos comprimidos (_zip_) o clonar el repositorio mediantemediante:

```bash
git clone https://github.com/complexUD/complexud-cms-server.git
```

### Pre-requisitos 馃搵

Para correr el proyecto es necesario tener instalado [nodejs v14](https://nodejs.org/es/download/) y npm (_viene al instalar nodejs_) en su m谩quina

Tambi茅n es necesario un archivo llamado **".env"** en la raiz del proyecto con las variables de entorno secretas necesarias para establecer la conexi贸n con base datos y el repositorio de imagenes.

### Instalaci贸n 馃敡

Una vez instalado nodejs se debe situar en la carpeta del proyecto y ejecutar los siguientes comandos (_uno a la vez_):

```bash
npm install
npm run build
npm start
```

Si se desea levantar el servidor en modo desarrollo para realizar modificaciones en el c贸digo entonces ejecute:

```bash
npm run develop
```

## Despliegue 馃摝

Cualquier modificaci贸n que se realice en el c贸digo que se suba o se mezcle con la rama **master** har谩 que se despliegue autom谩ticamente el servidor en [heroku](https://dashboard.heroku.com/appshttps://dashboard.heroku.com/apps)

## Construido con 馃洜锔?

- [Strapi](https://strapi.io/) - CMS sin cabeza para la gesti贸n de los datos e imagenes del grupo.
- [React](https://es.reactjs.org/) - Librer铆a para la construcci贸n de la interfaz de usuario

## Guia de Uso 馃摉

Puedes encontrar toda la informaci贸n sobre c贸mo utilizar este proyecto en nuestra [Wiki](https://github.com/complexUD/complexud-cms-server/wiki), Adicionalmente puedes encontrar m谩s informaci贸n sobre Strapi en su [guia de usuario](https://strapi.io/documentation/user-docs/latest/getting-started/introduction.html)

## Versionado 馃搶

Usamos versionamiento basado en la api, si se realizan cambios en el api del servidor se generar谩 una nueva versi贸n mayor, mientras que cualquier correcci贸n de errores agregar谩 una versi贸n menor. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/complexUD/complexud-cms-server/tags).

## Autores 鉁掞笍

- **Edison Pe帽uela** - _Trabajo Inicial y Personalizaci贸n_ - [edisonpem](https://github.com/edisonpem)
- **Tatiana Velandia** - _Descripci贸n de Datos y Relaciones_ - [tayay](https://github.com/tatyay)
