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
const filesToCopy = ['index.html', 'favicon.ico', 'LICENSE'];
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        copyFileSync(file, distDir);
        console.log(`Copiado: ${file}`);
    }
});

// Copiar la carpeta assets
if (fs.existsSync('./assets')) {
    copyFolderRecursiveSync('./assets', distDir);
    console.log('Copiado: carpeta assets');
}

console.log('✅ Carpeta dist creada exitosamente con todos los archivos necesarios');
