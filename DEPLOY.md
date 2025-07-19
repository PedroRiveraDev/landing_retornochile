# 🚀 Guía de Deploy a Producción

## Problema de Caché Resuelto ✅

Este proyecto ahora incluye **cache busting automático** para evitar problemas de caché en producción.

## 📋 Pasos para subir a producción:

### 1. Construir la versión de producción
```bash
npm run build:prod
```

### 2. Subir archivos al servidor
- Sube **todo el contenido** de la carpeta `dist/` a tu servidor web
- No subas la carpeta `dist/` en sí, sino su contenido

### 3. ¡Listo! 🎉
Los usuarios verán los cambios inmediatamente sin problemas de caché.

## 🔧 Cómo funciona el Cache Busting

### Automático en Build
- Cada vez que ejecutas `npm run build`, se genera un timestamp único
- Los archivos CSS y JS se referencian con `?v=timestamp`
- Ejemplo: `main.js?v=1642587456123`

### Ejemplo de archivo generado:
```html
<link rel="stylesheet" href="assets/css/style.min.css?v=1642587456123" />
<script src="assets/js/main.js?v=1642587456123"></script>
```

## 📁 Estructura después del build

```
dist/
├── assets/
│   ├── css/
│   │   └── style.min.css          # CSS minificado
│   ├── js/
│   │   └── main.js                # JavaScript actualizado
│   ├── img/
│   └── fonts/
├── index.html                     # HTML con cache busting
├── favicon.ico
├── .htaccess                      # Control de caché del servidor
└── LICENSE
```

## 🌐 Configuración del Servidor

El archivo `.htaccess` incluido configura automáticamente:

- ✅ **Cache de 1 año** para CSS/JS (con versioning)
- ✅ **Cache de 1 año** para imágenes y fuentes
- ✅ **Sin cache** para HTML (siempre actualizado)
- ✅ **Compresión GZIP** para mejor rendimiento
- ✅ **Protección** de archivos sensibles

## 🛠️ Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build básico |
| `npm run build:prod` | Build de producción completo |
| `npm run dev:css` | Compilar CSS en modo watch |

## 🔍 Verificar que funciona

1. Sube los archivos a producción
2. Abre la página en el navegador
3. Ve a Herramientas de Desarrollador > Network
4. Deberías ver las URLs con `?v=timestamp`
5. Los archivos se cargan con el nuevo timestamp

## ⚠️ Importante

- **Siempre usa `npm run build:prod`** antes de subir a producción
- **No edites** los archivos en `dist/` directamente
- **Haz cambios** en los archivos fuente y vuelve a construir

---

¡Ya no más problemas de caché! 🎊
