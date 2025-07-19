"use strict";

/* ::::::::::::::::::::
:: GLobal Javascript ::
::::::::::::::::::::::: */

// DIAGNÓSTICO INICIAL - v2025071903
console.log('=== DIAGNÓSTICO MAIN.JS v2025071903 ===');
console.log('Fecha de carga:', new Date().toISOString());
console.log('URL actual:', window.location.href);
console.log('User Agent:', navigator.userAgent);

// Verificar si DOMContentLoaded ya ocurrió
if (document.readyState === 'loading') {
  console.log('DOM aún cargando...');
} else if (document.readyState === 'interactive') {
  console.log('DOM interactivo');
} else if (document.readyState === 'complete') {
  console.log('DOM completamente cargado');
}

// Verificar bibliotecas requeridas
console.log('JOS disponible:', typeof JOS !== 'undefined');
console.log('Swiper disponible:', typeof Swiper !== 'undefined');

// Detectar errores de JavaScript
window.addEventListener('error', function(e) {
  console.error('Error de JavaScript detectado:', {
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno,
    error: e.error
  });
});

window.addEventListener('unhandledrejection', function(e) {
  console.error('Promise rechazada:', e.reason);
});

console.log('=== FIN DIAGNÓSTICO INICIAL ===');

/* ::::::::::::::::::::
:: GLobal Javascript ::
::::::::::::::::::::::: */

// Loader JS
window.addEventListener("load", function () {
  var loader = document.querySelector(".fullpage_loader");
  if (loader) {
    loader.style.transition = "opacity 1s ease";
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.remove(); // Show the content after loader
    }, 1000); // Matches the "slow" fadeOut time (500ms)
  }
});

// ==== Sticky Menu ====
window.addEventListener("scroll", function () {
  let header = document.querySelector(".site-header");
  if (header) {
    header.classList.toggle("scrolling", window.scrollY > 0);
  }
});

// ::::: GLobal Javascript ::::
// ================================Animate Interaction on Scroll ==================================
JOS.init({
  // disable: false, // Disable JOS gloabaly | Values :  'true', 'false'
  // debugMode: true, // Enable JOS debug mode | Values :  'true', 'false'
  passive: false, // Set the passive option for the scroll event listener | Values :  'true', 'false'

  once: true, // Disable JOS after first animation | Values :  'true', 'false' || Int : 0-1000
  animation: "fade-up", // JOS global animation type | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  // animationInverse: "static", // Set the animation type for the element when it is scrolled out of view | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  timingFunction: "ease", // JOS global timing function | Values :  'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'steps()', 'cubic-bezier()', 'my-custom-timing-function'
  //mirror : false, // Set whether the element should animate back when scrolled out of view | Values :  'true', 'false'
  threshold: 0, // Set gloabal the threshold for the element to be visible | Values :  0-1
  delay: 0.3, // Set global the delay for the animation to start | Values :  0,1,2,3,4,5
  duration: 0.5, // Set global the duration for the animation playback | Values :  flota : 0-1 & int : 0,1,2,3,4,5

  // startVisible: "true", // Set whether the element should animate when the page is loaded | Values :  'true', 'false' || MS : 0-10000
  scrollDirection: "down", // Set the scroll direction for the element to be visible | Values :  'up', 'down', 'none'
  //scrollProgressDisable: true // disable or enable scroll callback function | Values :  'true', 'false'
  // intersectionRatio: 0.4, // Set the intersection ratio between which the element should be visible | Values :  0-1 (automaticaly set)
  // rootMargin_top: "0%", // Set by which percent the element should animate out (Recommended value between 10% to -30%)
  // rootMargin_bottom: "-50%", // Set by which percent the element should animate out (Recommended value between -10% to -60%)
  rootMargin: "0% 0% 5% 0%", // Set the root margin for the element to be visible | Values :  _% _% _% _%  (automaticaly set)
});
// ==== Tab Menu ====
// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listeners to tab buttons
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all tab buttons and hide all tab content
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    tabContents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Get the data-tab attribute of the clicked button
    const tabId = button.getAttribute("data-tab");
    const correspondingTab = document.getElementById(tabId);

    // Add 'active' class to the clicked button and show the corresponding tab content
    button.classList.add("active");
    correspondingTab.classList.remove("hidden");
  });
});

// ======================================== Accordion ======================================
let accordions = document.querySelectorAll(".accordion-item");
accordions.forEach((item) => {
  let label = item.querySelector(".accordion-header");
  label.addEventListener("click", () => {
    accordions.forEach((accordionItem) => {
      accordionItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

//=========== Progress Bar =============
// Find the element with the class 'progress-bar'
const progressBars = document.querySelectorAll(".progress-bar");

// Iterate over each progress bar element
progressBars.forEach((progressBar) => {
  // Get the value of the 'data-percentage-value' attribute for each progress bar
  const percentageValue = progressBar.getAttribute("data-percentage-value");
  progressBar.style.width = percentageValue + "%";
});

//=========== Pricing Button =============
function toggleSwitch() {
  var month = document.querySelectorAll(".month");
  var annual = document.querySelectorAll(".annual");
  for (var i = 0; i < month.length; i++) {
    if (document.getElementById("toggle").checked == true) {
      month[i].classList.add("hidden");
      annual[i].classList.remove("hidden");
    } else {
      month[i].classList.remove("hidden");
      annual[i].classList.add("hidden");
    }
  }
}

// =========== Show Image On Hover =============
function showImage(event) {
  const hoverOnItem = event.currentTarget;
  const hoverOnImage = hoverOnItem.querySelector(".hover-on-image");
  const hoveredImage = document.getElementById("hoveredImage");

  // Set the hovered image source to the hoverOn image source
  hoveredImage.src = hoverOnImage.src;

  // Show the hovered image
  hoveredImage.style.display = "block";

  // Move the hovered image with the cursor
  document.addEventListener("mousemove", moveImage);

  function moveImage(event) {
    const x = event.clientX;
    const y = event.clientY;

    hoveredImage.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Hide the hovered image when mouse leaves the hoverOn item
  hoverOnItem.onmouseleave = () => {
    hoveredImage.style.display = "none";
    document.removeEventListener("mousemove", moveImage);
  };
}

// =========== Search =============
const searchBlock = document.getElementById("search-block");
const infoMenuBlock = document.getElementById("info-menu-block");
const overlayBlock = document.querySelector(".overlay-block");
const btnOpenSearch = () => {
  searchBlock.style.transform = "translateY(0%)";
  overlayBlock.classList.remove("hidden");
};

const btnCloseSearch = () => {
  searchBlock.style.transform = "translateY(-100%)";
  overlayBlock.classList.add("hidden");
};

// =========== Info Offcanvas Menu =============
const btnOpenInfoMenu = () => {
  infoMenuBlock.style.transform = "translateX(0%)";
  overlayBlock.classList.remove("hidden");
};

const btnCloseInfoMenu = () => {
  infoMenuBlock.style.transform = "translateX(100%)";
  overlayBlock.classList.add("hidden");
};

// =========== Overlay Menu =============
const closeUserEvent = () => {
  searchBlock.style.transform = "translateY(-100%)";
  infoMenuBlock.style.transform = "translateX(100%)";
  overlayBlock.classList.add("hidden");
};

// =========== Increment Decrement  =============
const productValueElem = document.querySelector(".product-value");
let value = 0;
const btnIncrement = () => {
  value++;
  productValueElem.textContent = value;
};
const btnDecrement = () => {
  if (value > 0) {
    value--;
    productValueElem.textContent = value;
  }
};

// =========== Dynamic Year =============
const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("copyright-year");
if (copyrightYear) {
  copyrightYear.textContent = currentYear;
}

// =========== Smooth Scroll to Sections =============
document.addEventListener("DOMContentLoaded", function () {
  // Función para manejar el scroll suave a las secciones
  const smoothScrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Escuchar clicks en enlaces que apuntan a secciones
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      smoothScrollToSection(targetId);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const removeButtons = document.querySelectorAll(".btn-remove-product");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productRow = button.closest("tr");
      if (productRow) {
        productRow.remove();
      }
    });
  });
});

/* ::::::::::::::::::::::
:: Template Javascript ::
::::::::::::::::::::::::: */

// =========== Service Slider - 1 =============
const serviceSliderOne = new Swiper(".service-slider-one", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// =========== Service Slider - 2 =============
const serviceSliderTwo = new Swiper(".service-slider-two", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// =========== Project Slider - 1 =============
const portfolioSliderOne = new Swiper(".portfolio-slider-one", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// =========== Project Slider - 2 =============
const portfolioSliderTwo = new Swiper(".portfolio-slider-two", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// =========== Hero Slider - 1 =============
const heroSliderOne = new Swiper(".hero-slider-one", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hero-button-next",
    prevEl: ".hero-button-prev",
  },
});

// =========== Testimonial Slider - 2 =============
const testimonialSliderOne = new Swiper(".testimonial-slider-one", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
});

// =========== Client Logo Slider =============
const clientSlider = new Swiper(".client-slider", {
  slidesPerView: 1,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// =========== Project Slider - 1 =============
const teamSliderOne = new Swiper(".team-slider-one", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// Product Gallery
var productThumb = new Swiper(".product-thumbs", {
  slidesPerView: 3,
  breakpoints: {
    576: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  clickable: true,
  // direction: "vertical",
  spaceBetween: 16,
});
var productGallery = new Swiper(".product-gallery", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".testimonial-slider-button-next",
    prevEl: ".testimonial-slider-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});

// ================================ VALIDACIONES DEL FORMULARIO DE REGISTRO ================================

// Utilidades para validaciones
const FormValidator = {
  // Validar RUT chileno
  validateRUT: function(rut) {
    // Remover puntos y guión, convertir a mayúsculas
    const cleanRUT = rut.replace(/\./g, '').replace('-', '').toUpperCase();
    
    if (cleanRUT.length < 8 || cleanRUT.length > 9) {
      return false;
    }
    
    const rutBody = cleanRUT.slice(0, -1);
    const checkDigit = cleanRUT.slice(-1);
    
    // Verificar que el cuerpo del RUT sean números
    if (!/^\d+$/.test(rutBody)) {
      return false;
    }
    
    // Calcular dígito verificador
    let sum = 0;
    let multiplier = 2;
    
    for (let i = rutBody.length - 1; i >= 0; i--) {
      sum += parseInt(rutBody[i]) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const remainder = sum % 11;
    const calculatedCheckDigit = remainder === 0 ? '0' : remainder === 1 ? 'K' : (11 - remainder).toString();
    
    return checkDigit === calculatedCheckDigit;
  },

  // Formatear RUT mientras se escribe
  formatRUT: function(rut) {
    // Remover todo excepto números y K
    let cleanRUT = rut.replace(/[^0-9kK]/g, '').toUpperCase();
    
    if (cleanRUT.length <= 1) return cleanRUT;
    
    // Separar cuerpo y dígito verificador
    const body = cleanRUT.slice(0, -1);
    const checkDigit = cleanRUT.slice(-1);
    
    // Formatear el cuerpo con puntos
    let formattedBody = '';
    for (let i = body.length - 1, count = 0; i >= 0; i--, count++) {
      if (count > 0 && count % 3 === 0) {
        formattedBody = '.' + formattedBody;
      }
      formattedBody = body[i] + formattedBody;
    }
    
    return formattedBody + '-' + checkDigit;
  },

  // Validar WhatsApp chileno
  validateWhatsApp: function(phone) {
    const cleanPhone = phone.replace(/\s/g, '');
    // Formatos aceptados: +56912345678, 56912345678, 912345678
    const patterns = [
      /^\+56\s?9\s?\d{4}\s?\d{4}$/,
      /^56\s?9\s?\d{4}\s?\d{4}$/,
      /^9\s?\d{4}\s?\d{4}$/
    ];
    
    return patterns.some(pattern => pattern.test(cleanPhone));
  },

  // Formatear WhatsApp
  formatWhatsApp: function(phone) {
    let cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.startsWith('569')) {
      cleanPhone = cleanPhone.substring(2);
    } else if (cleanPhone.startsWith('56')) {
      cleanPhone = cleanPhone.substring(2);
    }
    
    if (cleanPhone.startsWith('9') && cleanPhone.length === 9) {
      return `+56 9 ${cleanPhone.substring(1, 5)} ${cleanPhone.substring(5)}`;
    }
    
    return phone;
  },

  // Validar email
  validateEmail: function(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  },

  // Mostrar mensaje de error
  showError: function(field, message) {
    const errorSpan = field.parentNode.querySelector('.error-message') || 
                     field.parentNode.parentNode.querySelector('.error-message');
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.remove('hidden');
    }
    field.classList.add('border-red-500');
    field.classList.remove('border-green-500');
  },

  // Ocultar mensaje de error
  hideError: function(field) {
    const errorSpan = field.parentNode.querySelector('.error-message') ||
                     field.parentNode.parentNode.querySelector('.error-message');
    if (errorSpan) {
      errorSpan.classList.add('hidden');
    }
    field.classList.remove('border-red-500');
    field.classList.add('border-green-500');
  },

  // Mostrar mensaje general del formulario
  showFormMessage: function(message, type = 'error') {
    const messageDiv = document.getElementById('form-message');
    const messageText = document.getElementById('message-text');
    
    if (messageDiv && messageText) {
      messageText.textContent = message;
      messageDiv.className = `p-4 rounded-lg text-center font-medium ${
        type === 'success' 
          ? 'bg-green-100 text-green-800 border border-green-300' 
          : 'bg-red-100 text-red-800 border border-red-300'
      }`;
      messageDiv.classList.remove('hidden');
      
      // Scroll hacia el mensaje
      messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  // Ocultar mensaje del formulario
  hideFormMessage: function() {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
      messageDiv.classList.add('hidden');
    }
  }
};

// Inicialización del formulario cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DIAGNÓSTICO FORMULARIO v2025071903 ===');
  console.log('DOMContentLoaded disparado a las:', new Date().toISOString());
  console.log('DOM cargado - inicializando formulario');
  
  const form = document.getElementById('registroForm');
  console.log('Formulario encontrado:', !!form);
  
  if (!form) {
    console.error('Formulario no encontrado - IDs disponibles:');
    const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
    console.error('IDs encontrados:', allIds);
    return;
  }
  
  console.log('Formulario encontrado:', form);
  console.log('Formulario tag name:', form.tagName);
  console.log('Formulario action:', form.action);
  console.log('Formulario method:', form.method);
  
  // Verificar que el event listener se añade correctamente
  console.log('Añadiendo event listener al formulario...');

  // Referencias a elementos del formulario
  const tipoRegistro = document.getElementById('tipoRegistro');
  const nombre = document.getElementById('nombre');
  const rut = document.getElementById('rut');
  const ciudad = document.getElementById('ciudad');
  const whatsapp = document.getElementById('whatsapp');
  const tieneConductores = document.getElementById('tieneConductores');
  const cantidadConductores = document.getElementById('campoCantidadConductores');
  const submitBtn = document.getElementById('submitBtn');

  // Formateo automático del RUT
  if (rut) {
    rut.addEventListener('input', function(e) {
      const cursorPos = e.target.selectionStart;
      const oldValue = e.target.value;
      e.target.value = FormValidator.formatRUT(e.target.value);
      
      // Mantener posición del cursor
      const newValue = e.target.value;
      const lengthDiff = newValue.length - oldValue.length;
      e.target.setSelectionRange(cursorPos + lengthDiff, cursorPos + lengthDiff);
    });

    rut.addEventListener('blur', function() {
      if (this.value && !FormValidator.validateRUT(this.value)) {
        FormValidator.showError(this, 'Ingrese un RUT válido (ej: 12.345.678-9)');
      } else if (this.value) {
        FormValidator.hideError(this);
      }
    });
  }

  // Formateo automático del WhatsApp
  if (whatsapp) {
    whatsapp.addEventListener('input', function(e) {
      // Solo permitir números, espacios, + y guiones
      const value = e.target.value.replace(/[^\d\s\+\-]/g, '');
      e.target.value = value;
    });

    whatsapp.addEventListener('blur', function() {
      if (this.value) {
        if (FormValidator.validateWhatsApp(this.value)) {
          this.value = FormValidator.formatWhatsApp(this.value);
          FormValidator.hideError(this);
        } else {
          FormValidator.showError(this, 'Ingrese un número de WhatsApp válido (+56 9 XXXX XXXX)');
        }
      }
    });
  }

  // Mostrar/ocultar campo de cantidad de conductores
  if (tieneConductores && cantidadConductores) {
    tieneConductores.addEventListener('change', function() {
      if (this.value === 'si') {
        cantidadConductores.style.display = 'block';
        cantidadConductores.required = true;
      } else {
        cantidadConductores.style.display = 'none';
        cantidadConductores.required = false;
        cantidadConductores.value = '';
        FormValidator.hideError(cantidadConductores);
      }
    });
  }

  // Validación en tiempo real para campos requeridos
  const requiredFields = [tipoRegistro, nombre, ciudad, tieneConductores];
  
  requiredFields.forEach(field => {
    if (field) {
      field.addEventListener('blur', function() {
        if (this.required && !this.value) {
          FormValidator.showError(this, 'Este campo es obligatorio');
        } else {
          FormValidator.hideError(this);
        }
      });

      field.addEventListener('input', function() {
        if (this.value) {
          FormValidator.hideError(this);
        }
      });
    }
  });

  // Validación del formulario completo
  function validateForm() {
    let isValid = true;
    FormValidator.hideFormMessage();

    // Validar tipo de registro
    if (!tipoRegistro.value) {
      FormValidator.showError(tipoRegistro, 'Seleccione un tipo de registro');
      isValid = false;
    }

    // Validar nombre
    if (!nombre.value.trim()) {
      FormValidator.showError(nombre, 'Ingrese su nombre o razón social');
      isValid = false;
    } else if (nombre.value.trim().length < 2) {
      FormValidator.showError(nombre, 'El nombre debe tener al menos 2 caracteres');
      isValid = false;
    }

    // Validar RUT
    if (!rut.value) {
      FormValidator.showError(rut, 'Ingrese su RUT');
      isValid = false;
    } else if (!FormValidator.validateRUT(rut.value)) {
      FormValidator.showError(rut, 'Ingrese un RUT válido');
      isValid = false;
    }

    // Validar ciudad
    if (!ciudad.value.trim()) {
      FormValidator.showError(ciudad, 'Ingrese su ciudad');
      isValid = false;
    }

    // Validar WhatsApp
    if (!whatsapp.value) {
      FormValidator.showError(whatsapp, 'Ingrese su número de WhatsApp');
      isValid = false;
    } else if (!FormValidator.validateWhatsApp(whatsapp.value)) {
      FormValidator.showError(whatsapp, 'Ingrese un número de WhatsApp válido');
      isValid = false;
    }

    // Validar conductores a cargo
    if (!tieneConductores.value) {
      FormValidator.showError(tieneConductores, 'Seleccione una opción');
      isValid = false;
    }

    // Validar cantidad de conductores (si corresponde)
    if (tieneConductores.value === 'si') {
      if (!cantidadConductores.value) {
        FormValidator.showError(cantidadConductores, 'Ingrese la cantidad de conductores');
        isValid = false;
      } else if (parseInt(cantidadConductores.value) < 1) {
        FormValidator.showError(cantidadConductores, 'La cantidad debe ser mayor a 0');
        isValid = false;
      }
    }

    return isValid;
  }

  // Envío del formulario
  if (form) {
    console.log('Configurando submit event listener...');
    form.addEventListener('submit', function(e) {
      console.log('=== EVENT LISTENER SUBMIT EJECUTADO ===');
      console.log('Evento submit disparado a las:', new Date().toISOString());
      console.log('Evento:', e);
      console.log('Tipo de evento:', e.type);
      console.log('Target:', e.target);
      console.log('Formulario enviado - iniciando validación');
      
      console.log('Ejecutando preventDefault...');
      e.preventDefault();
      console.log('preventDefault ejecutado exitosamente');
      
      console.log('Iniciando validateForm()...');
      if (!validateForm()) {
        console.log('Validación falló - mostrando mensaje de error');
        FormValidator.showFormMessage('Por favor, agregue los datos faltantes en el formulario');
        return;
      }

      console.log('Validación exitosa - iniciando envío al webhook');

      // Mostrar estado de carga
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i> Enviando...';

      // Preparar datos del formulario para n8n
      const formDataObject = {};
      const formData = new FormData(form);
      
      // Convertir FormData a objeto JSON
      for (let [key, value] of formData.entries()) {
        formDataObject[key] = value;
      }
      
      // Agregar metadatos adicionales
      formDataObject.fecha_registro = new Date().toISOString();
      formDataObject.origen = 'landing_retornochile';
      formDataObject.user_agent = navigator.userAgent;
      formDataObject.url_origen = window.location.href;

      console.log('Datos a enviar:', formDataObject);

      // URL del webhook de n8n
      const webhookUrl = 'https://n8n.skinslabs.cl/webhook-test/registroretornochile';
      
      console.log('Enviando al webhook:', webhookUrl);

      // Enviar formulario al webhook de n8n
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // Si necesitas autenticación, agregar aquí:
          // 'Authorization': 'Bearer tu-token-aqui',
          // o 'X-API-Key': 'tu-api-key-aqui'
        },
        body: JSON.stringify(formDataObject)
      })
      .then(response => {
        // n8n devuelve diferentes códigos de estado
        if (response.ok) {
          return response.json().catch(() => ({})); // Si no hay JSON, retornar objeto vacío
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      })
      .then(data => {
        // Mostrar mensaje de éxito
        FormValidator.showFormMessage(
          '¡Registro exitoso! Nos pondremos en contacto contigo pronto.', 
          'success'
        );
        form.reset();
        if (cantidadConductores) {
          cantidadConductores.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error al enviar formulario:', error);
        console.error('Tipo de error:', typeof error);
        console.error('Mensaje del error:', error.message);
        
        // Verificar si es un error de CORS
        if (error.message.includes('fetch')) {
          FormValidator.showFormMessage(
            'Error de conexión. Verifique su conexión a internet e inténtelo nuevamente.'
          );
        } else {
          FormValidator.showFormMessage(
            'Hubo un error al enviar el formulario. Por favor, inténtelo nuevamente.'
          );
        }
      })
      .finally(() => {
        // Restaurar estado del botón
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Enviar registro <span><i class="ri-arrow-right-up-line"></i></span>';
      });
    });
    
    console.log('Event listener del formulario configurado exitosamente');
  } else {
    console.error('No se pudo configurar el event listener - formulario no encontrado');
  }
  
  console.log('=== FIN INICIALIZACIÓN FORMULARIO ===');
});
