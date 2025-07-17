# RetornosChile - Landing Page

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Landing page profesional para RetornosChile, una plataforma que conecta camioneros con oportunidades de carga, optimizando el transporte de mercancías en Chile.

## 📋 Descripción

RetornosChile es una solución innovadora que facilita la conexión entre transportistas y empresas que necesitan servicios de carga. Esta landing page presenta de manera atractiva y profesional los servicios ofrecidos, beneficios y funcionalidades de la plataforma.

## ✨ Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Tailwind CSS**: Framework CSS utilitario para un desarrollo eficiente
- **Performance Optimizada**: Carga rápida y experiencia de usuario fluida
- **SEO Friendly**: Estructura optimizada para motores de búsqueda
- **Tema Oscuro/Claro**: Soporte para ambos modos de visualización
- **Animaciones Suaves**: Efectos visuales con GSAP y ScrollTrigger
- **Galería de Imágenes**: Lightbox integrado para mostrar contenido visual

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **Tailwind CSS**: Framework CSS utilitario
- **JavaScript**: Funcionalidades interactivas
- **GSAP**: Animaciones avanzadas
- **Swiper.js**: Carruseles y sliders
- **Live Server**: Servidor de desarrollo local

## 🚀 Instalación y Configuración

### Prerequisitos

- Node.js (versión 14 o superior)
- NPM o Yarn

### Pasos de instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/PedroRiveraDev/landing_retornochile.git
```

2. **Navegar al directorio del proyecto:**
```bash
cd RetornoChile
```

3. **Instalar las dependencias:**
```bash
npm install
```

4. **Iniciar el servidor de desarrollo:**
```bash
npm start
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

## 📜 Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo y compila CSS en modo watch
- `npm run dev:css`: Compila Tailwind CSS en modo desarrollo con watch
- `npm run start:server`: Inicia solo el servidor local
- `npm run minify`: Genera la versión minificada del CSS para producción

## 📁 Estructura del Proyecto

```
RetornoChile/
├── assets/
│   ├── css/           # Archivos CSS compilados
│   ├── fonts/         # Fuentes web e iconos
│   ├── img/           # Imágenes y recursos visuales
│   └── js/            # Scripts JavaScript
├── src/
│   └── tailwind.css   # Archivo fuente de Tailwind
├── index.html         # Página principal
├── tailwind.config.js # Configuración de Tailwind
└── package.json       # Dependencias y scripts
```

## 🎨 Personalización

### Modificar estilos
1. Edita `src/tailwind.css` para estilos personalizados
2. Utiliza `tailwind.config.js` para configurar el tema
3. Los cambios se reflejarán automáticamente con `npm start`

### Actualizar contenido
- Modifica `index.html` para cambiar el contenido
- Reemplaza imágenes en `assets/img/`
- Personaliza colores y tipografías en la configuración de Tailwind

## 🚀 Despliegue en Producción

1. **Generar CSS minificado:**
```bash
npm run minify
```

2. **Actualizar referencia CSS en HTML:**
Descomenta la línea de CSS de producción en `index.html`:
```html
<link rel="stylesheet" href="assets/css/style.min.css" />
```

3. **Subir archivos al servidor web**

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte o consultas sobre el proyecto, contacta al equipo de desarrollo.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
