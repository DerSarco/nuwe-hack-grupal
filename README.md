# Documentación técnica

Este es el resultado de levantarse a las 3:30 am.

me habria gustado darle mas cariño a la aplicación, pero no es mi tecnologia principal.

### EQUIPO

- Der Sarco#0256
- Eduardo Avalos#3557
- Schwager#4934
- Caro Castaño#2482

las risas no faltaron
###  Instalación

### Instalación

- Clonar el repositorio
- de preferencia iniciarlo con {yarn install}
- una vez terminado, iniciar el app con {yarn start}
- disfrutar

### DEMO

<https://xenodochial-bell-c9d705.netlify.app//>

### Consumo de API

API proporcionada por: EDAUAVPA

<https://grupal-github-repo-hackathon.herokuapp.com/>

### Componentes de la aplicación

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
