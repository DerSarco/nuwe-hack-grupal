# Documentación técnica

Este es el resultado de levantarse a las 3:30 am.

me habria gustado darle mas cariño a la aplicación, pero no es mi tecnologia principal.
###  Instalación


- Clonar el repositorio
- de preferencia iniciarlo con {yarn install}
- una vez terminado, iniciar el app con {yarn start}
- disfrutar


### DEMO

https://brave-brown-cdb6cc.netlify.app/

### Componentes de la aplicación.

la aplicación comprende dos componentes con sus elementos, definidos en distintas carpetas.

la estructura raiz es principalmente la siguiente:

│   App.css
│   index.css
│   index.js
│   logo.svg
│   setupTests.js
│
└───components
    │   App.jsx
    │
    ├───functions
    │       fetch.js
    │
    ├───objects
    │   ├───login
    │   │   │   LoginComponent.jsx
    │   │   │   loginForm.jsx
    │   │   │   registerForm.jsx
    │   │   │
    │   │   └───styles
    │   │           LoginComponent.css
    │   │           loginForm.css
    │   │           registerForm.css
    │   │
    │   └───UserSearch
    │       │   AlertSnack.jsx
    │       │   Login.jsx
    │       │   SearchForm.jsx
    │       │   UserCard.jsx
    │       │   UserGrid.jsx
    │       │   UserSearchInput.jsx
    │       │
    │       └───styles
    │               SearchForm.css
    │               UserSearchInput.css
    │
    └───pages
            Login.jsx
            UserSearch.jsx
            NotFound.jsx
