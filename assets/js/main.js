"use strict";

/* ::::::::::::::::::::
:: GLobal Javascript ::
:: v20250724140000    ::
::::::::::::::::::::::: */

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
    // Formatos aceptados: +56912345678, 56912345678, 912345678, 9-1234-5678, +56 9 1234 5678
    const patterns = [
      /^\+56\s?9\s?\d{4}\s?\d{4}$/,
      /^56\s?9\s?\d{4}\s?\d{4}$/,
      /^9\s?\d{4}\s?\d{4}$/,
      /^9-\d{4}-\d{4}$/,
      /^\+56\s9\s\d{4}\s\d{4}$/
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

  // Validar nombre (solo letras, espacios y algunos caracteres especiales)
  validateName: function(name) {
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.\''-]{2,50}$/;
    return namePattern.test(name.trim());
  },

  // Validar ciudad (letras, espacios, guiones y algunos caracteres especiales)
  validateCity: function(city) {
    const cityPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.\,''-]{2,50}$/;
    return cityPattern.test(city.trim());
  },

  // Limpiar y validar texto libre
  sanitizeText: function(text) {
    return text.trim().replace(/\s+/g, ' '); // Remover espacios extra
  },

  // Validar contenido para prevenir XSS
  sanitizeInput: function(input) {
    // Remover caracteres potencialmente peligrosos
    return input.replace(/[<>\"'&]/g, '').trim();
  },

  // Validar longitud máxima de campos
  validateLength: function(text, maxLength = 100) {
    return text.length <= maxLength;
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
      
      // Aplicar estilos CSS básicos directamente
      if (type === 'success') {
        messageDiv.style.cssText = `
          padding: 16px;
          margin: 16px 0;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
          background-color: #f0fdf4;
          color: #166534;
          border: 2px solid #86efac;
          box-shadow: 0 4px 6px rgba(34, 197, 94, 0.1);
          display: block;
        `;
      } else {
        messageDiv.style.cssText = `
          padding: 16px;
          margin: 16px 0;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
          background-color: #fef2f2;
          color: #991b1b;
          border: 2px solid #fca5a5;
          box-shadow: 0 4px 6px rgba(239, 68, 68, 0.1);
          display: block;
        `;
      }
      
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
  const form = document.getElementById('registroForm');
  
  if (!form) {
    console.error('Formulario no encontrado');
    return;
  }

  // Referencias a elementos del formulario actualizado
  const nombre = document.getElementById('nombre');
  const whatsapp = document.getElementById('whatsapp');
  const tipoUsuario = document.getElementById('tipoUsuario');
  const ciudad = document.getElementById('ciudad');
  const tipoVehiculoContainer = document.getElementById('tipoVehiculoContainer');
  const tipoVehiculo = document.getElementById('tipoVehiculo');
  const otroVehiculoContainer = document.getElementById('otroVehiculoContainer');
  const otroVehiculo = document.getElementById('otroVehiculo');
  const tipoCargaContainer = document.getElementById('tipoCargaContainer');
  const tipoCarga = document.getElementById('tipoCarga');
  const otroCargaContainer = document.getElementById('otroCargaContainer');
  const otroCarga = document.getElementById('otroCarga');
  const interesVerificado = document.getElementById('interesVerificado');
  const submitBtn = document.getElementById('submitBtn');

  // Función para mostrar/ocultar campos específicos según el tipo de usuario
  function toggleSpecificFields() {
    if (!tipoUsuario || !tipoVehiculoContainer || !tipoCargaContainer) return;
    
    const userType = tipoUsuario.value;
    
    // Ocultar ambos contenedores inicialmente
    tipoVehiculoContainer.classList.add('hidden');
    tipoCargaContainer.classList.add('hidden');
    
    // Limpiar validaciones previas
    if (tipoVehiculo) {
      tipoVehiculo.removeAttribute('required');
      FormValidator.hideError(tipoVehiculo);
    }
    if (tipoCarga) {
      tipoCarga.removeAttribute('required');
      FormValidator.hideError(tipoCarga);
    }
    
    // Ocultar y limpiar campos de "otro"
    toggleOtherFields();
    
    // Mostrar el campo correspondiente según el tipo de usuario
    if (userType === 'transportista_independiente' || userType === 'empresa_transporte') {
      tipoVehiculoContainer.classList.remove('hidden');
      if (tipoVehiculo) {
        tipoVehiculo.setAttribute('required', 'required');
      }
    } else if (userType === 'generador_carga') {
      tipoCargaContainer.classList.remove('hidden');
      if (tipoCarga) {
        tipoCarga.setAttribute('required', 'required');
      }
    }
  }

  // Función para mostrar/ocultar campos de "otro"
  function toggleOtherFields() {
    // Para tipo de vehículo
    if (otroVehiculoContainer && otroVehiculo) {
      if (tipoVehiculo && tipoVehiculo.value === 'otro') {
        otroVehiculoContainer.classList.remove('hidden');
        otroVehiculo.setAttribute('required', 'required');
      } else {
        otroVehiculoContainer.classList.add('hidden');
        otroVehiculo.removeAttribute('required');
        otroVehiculo.value = '';
        FormValidator.hideError(otroVehiculo);
      }
    }

    // Para tipo de carga
    if (otroCargaContainer && otroCarga) {
      if (tipoCarga && tipoCarga.value === 'otro') {
        otroCargaContainer.classList.remove('hidden');
        otroCarga.setAttribute('required', 'required');
      } else {
        otroCargaContainer.classList.add('hidden');
        otroCarga.removeAttribute('required');
        otroCarga.value = '';
        FormValidator.hideError(otroCarga);
      }
    }
  }

  // Event listeners para cambios en tipo de usuario y selects específicos
  if (tipoUsuario) {
    tipoUsuario.addEventListener('change', toggleSpecificFields);
  }

  if (tipoVehiculo) {
    tipoVehiculo.addEventListener('change', toggleOtherFields);
  }

  if (tipoCarga) {
    tipoCarga.addEventListener('change', toggleOtherFields);
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

  // Validación en tiempo real para campos requeridos
  const requiredFields = [nombre, whatsapp, tipoUsuario, ciudad, interesVerificado];
  
  requiredFields.forEach(field => {
    if (field) {
      field.addEventListener('blur', function() {
        if (this.required && !this.value) {
          FormValidator.showError(this, 'Este campo es obligatorio');
        } else {
          // Validaciones específicas
          if (this === nombre && this.value) {
            if (!FormValidator.validateName(this.value)) {
              FormValidator.showError(this, 'Ingrese un nombre válido (solo letras y espacios)');
            } else {
              this.value = FormValidator.sanitizeText(this.value);
              FormValidator.hideError(this);
            }
          } else if (this === ciudad && this.value) {
            if (!FormValidator.validateCity(this.value)) {
              FormValidator.showError(this, 'Ingrese una ciudad válida');
            } else {
              this.value = FormValidator.sanitizeText(this.value);
              FormValidator.hideError(this);
            }
          } else {
            FormValidator.hideError(this);
          }
        }
      });

      field.addEventListener('input', function() {
        if (this.value) {
          FormValidator.hideError(this);
        }
      });
    }
  });

  // Validación para campos específicos de tipo de usuario
  if (tipoVehiculo) {
    tipoVehiculo.addEventListener('blur', function() {
      if (this.required && !this.value) {
        FormValidator.showError(this, 'Seleccione el tipo de vehículo');
      } else {
        FormValidator.hideError(this);
      }
    });
  }

  if (tipoCarga) {
    tipoCarga.addEventListener('blur', function() {
      if (this.required && !this.value) {
        FormValidator.showError(this, 'Seleccione el tipo de carga');
      } else {
        FormValidator.hideError(this);
      }
    });
  }

  // Validación para campos de "otro"
  if (otroVehiculo) {
    otroVehiculo.addEventListener('blur', function() {
      if (this.required && !this.value.trim()) {
        FormValidator.showError(this, 'Especifique el tipo de vehículo');
      } else {
        FormValidator.hideError(this);
      }
    });

    otroVehiculo.addEventListener('input', function() {
      if (this.value.trim()) {
        FormValidator.hideError(this);
      }
    });
  }

  if (otroCarga) {
    otroCarga.addEventListener('blur', function() {
      if (this.required && !this.value.trim()) {
        FormValidator.showError(this, 'Especifique el tipo de carga');
      } else {
        FormValidator.hideError(this);
      }
    });

    otroCarga.addEventListener('input', function() {
      if (this.value.trim()) {
        FormValidator.hideError(this);
      }
    });
  }

  // Validación del formulario completo
  function validateForm() {
    let isValid = true;
    FormValidator.hideFormMessage();

    // Validar nombre
    if (!nombre || !nombre.value.trim()) {
      if (nombre) FormValidator.showError(nombre, 'Ingrese su nombre completo');
      isValid = false;
    } else if (nombre.value.trim().length < 2) {
      FormValidator.showError(nombre, 'El nombre debe tener al menos 2 caracteres');
      isValid = false;
    } else if (!FormValidator.validateName(nombre.value)) {
      FormValidator.showError(nombre, 'Ingrese un nombre válido (solo letras y espacios)');
      isValid = false;
    } else {
      // Limpiar el nombre
      nombre.value = FormValidator.sanitizeText(nombre.value);
    }

    // Validar WhatsApp
    if (!whatsapp || !whatsapp.value) {
      if (whatsapp) FormValidator.showError(whatsapp, 'Ingrese su número de WhatsApp');
      isValid = false;
    } else if (!FormValidator.validateWhatsApp(whatsapp.value)) {
      FormValidator.showError(whatsapp, 'Ingrese un número de WhatsApp válido');
      isValid = false;
    }

    // Validar tipo de usuario
    if (!tipoUsuario || !tipoUsuario.value) {
      if (tipoUsuario) FormValidator.showError(tipoUsuario, 'Seleccione su tipo de usuario');
      isValid = false;
    }

    // Validar ciudad
    if (!ciudad || !ciudad.value.trim()) {
      if (ciudad) FormValidator.showError(ciudad, 'Ingrese su ciudad');
      isValid = false;
    } else if (ciudad.value.trim().length < 2) {
      FormValidator.showError(ciudad, 'La ciudad debe tener al menos 2 caracteres');
      isValid = false;
    } else if (!FormValidator.validateCity(ciudad.value)) {
      FormValidator.showError(ciudad, 'Ingrese una ciudad válida');
      isValid = false;
    } else {
      // Limpiar la ciudad
      ciudad.value = FormValidator.sanitizeText(ciudad.value);
    }

    // Validar campos específicos según tipo de usuario
    const userType = tipoUsuario ? tipoUsuario.value : '';
    
    if (userType === 'transportista_independiente' || userType === 'empresa_transporte') {
      if (!tipoVehiculo || !tipoVehiculo.value) {
        if (tipoVehiculo) FormValidator.showError(tipoVehiculo, 'Seleccione el tipo de vehículo');
        isValid = false;
      } else if (tipoVehiculo.value === 'otro') {
        // Validar campo de especificación cuando se selecciona "otro"
        if (!otroVehiculo || !otroVehiculo.value.trim()) {
          if (otroVehiculo) FormValidator.showError(otroVehiculo, 'Especifique el tipo de vehículo');
          isValid = false;
        } else if (otroVehiculo.value.trim().length < 3) {
          FormValidator.showError(otroVehiculo, 'La especificación debe tener al menos 3 caracteres');
          isValid = false;
        } else {
          // Limpiar el texto
          otroVehiculo.value = FormValidator.sanitizeText(otroVehiculo.value);
        }
      }
    } else if (userType === 'generador_carga') {
      if (!tipoCarga || !tipoCarga.value) {
        if (tipoCarga) FormValidator.showError(tipoCarga, 'Seleccione el tipo de carga');
        isValid = false;
      } else if (tipoCarga.value === 'otro') {
        // Validar campo de especificación cuando se selecciona "otro"
        if (!otroCarga || !otroCarga.value.trim()) {
          if (otroCarga) FormValidator.showError(otroCarga, 'Especifique el tipo de carga');
          isValid = false;
        } else if (otroCarga.value.trim().length < 3) {
          FormValidator.showError(otroCarga, 'La especificación debe tener al menos 3 caracteres');
          isValid = false;
        } else {
          // Limpiar el texto
          otroCarga.value = FormValidator.sanitizeText(otroCarga.value);
        }
      }
    }

    // Validar interés en grupo verificado
    if (!interesVerificado || !interesVerificado.value) {
      if (interesVerificado) FormValidator.showError(interesVerificado, 'Seleccione su nivel de interés');
      isValid = false;
    }

    return isValid;
  }

  // Envío del formulario
  if (form) {
    let isSubmitting = false; // Variable para prevenir doble envío
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Prevenir doble envío
      if (isSubmitting) {
        console.log('Formulario ya está siendo enviado...');
        return;
      }
      
      if (!validateForm()) {
        FormValidator.showFormMessage('Por favor, complete todos los campos requeridos');
        return;
      }

      // Marcar como enviando
      isSubmitting = true;

      // Mostrar estado de carga
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i> Enviando...';
      }

      // Preparar datos del formulario para n8n
      const formDataObject = {};
      const formData = new FormData(form);
      
      // Convertir FormData a objeto JSON con sanitización
      for (let [key, value] of formData.entries()) {
        // Sanitizar y validar cada campo
        let sanitizedValue = FormValidator.sanitizeInput(value);
        
        // Validar longitud máxima
        if (!FormValidator.validateLength(sanitizedValue, key === 'name' || key === 'city' ? 50 : 100)) {
          FormValidator.showFormMessage('Algunos campos exceden la longitud máxima permitida');
          return;
        }
        
        formDataObject[key] = sanitizedValue;
      }
      
      // Agregar metadatos adicionales
      formDataObject.fecha_registro = new Date().toISOString();
      formDataObject.origen = 'landing_retornochile';
      formDataObject.user_agent = navigator.userAgent;
      formDataObject.url_origen = window.location.href;

      console.log('Enviando formulario:', formDataObject);

      // URL del webhook de n8n
      const webhookUrl = 'https://n8n.skinslabs.cl/webhook/registroretornochile';

      // Crear AbortController para timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 segundos timeout

      // Enviar formulario al webhook de n8n
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataObject),
        // Configuración adicional para producción
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        signal: controller.signal
      })
      .then(response => {
        clearTimeout(timeoutId); // Limpiar timeout si la request es exitosa
        console.log('Respuesta del servidor:', response);
        if (response.ok) {
          return response.json().catch(() => ({ success: true }));
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        // Mostrar mensaje de éxito
        FormValidator.showFormMessage(
          '¡Registro exitoso! Nos pondremos en contacto contigo pronto para validar tu información y agregarte al grupo Verificado.', 
          'success'
        );
        
        // Limpiar formulario después del éxito
        form.reset();
        
        // Ocultar campos específicos después del reset
        if (tipoVehiculoContainer) tipoVehiculoContainer.classList.add('hidden');
        if (tipoCargaContainer) tipoCargaContainer.classList.add('hidden');
        if (otroVehiculoContainer) otroVehiculoContainer.classList.add('hidden');
        if (otroCargaContainer) otroCargaContainer.classList.add('hidden');
        
        // Remover requerimientos después del reset
        [tipoVehiculo, tipoCarga, otroVehiculo, otroCarga].forEach(field => {
          if (field) {
            field.removeAttribute('required');
            FormValidator.hideError(field);
          }
        });
        
        // Scroll al mensaje de éxito
        setTimeout(() => {
          document.getElementById('form-message').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 100);
      })
      .catch(error => {
        clearTimeout(timeoutId); // Limpiar timeout en caso de error
        console.error('Error al enviar formulario:', error);
        
        // Mensaje de error más específico
        let errorMessage = 'Hubo un error al enviar el formulario. ';
        
        if (error.name === 'AbortError') {
          errorMessage += 'La conexión tardó demasiado. Por favor, inténtelo nuevamente.';
        } else if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
          errorMessage += 'Por favor, verifique su conexión a internet e inténtelo nuevamente.';
        } else if (error.message.includes('500')) {
          errorMessage += 'Error del servidor. Por favor, inténtelo en unos minutos.';
        } else if (error.message.includes('404')) {
          errorMessage += 'Servicio temporalmente no disponible. Por favor, inténtelo más tarde.';
        } else {
          errorMessage += 'Por favor, inténtelo nuevamente o contáctenos directamente por WhatsApp.';
        }
        
        FormValidator.showFormMessage(errorMessage);
      })
      .finally(() => {
        // Restaurar estado del botón y permitir nuevos envíos
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Enviar <span><i class="ri-arrow-right-up-line"></i></span>';
        }
      });
    });
  }
});
