#!/usr/bin/env node

const fs = require('fs');
const crypto = require('crypto');

function getFileHash(filePath) {
    if (!fs.existsSync(filePath)) return null;
    const content = fs.readFileSync(filePath);
    return crypto.createHash('md5').update(content).digest('hex');
}

function compareFiles() {
    console.log('🔍 Verificando diferencias entre desarrollo y producción...\n');
    
    const files = [
        'assets/js/main.js',
        'assets/css/style.css'
    ];
    
    let hasChanges = false;
    
    files.forEach(file => {
        const devHash = getFileHash(file);
        const prodFile = file.replace('style.css', 'style.min.css');
        const prodHash = getFileHash(`dist/${prodFile}`);
        
        if (devHash && prodHash) {
            if (devHash !== prodHash) {
                console.log(`📝 ${file} - DIFERENTE (necesita rebuild)`);
                hasChanges = true;
            } else {
                console.log(`✅ ${file} - IGUAL`);
            }
        } else if (devHash && !prodHash) {
            console.log(`⚠️  ${file} - NO EXISTE en dist (necesita rebuild)`);
            hasChanges = true;
        } else if (!devHash) {
            console.log(`❌ ${file} - NO EXISTE en desarrollo`);
        }
    });
    
    console.log('\n' + '='.repeat(50));
    
    if (hasChanges) {
        console.log('🚨 HAY CAMBIOS - Ejecuta: npm run build:prod');
    } else {
        console.log('✅ TODO SINCRONIZADO - Listo para producción');
    }
    
    console.log('='.repeat(50));
}

compareFiles();
