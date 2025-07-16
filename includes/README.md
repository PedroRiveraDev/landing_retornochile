# Sistema de Includes para Header y Footer

Este sistema permite reutilizar el header y footer en todas las páginas del sitio web de manera eficiente.

## Estructura de archivos

```
includes/
├── header.html    # Header completo con navegación y menú offcanvas
├── footer.html    # Footer completo con enlaces y redes sociales
└── README.md     # Este archivo

assets/js/
└── includes.js   # Script para cargar los includes dinámicamente
```

## Cómo usar en otras páginas

### 1. Estructura HTML básica

```html
<!doctype html>
<html lang="en" class="dark">
<head>
    <!-- Meta tags, CSS, etc. -->
    <link rel="stylesheet" href="assets/css/style.css" />
</head>

<body>
    <!-- loading section si es necesario -->
    <div class="page-wrapper relative">
        <!-- Header Placeholder -->
        <div id="header-placeholder"></div>

        <!-- Main Content -->
        <main class="main-wrapper relative overflow-hidden">
            <!-- Tu contenido aquí -->
        </main>

        <!-- Footer Placeholder -->
        <div id="footer-placeholder"></div>
    </div>

    <!-- Scripts -->
    <script src="assets/js/vendors/menu.js"></script>
    <!-- Otros scripts del vendor -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/includes.js"></script>
</body>
</html>
```

### 2. Placeholders requeridos

- `<div id="header-placeholder"></div>` - Donde se cargará el header
- `<div id="footer-placeholder"></div>` - Donde se cargará el footer

### 3. Scripts necesarios

Asegúrate de incluir estos scripts en orden:
1. Scripts del vendor (menu.js, etc.)
2. main.js
3. **includes.js** (¡Importante!)

## Funcionamiento del sistema

1. **Carga automática**: Al cargar la página, `includes.js` automáticamente:
   - Carga `includes/header.html` en el placeholder del header
   - Carga `includes/footer.html` en el placeholder del footer

2. **Reinicialización**: Después de cargar el header, reinicializa automáticamente:
   - Scripts del menú móvil
   - Eventos del menú offcanvas
   - Overlay de fondo

3. **Funciones globales**: Expone funciones necesarias para el header:
   - `btnCloseInfoMenu()` - Cierra el menú de información
   - `closeUserEvent()` - Cierra eventos del usuario

## Ventajas

✅ **Reutilización**: Un solo header y footer para todo el sitio
✅ **Mantenimiento**: Cambios en un solo lugar se reflejan en todas las páginas
✅ **Consistencia**: Garantiza que todas las páginas tengan la misma estructura
✅ **Funcionalidad**: Mantiene toda la funcionalidad del menú móvil y offcanvas

## Modificaciones del header/footer

Para modificar el header o footer:

1. Edita `includes/header.html` o `includes/footer.html`
2. Los cambios se aplicarán automáticamente a todas las páginas que usen el sistema

## Rutas relativas

Ten en cuenta que las rutas en los includes son relativas a la página que los carga:
- Si tu página está en una subcarpeta, ajusta las rutas en consecuencia
- Ejemplo: desde `pages/about.html` cargar `../includes/header.html`

## Páginas compatibles

Este sistema funciona con cualquier página HTML que:
- Tenga los placeholders correctos
- Incluya el script `includes.js`
- Mantenga la estructura de archivos CSS/JS

## Fallback

Si los includes no se pueden cargar (ej: servidor local sin soporte para fetch), las páginas seguirán funcionando pero sin header/footer. Para entornos de producción, considera usar un servidor web adecuado.
