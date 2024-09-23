# Proyecto: OptiRuta - Gestión de Rutas Inteligentes

## Descripción
OptiRuta es una aplicación web diseñada para gestionar rutas de manera eficiente. Incluye características como autenticación de usuario mediante OAuth, visualización de rutas interactivas en un mapa, y panel de administración con funcionalidades para gestionar usuarios y rutas.

## Requisitos del sistema
- **Sistema Operativo**: Linux (Ubuntu recomendado)
- **Servidor Web**: Apache2
- **Framework Frontend**: React con Vue.js como opción adicional
- **Requisitos de Hardware**:
  - Procesador: Dual Core 2 GHz o superior
  - Memoria: 4 GB RAM o más
  - Espacio en Disco: 25 GB libres

## Tecnologías utilizadas
- **React**: Para la construcción de interfaces.
- **Firebase**: Autenticación de usuarios vía OAuth.
- **Leaflet**: Para la visualización de mapas interactivos.
- **Axios**: Manejo de solicitudes HTTP para conectarse con APIs.
- **Redux (opcional)**: Gestión del estado global.
- **Formik + Yup**: Validación de formularios.
- **Bootstrap o Material UI**: Para estilos de UI y componentes.
- **Jest**: Pruebas unitarias.
- **React Toastify**: Para notificaciones.

## Instalación

### Clonar el repositorio
```bash
git clone https://github.com/tu_usuario/optiRuta.git
cd optiRuta
```

### Instalar dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
```bash
npm install
```

### Dependencias principales:
- React, React Router, Axios
- Firebase para la autenticación (OAuth)
- Leaflet para la gestión de mapas interactivos
- Formik y Yup para la validación de formularios
- Material UI o Bootstrap para el diseño

```bash
npm install react react-dom react-router-dom firebase axios leaflet react-leaflet formik yup bootstrap @mui/material @emotion/react @emotion/styled react-icons jest @testing-library/react react-toastify
```

### Iniciar el proyecto en modo desarrollo
Para ejecutar la aplicación en tu entorno local:
```bash
npm start
```
La app estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

```bash
src/
├── components/            # Componentes principales de la app
├── styles/                # Archivos CSS organizados en carpetas
│   ├── base/              # Reset de estilos y variables globales
│   ├── layout/            # Estilos de layout (header, footer, sidebar)
│   ├── components/        # Estilos específicos de componentes
│   ├── pages/             # Estilos específicos de cada página
│   └── App.css            # Estilos generales de la app
├── api/                   # Lógica para autenticación y llamadas a API
├── App.js                 # Enrutamiento y estructura principal
└── index.js               # Entrada principal de la app
```

## Cómo colaborar

1. Crea un nuevo branch para tu feature o bugfix:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
2. Haz los cambios y realiza commits:
   ```bash
   git commit -m "Añadida nueva funcionalidad de rutas"
   ```
3. Haz un push a tu branch:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
4. Abre un pull request para revisión.

## Pruebas
Utilizamos **Jest** para las pruebas unitarias. Para ejecutarlas:
```bash
npm test
```

---