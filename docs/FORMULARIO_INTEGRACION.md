# Guía de Integración del Formulario de Registro - RetornoChile

## 📋 Descripción General

El formulario de registro ha sido completamente optimizado con validaciones profesionales y está configurado para integrarse con un backend personalizado. Incluye validaciones en tiempo real, formateo automático de datos chilenos (RUT y WhatsApp) y una experiencia de usuario mejorada.

## ✨ Características Implementadas

### 🔍 Validaciones Profesionales
- **Validación de RUT chileno**: Algoritmo completo con dígito verificador
- **Formateo automático de RUT**: Se formatea mientras el usuario escribe (12.345.678-9)
- **Validación de WhatsApp chileno**: Acepta múltiples formatos (+56 9 XXXX XXXX)
- **Formateo automático de WhatsApp**: Convierte a formato estándar
- **Validaciones en tiempo real**: Feedback instantáneo al usuario
- **Campos obligatorios marcados**: Visual clara de campos requeridos

### 🎨 Mejoras de UX/UI
- **Animaciones suaves**: Transiciones y efectos visuales profesionales
- **Estados de error/éxito**: Colores y animaciones para feedback visual
- **Botón con estado de carga**: Indicador visual durante el envío
- **Mensajes de error personalizados**: Textos claros y útiles
- **Diseño responsivo**: Optimizado para móviles y desktop

### 🔧 Funcionalidades Técnicas
- **Formateo automático**: RUT y WhatsApp se formatean mientras se escriben
- **Campos condicionales**: Campo de cantidad de conductores aparece solo si es necesario
- **Validación completa**: Verificación exhaustiva antes del envío
- **Timestamps automáticos**: Se agrega fecha/hora del registro
- **Información adicional**: User agent y origen del formulario
- **Envío via AJAX**: Sin recargar la página, con manejo de errores

## 🚀 Integración con Backend

### Endpoint Configurado
El formulario envía los datos a:
```
POST /api/registro
```

### Configuración del Servidor
Debes crear un endpoint que maneje la recepción de datos:

```javascript
// Ejemplo con Express.js/Node.js
app.post('/api/registro', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validar datos del servidor
    const isValid = validateRegistrationData(formData);
    if (!isValid.success) {
      return res.status(400).json({
        success: false,
        message: isValid.message
      });
    }
    
    // Guardar en base de datos
    const registro = await saveRegistration(formData);
    
    // Enviar email de confirmación
    await sendConfirmationEmail(formData.email, formData.name);
    
    // Notificar al equipo
    await notifyTeam(formData);
    
    res.json({
      success: true,
      message: 'Registro exitoso',
      id: registro.id
    });
    
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});
```

## 📊 Estructura de Datos del Formulario

Los datos se envían como FormData al endpoint `/api/registro` con los siguientes campos:

```json
{
    "registration_type": "individual|company",
    "name": "Nombre completo o razón social",
    "rut": "12.345.678-9",
    "city": "Santiago",
    "whatsapp": "+56 9 1234 5678",
    "has_drivers": "yes|no",
    "drivers_count": "5", // Solo si has_drivers = "yes"
    "cargo_type": "Carga general",
    "vehicle_type": "Camión",
    "cargo_capacity": "10 toneladas",
    "fecha_registro": "2025-07-18T10:30:00.000Z",
    "origen": "landing_retornochile",
    "user_agent": "Mozilla/5.0..."
}
```

### Campos Obligatorios vs Opcionales

**Obligatorios:**
- `registration_type`
- `name`
- `rut`
- `city`
- `whatsapp`
- `has_drivers`
- `drivers_count` (solo si `has_drivers` = "yes")

**Opcionales:**
- `cargo_type`
- `vehicle_type`
- `cargo_capacity`

### Validaciones del Backend Recomendadas

```javascript
const validateRegistrationData = (data) => {
  // Validar RUT chileno
  if (!isValidChileanRUT(data.rut)) {
    return { success: false, message: 'RUT inválido' };
  }
  
  // Validar WhatsApp chileno
  if (!isValidChileanPhone(data.whatsapp)) {
    return { success: false, message: 'Número de WhatsApp inválido' };
  }
  
  // Validar tipo de registro
  if (!['individual', 'company'].includes(data.registration_type)) {
    return { success: false, message: 'Tipo de registro inválido' };
  }
  
  // Validar cantidad de conductores
  if (data.has_drivers === 'yes' && (!data.drivers_count || data.drivers_count < 1)) {
    return { success: false, message: 'Cantidad de conductores inválida' };
  }
  
  return { success: true };
};

// Función para validar RUT chileno
const isValidChileanRUT = (rut) => {
  // Implementar algoritmo de validación de RUT
  const cleanRUT = rut.replace(/[^0-9kK]/g, '');
  // ... lógica de validación
  return true; // placeholder
};

// Función para validar teléfono chileno
const isValidChileanPhone = (phone) => {
  const phoneRegex = /^(\+56\s?)?9\s?[0-9]{4}\s?[0-9]{4}$/;
  return phoneRegex.test(phone);
};
```

## 🔄 Estados del Formulario

### Estados de Validación
- **Campo vacío**: Sin estilos especiales
- **Campo con error**: Borde rojo + mensaje de error + animación shake
- **Campo válido**: Borde verde + mensaje de error oculto
- **Formulario enviando**: Botón con spinner + texto "Enviando..."

### Mensajes de Estado
- **Éxito**: Fondo verde, mensaje de confirmación
- **Error**: Fondo rojo, mensaje de error específico

## 🛠️ Configuración del Backend

### Tecnologías Recomendadas

**Node.js + Express:**
```javascript
const express = require('express');
const multer = require('multer');
const app = express();

// Middleware para procesar FormData
const upload = multer();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint de registro
app.post('/api/registro', upload.none(), async (req, res) => {
  // Lógica de procesamiento
});
```

**Python + Flask:**
```python
from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/api/registro', methods=['POST'])
def registro():
    data = request.form.to_dict()
    
    # Validar y procesar datos
    if validate_data(data):
        # Guardar en base de datos
        save_registration(data)
        return jsonify({'success': True, 'message': 'Registro exitoso'})
    else:
        return jsonify({'success': False, 'message': 'Datos inválidos'}), 400
```

**PHP:**
```php
<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = $_POST;
    
    // Validar datos
    if (validate_registration($data)) {
        // Guardar en base de datos
        $result = save_registration($data);
        
        echo json_encode([
            'success' => true,
            'message' => 'Registro exitoso'
        ]);
    } else {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Datos inválidos'
        ]);
    }
}
?>
```

### Base de Datos Sugerida

**Estructura de tabla MySQL:**
```sql
CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_type ENUM('individual', 'company') NOT NULL,
    name VARCHAR(255) NOT NULL,
    rut VARCHAR(12) NOT NULL UNIQUE,
    city VARCHAR(100) NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    has_drivers ENUM('yes', 'no') NOT NULL,
    drivers_count INT NULL,
    cargo_type VARCHAR(255) NULL,
    vehicle_type VARCHAR(255) NULL,
    cargo_capacity VARCHAR(100) NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    origen VARCHAR(50) DEFAULT 'landing_retornochile',
    user_agent TEXT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Estructura para MongoDB:**
```javascript
const registrationSchema = {
  registration_type: { type: String, enum: ['individual', 'company'], required: true },
  name: { type: String, required: true },
  rut: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  whatsapp: { type: String, required: true },
  has_drivers: { type: String, enum: ['yes', 'no'], required: true },
  drivers_count: { type: Number, min: 1 },
  cargo_type: String,
  vehicle_type: String,
  cargo_capacity: String,
  fecha_registro: { type: Date, default: Date.now },
  origen: { type: String, default: 'landing_retornochile' },
  user_agent: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
};
```

## 📧 Sistema de Notificaciones

### Email de Confirmación al Usuario
```javascript
const sendConfirmationEmail = async (userEmail, userName) => {
  const emailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Bienvenido a RetornoChile</title>
    </head>
    <body>
        <h2>¡Bienvenido a RetornoChile, ${userName}!</h2>
        <p>Tu registro ha sido recibido exitosamente.</p>
        <p>Nuestro equipo revisará tu información y te contactaremos pronto vía WhatsApp.</p>
        <p>Gracias por unirte a nuestra comunidad de transporte.</p>
        
        <hr>
        <p><small>Este es un mensaje automático, no responder a este email.</small></p>
    </body>
    </html>
  `;
  
  // Enviar con tu servicio de email preferido
  await emailService.send({
    to: userEmail,
    subject: 'Bienvenido a RetornoChile - Registro Exitoso',
    html: emailTemplate
  });
};
```

### Notificación al Equipo
```javascript
const notifyTeam = async (registrationData) => {
  const notification = {
    type: 'new_registration',
    data: registrationData,
    timestamp: new Date().toISOString()
  };
  
  // Enviar a Slack, Teams, o email del equipo
  await notificationService.send({
    channel: '#registros-nuevos',
    message: `Nuevo registro: ${registrationData.name} (${registrationData.registration_type})`
  });
};
```

### Integración con WhatsApp Business API
```javascript
const sendWhatsAppWelcome = async (whatsappNumber, name) => {
  const message = `¡Hola ${name}! 👋

Bienvenido a RetornoChile, la comunidad verificada de transporte.

Tu registro ha sido recibido y está siendo procesado por nuestro equipo.

Te contactaremos pronto para completar tu verificación y darte acceso al grupo exclusivo.

¡Gracias por unirte a nosotros! 🚛`;

  await whatsappAPI.sendMessage({
    to: whatsappNumber,
    message: message
  });
};
```

## 🔐 Consideraciones de Seguridad

### Validación del Lado del Servidor
**CRÍTICO:** Aunque el formulario tiene validación robusta del cliente, **siempre validar en el servidor**:

```javascript
// Validaciones de seguridad obligatorias
const securityValidations = {
  // Sanitizar entradas
  sanitizeInput: (input) => {
    return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  },
  
  // Validar RUT con algoritmo completo
  validateRUT: (rut) => {
    const cleanRUT = rut.replace(/[^0-9kK]/g, '');
    if (cleanRUT.length < 8 || cleanRUT.length > 9) return false;
    
    const body = cleanRUT.slice(0, -1);
    const checkDigit = cleanRUT.slice(-1).toLowerCase();
    
    let sum = 0;
    let multiplier = 2;
    
    for (let i = body.length - 1; i >= 0; i--) {
      sum += parseInt(body[i]) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const remainder = sum % 11;
    const expectedDigit = remainder < 2 ? remainder : 11 - remainder;
    const digitToCheck = expectedDigit === 10 ? 'k' : expectedDigit.toString();
    
    return checkDigit === digitToCheck;
  },
  
  // Rate limiting por IP
  checkRateLimit: async (ip) => {
    const attempts = await redis.get(`rate_limit:${ip}`);
    if (attempts && parseInt(attempts) > 5) {
      throw new Error('Demasiados intentos, intente más tarde');
    }
    await redis.setex(`rate_limit:${ip}`, 3600, (parseInt(attempts) || 0) + 1);
  }
};
```

### Headers de Seguridad
```javascript
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});
```

### Protección CORS
```javascript
app.use(cors({
  origin: ['https://retornochile.cl', 'https://www.retornochile.cl'],
  credentials: true,
  optionsSuccessStatus: 200
}));
```

## � Ejemplo Completo de Implementación

### Backend Node.js + Express + MongoDB

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const multer = require('multer');

const app = express();
const upload = multer();

// Middleware de seguridad
app.use(helmet());
app.use(cors({
  origin: ['https://retornochile.cl'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5 // máximo 5 registros por IP cada 15 min
});

app.use('/api/registro', limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Esquema de MongoDB
const registrationSchema = new mongoose.Schema({
  registration_type: { type: String, enum: ['individual', 'company'], required: true },
  name: { type: String, required: true, trim: true },
  rut: { type: String, required: true, unique: true, trim: true },
  city: { type: String, required: true, trim: true },
  whatsapp: { type: String, required: true, trim: true },
  has_drivers: { type: String, enum: ['yes', 'no'], required: true },
  drivers_count: { type: Number, min: 1 },
  cargo_type: { type: String, trim: true },
  vehicle_type: { type: String, trim: true },
  cargo_capacity: { type: String, trim: true },
  fecha_registro: { type: Date, default: Date.now },
  origen: { type: String, default: 'landing_retornochile' },
  user_agent: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  created_at: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

// Funciones de validación
const validateRUT = (rut) => {
  const cleanRUT = rut.replace(/[^0-9kK]/g, '');
  if (cleanRUT.length < 8 || cleanRUT.length > 9) return false;
  
  const body = cleanRUT.slice(0, -1);
  const checkDigit = cleanRUT.slice(-1).toLowerCase();
  
  let sum = 0;
  let multiplier = 2;
  
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  
  const remainder = sum % 11;
  const expectedDigit = remainder < 2 ? remainder : 11 - remainder;
  const digitToCheck = expectedDigit === 10 ? 'k' : expectedDigit.toString();
  
  return checkDigit === digitToCheck;
};

const validateChileanPhone = (phone) => {
  const phoneRegex = /^(\+56\s?)?9\s?[0-9]{4}\s?[0-9]{4}$/;
  return phoneRegex.test(phone);
};

// Endpoint principal
app.post('/api/registro', upload.none(), async (req, res) => {
  try {
    const data = req.body;
    
    // Validaciones de seguridad
    if (!validateRUT(data.rut)) {
      return res.status(400).json({
        success: false,
        message: 'RUT inválido'
      });
    }
    
    if (!validateChileanPhone(data.whatsapp)) {
      return res.status(400).json({
        success: false,
        message: 'Número de WhatsApp inválido'
      });
    }
    
    // Verificar si el RUT ya existe
    const existingUser = await Registration.findOne({ rut: data.rut });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Este RUT ya está registrado'
      });
    }
    
    // Crear registro
    const registration = new Registration({
      registration_type: data.registration_type,
      name: data.name.trim(),
      rut: data.rut.trim(),
      city: data.city.trim(),
      whatsapp: data.whatsapp.trim(),
      has_drivers: data.has_drivers,
      drivers_count: data.has_drivers === 'yes' ? parseInt(data.drivers_count) : null,
      cargo_type: data.cargo_type?.trim(),
      vehicle_type: data.vehicle_type?.trim(),
      cargo_capacity: data.cargo_capacity?.trim(),
      user_agent: req.headers['user-agent']
    });
    
    await registration.save();
    
    // Enviar notificaciones (implementar según necesidades)
    // await sendConfirmationEmail(data.email, data.name);
    // await notifyTeam(registration);
    // await sendWhatsAppWelcome(data.whatsapp, data.name);
    
    res.json({
      success: true,
      message: 'Registro exitoso',
      id: registration._id
    });
    
  } catch (error) {
    console.error('Error en registro:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Este RUT ya está registrado'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
```

### Variables de Entorno (.env)
```env
MONGODB_URI=mongodb://localhost:27017/retornochile
PORT=3000
JWT_SECRET=tu_secret_key_aqui
EMAIL_SERVICE_API_KEY=tu_api_key_email
WHATSAPP_API_TOKEN=tu_token_whatsapp
```

## 🔄 Mantenimiento y Actualizaciones

### Archivos Principales
- **HTML**: `index.html` (líneas 541-607)
- **JavaScript**: `assets/js/main.js` (validaciones y envío de formulario)
- **CSS**: `assets/css/custom.css` (estilos de validación)

### Logs y Debugging
El formulario incluye logs en consola para debugging:
```javascript
console.log('Datos del formulario:', formData);
console.error('Error en envío:', error);
```

### Monitoreo Recomendado
```javascript
// Agregar métricas de monitoreo
app.post('/api/registro', async (req, res) => {
  const startTime = Date.now();
  
  try {
    // ... lógica del registro
    
    // Registrar métrica de éxito
    logger.info('Registration successful', {
      duration: Date.now() - startTime,
      rut: data.rut,
      type: data.registration_type
    });
    
  } catch (error) {
    // Registrar métrica de error
    logger.error('Registration failed', {
      duration: Date.now() - startTime,
      error: error.message,
      data: req.body
    });
  }
});
```

## 📈 Métricas y Analytics

### Eventos de Google Analytics
```javascript
// Agregar al frontend para tracking
gtag('event', 'form_start', {
  'event_category': 'registration',
  'event_label': 'registration_form'
});

gtag('event', 'form_submit', {
  'event_category': 'registration',
  'event_label': 'registration_form',
  'value': 1
});
```

### Métricas del Backend
```javascript
// Endpoint para obtener estadísticas
app.get('/api/admin/stats', async (req, res) => {
  const stats = await Registration.aggregate([
    {
      $group: {
        _id: '$registration_type',
        count: { $sum: 1 },
        latest: { $max: '$created_at' }
      }
    }
  ]);
  
  res.json(stats);
});
```

## 🆘 Solución de Problemas

### El formulario no se envía
1. **Verificar endpoint**: Confirmar que `/api/registro` esté disponible
2. **Revisar CORS**: Verificar que el dominio esté permitido
3. **Consola del navegador**: Buscar errores JavaScript
4. **Network tab**: Verificar que la petición se envíe correctamente

### Errores de validación
```bash
# Logs útiles para debugging
tail -f /var/log/app/error.log | grep "Registration"

# Verificar estado de la base de datos
mongo
> use retornochile
> db.registrations.find().limit(5)
```

### Pruebas de Integración
```javascript
// Test del endpoint con curl
curl -X POST http://localhost:3000/api/registro \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "registration_type=individual&name=Test User&rut=12.345.678-9&city=Santiago&whatsapp=+56912345678&has_drivers=no"
```

## 📞 Checklist de Implementación

### Frontend ✅ Completado
- [x] Formulario HTML con campos en inglés
- [x] Validaciones JavaScript en tiempo real
- [x] Formateo automático de RUT y WhatsApp
- [x] Estados de carga y error
- [x] Diseño responsivo
- [x] Envío via AJAX a `/api/registro`

### Backend 🔧 Por Implementar
- [ ] Crear endpoint `/api/registro`
- [ ] Configurar base de datos
- [ ] Implementar validaciones del servidor
- [ ] Configurar sistema de emails
- [ ] Integrar con WhatsApp Business API
- [ ] Implementar rate limiting
- [ ] Configurar logs y monitoreo
- [ ] Configurar variables de entorno
- [ ] Pruebas de seguridad
- [ ] Deploy en producción

### Seguridad 🔒 Crítico
- [ ] Validación de RUT en servidor
- [ ] Sanitización de inputs
- [ ] Rate limiting por IP
- [ ] Headers de seguridad
- [ ] Configuración CORS
- [ ] Logs de auditoría

---

**✅ El formulario frontend está completamente listo. Ahora solo falta implementar el backend siguiendo esta guía.**
