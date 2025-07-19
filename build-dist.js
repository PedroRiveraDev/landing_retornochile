const fs = require('fs');
const path = require('path');

function copyFileSync(source, target) {
    let targetFile = target;
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }
    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
    let files = [];
    const targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
    }

    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            const curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

// Crear la carpeta dist
const distDir = './dist';
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// Copiar archivos individuales
const filesToCopy = ['favicon.ico', 'LICENSE', '.htaccess'];
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        copyFileSync(file, distDir);
        console.log(`Copiado: ${file}`);
    }
});

// Procesar y copiar index.html
if (fs.existsSync('index.html')) {
    let indexContent = fs.readFileSync('index.html', 'utf-8');
    
    // Generar timestamp para cache busting
    const timestamp = Date.now();
    
    // Cambiar la referencia de CSS a la versión minificada con cache busting
    indexContent = indexContent.replace(
        '<link rel="stylesheet" href="assets/css/style.css" />',
        `<link rel="stylesheet" href="assets/css/style.min.css?v=${timestamp}" />`
    );
    
    // Añadir cache busting al archivo JS principal
    indexContent = indexContent.replace(
        '<script src="assets/js/main.js"></script>',
        `<script src="assets/js/main.js?v=${timestamp}"></script>`
    );
    
    // Añadir cache busting al archivo includes.js
    indexContent = indexContent.replace(
        /assets\/js\/includes\.js(\?v=\d+)?/g,
        `assets/js/includes.js?v=${timestamp}`
    );
    
    // Opcional: remover el comentario de la versión de producción si existe
    indexContent = indexContent.replace(
        '<!-- <link rel="stylesheet" href="/assets/css/style.min.css" /> -->',
        ''
    );
    
    fs.writeFileSync(path.join(distDir, 'index.html'), indexContent);
    console.log(`Procesado y copiado: index.html (con cache busting v=${timestamp})`);
}

// Copiar la carpeta assets
if (fs.existsSync('./assets')) {
    copyFolderRecursiveSync('./assets', distDir);
    console.log('Copiado: carpeta assets');
}

console.log('✅ Carpeta dist creada exitosamente con todos los archivos necesarios');
console.log('');
console.log('🚀 Para subir a producción:');
console.log('   1. Sube todo el contenido de la carpeta "dist/" a tu servidor');
console.log('   2. Los archivos ahora tienen cache busting automático');
console.log('   3. Los usuarios verán los cambios inmediatamente');
console.log('');
console.log('📁 Archivos listos en: ./dist/');
