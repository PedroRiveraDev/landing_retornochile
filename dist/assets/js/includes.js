// Script para cargar header y footer dinámicamente - v2025071802
document.addEventListener('DOMContentLoaded', function () {
    console.log('Includes script loaded - v2025071802');
    console.log('Current timestamp:', new Date().toISOString());

    // Definir el HTML del header directamente
    const headerHTML = `<!--...::: Header Start :::... -->
<header class="section-header relative z-30 w-full" role="banner">
    <!-- Header Bottom -->
    <div class="site-header bg-white px-5 py-4 sm:px-10 md:px-[60px] lg:py-0">
        <!-- Header Bottom Area -->
        <div class="flex items-center justify-between gap-x-8 gap-y-6 text-xl text-white">
            <div class="flex items-center gap-14">
                <!-- Header Logo -->
                <a href="index.html" class="brand-logo" aria-label="RetornosChile - Inicio">
                    <img src="assets/img/images/logo-dark.png" alt="RetornosChile Logo" width="143" height="44" />
                </a>
                <!-- Header Logo -->

                <!-- Header Navigation -->
                <div class="menu-block-wrapper">
                    <div class="menu-overlay"></div>
                    <nav class="menu-block" id="append-menu-header" role="navigation" aria-label="Navegación principal">
                        <div class="mobile-menu-head">
                            <div class="go-back" aria-label="Volver al menú anterior">
                                <i class="ri-arrow-left-s-line"></i>
                            </div>
                            <div class="current-menu-title"></div>
                            <div class="mobile-menu-close" aria-label="Cerrar menú">&times;</div>
                        </div>
                        <ul class="site-menu-main">
                            <!-- Home -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="index.html" aria-label="Ir a inicio">Inicio</a>
                            </li>

                            <!-- Cómo Funciona -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#about" aria-label="Ver cómo funciona">Comunidad Gratuita</a>
                            </li>

                            <!-- Servicios -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#servicios" aria-label="Ver servicios y características">Conecta</a>
                            </li>

                            <!-- Registro -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#contacto" aria-label="Registrarse en la plataforma">Registro</a>
                            </li>

                            <!-- Comunidad -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#comunidad" aria-label="Ver comunidad verificada">Verificados</a>
                            </li>
                            
                            <!-- Seguridad -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#sistema-reputacion" aria-label="Ver sistema de seguridad">Seguridad</a>
                            </li>


                        </ul>
                    </nav>
                </div>
                <!-- Header Navigation -->
            </div>

            <div class="flex gap-20">
                <div class="flex items-center gap-5">
                    <!-- Responsive Offcanvas Menu Button -->
                    <div class="block lg:hidden">
                        <button id="openBtn" class="hamburger-menu mobile-menu-trigger" 
                                aria-label="Abrir menú de navegación" 
                                aria-expanded="false"
                                aria-controls="append-menu-header">
                            <span class="bg-colorBlue before:bg-colorBlue after:bg-colorBlue"></span>
                        </button>
                    </div>
                    <!-- Responsive Offcanvas Menu Button -->

                    <a href="#contacto" class="btn btn-primary" aria-label="Registrarse en RetornosChile">
                        Regístrate Gratis
                        <span>
                            <i class="ri-arrow-right-up-line"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <!-- Header Bottom Area -->
    </div>
    <!-- Header Bottom -->
</header>
<!--...::: Header End :::... -->

<!-- Overlay Block -->
<div class="overlay-block fixed left-0 top-0 z-50 hidden size-full bg-black/85" onclick="closeOverlay()" role="button" tabindex="0" aria-label="Cerrar menú">
</div>
<!-- Overlay Block -->`;

    // Definir el HTML del footer directamente
    const footerHTML = `<!--...::: Footer Section Start :::... -->
<footer class="section-footer">
    <!-- Footer Background -->
    <div class="bg-colorDark text-xl text-white">
        <!-- Footer Top -->
        <div class="section-space-small">
            <!-- Section Container -->
            <div class="container">
                <!-- Footer Top Area -->
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
                    
                    <!-- Footer Widget - Brand Info -->
                    <div class="col-span-1 md:col-span-2 lg:col-span-1">
                        <div class="mb-6">
                            <img src="assets/img/images/logo-light.png" alt="RetornosChile Logo" width="143" height="44" class="mb-4" />
                            <p class="text-lg text-gray-300 leading-relaxed">
                                La plataforma que conecta transportistas con oportunidades de carga de retorno en Chile.
                            </p>
                        </div>
                        
                        <!-- Social Links -->
                        <div class="flex gap-3">
                            <a href="https://www.facebook.com/retornoschile" target="_blank" rel="noopener noreferrer"
                                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg transition-all duration-300 hover:bg-colorBlue hover:text-white hover:scale-110"
                                aria-label="Síguenos en Facebook">
                                <i class="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/retornoschile" target="_blank" rel="noopener noreferrer"
                                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg transition-all duration-300 hover:bg-colorBlue hover:text-white hover:scale-110"
                                aria-label="Síguenos en Instagram">
                                <i class="ri-instagram-line"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/retornoschile" target="_blank" rel="noopener noreferrer"
                                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg transition-all duration-300 hover:bg-colorBlue hover:text-white hover:scale-110"
                                aria-label="Síguenos en LinkedIn">
                                <i class="ri-linkedin-fill"></i>
                            </a>
                            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer"
                                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-110"
                                aria-label="Contáctanos por WhatsApp">
                                <i class="ri-whatsapp-fill"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Footer Widget - Quick Links -->
                    <div>
                        <h3 class="mb-6 text-xl font-semibold text-white">Enlaces Rápidos</h3>
                        <nav class="flex flex-col gap-3">
                            <a href="#about" class="footer-link">
                                Comunidad Gratuita
                            </a>
                            <a href="#servicios" class="footer-link">
                                Conecta
                            </a>
                            <a href="#comunidad" class="footer-link">
                                Comunidad Verificada
                            </a>
                            <a href="#sistema-reputacion" class="footer-link">
                                Seguridad
                            </a>
                            <a href="#resenas" class="footer-link">
                                Testimonios
                            </a>
                            <a href="#contacto" class="footer-link">
                                Registro
                            </a>
                        </nav>
                    </div>
                    
                    <!-- Footer Widget - Information -->
                    <div>
                        <h3 class="mb-6 text-xl font-semibold text-white">Información</h3>
                        <nav class="flex flex-col gap-3">
                            <a href="#about" class="footer-link">
                                Comunidad Gratuita
                            </a>
                            <a href="#faq" class="footer-link">
                                Preguntas Frecuentes
                            </a>
                            <a href="#" class="footer-link">
                                Política de Privacidad
                            </a>
                            <a href="#" class="footer-link">
                                Términos y Condiciones
                            </a>
                            <a href="#" class="footer-link">
                                Ayuda
                            </a>
                        </nav>
                    </div>
                    
                </div>
                <!-- Footer Top Area -->
            </div>
            <!-- Section Container -->
        </div>
        <!-- Footer Top -->
        
        <!-- Footer Bottom -->
        <div class="border-t border-gray-700 padding bottom-0">
            <div class="container">
                <div class="py-6">
                    <!-- Footer Bottom Content -->
                    <div class="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                        <div class="footer-bottom-text">
                            <p class="text-sm text-gray-400">
                                Copyright &copy;
                                <span id="copyright-year">2025</span> RetornosChile. Todos los derechos reservados.
                            </p>
                        </div>

                    </div>
                    <!-- Footer Bottom Content -->
                </div>
            </div>
        </div>
        <!-- Footer Bottom -->
    </div>
    <!-- Footer Background -->
</footer>
<!--...::: Footer Section End :::... -->`;

    // Inyectar el HTML directamente
    function injectHTML() {
        console.log('Iniciando inyección de HTML...');

        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;
            console.log('Header inyectado exitosamente');

            // Verificar que se haya inyectado correctamente
            const injectedHeader = headerPlaceholder.querySelector('header');
            if (injectedHeader) {
                console.log('Header verificado correctamente');
            } else {
                console.error('Error: Header no se inyectó correctamente');
            }
        } else {
            console.error('Error: Header placeholder no encontrado');
        }

        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
            console.log('Footer inyectado exitosamente');
        } else {
            console.error('Error: Footer placeholder no encontrado');
        }

        // Inicializar scripts del menú después de que el DOM esté listo
        setTimeout(() => {
            initializeMenuScripts();
            console.log('Scripts del menú inicializados');
        }, 100);
    }

    // Ejecutar inmediatamente la inyección
    try {
        injectHTML();
    } catch (error) {
        console.error('Error al inyectar HTML:', error);
    }
});

// Funciones globales para manejo del overlay y menú
function closeOverlay() {
    const menu = document.querySelector(".menu-block");
    const menuOverlay = document.querySelector(".menu-overlay");
    const overlayBlock = document.querySelector('.overlay-block');

    if (menu && menu.classList.contains('active')) {
        toggleMobileMenu();
    }

    if (overlayBlock) {
        overlayBlock.classList.add('hidden');
    }
}

// Función para toggle del menú móvil
function toggleMobileMenu() {
    const menu = document.querySelector(".menu-block");
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuTrigger = document.querySelector(".mobile-menu-trigger");

    if (menu) {
        menu.classList.toggle("active");

        // Actualizar aria-expanded del botón del menú
        if (menuTrigger) {
            const isOpen = menu.classList.contains('active');
            menuTrigger.setAttribute('aria-expanded', isOpen.toString());
        }
    }
    if (menuOverlay) {
        menuOverlay.classList.toggle("active");
    }
}

// Función para reinicializar los scripts del menú después de cargar el header
function initializeMenuScripts() {
    console.log('Inicializando scripts del menú...');

    // Reinicializar el menú móvil
    initializeMobileMenu();

    // Inicializar smooth scroll para navegación
    initializeSmoothScroll();

    // Inicializar sticky header si no está ya inicializado
    if (!window.stickyHeaderInitialized) {
        initializeStickyHeader();
        window.stickyHeaderInitialized = true;
    }
}

// Función para inicializar el menú móvil
function initializeMobileMenu() {
    const menu = document.querySelector(".menu-block");
    const menuMain = menu?.querySelector(".site-menu-main");
    const menuTrigger = document.querySelector(".mobile-menu-trigger");
    const closeMenu = menu?.querySelector(".mobile-menu-close");
    const menuOverlay = document.querySelector(".menu-overlay");

    if (!menuTrigger || !menu) {
        console.warn('Elementos del menú móvil no encontrados');
        return;
    }

    // Limpiar event listeners existentes
    const newMenuTrigger = menuTrigger.cloneNode(true);
    menuTrigger.parentNode.replaceChild(newMenuTrigger, menuTrigger);

    // Agregar nuevo event listener
    newMenuTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMobileMenu();
    });

    if (closeMenu) {
        const newCloseMenu = closeMenu.cloneNode(true);
        closeMenu.parentNode.replaceChild(newCloseMenu, closeMenu);

        newCloseMenu.addEventListener('click', function (e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', function () {
            toggleMobileMenu();
        });
    }

    // Cerrar menú cuando se redimensiona la ventana
    window.addEventListener('resize', function () {
        if (window.innerWidth > 991 && menu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
}

// Función para inicializar smooth scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Cerrar menú móvil si está abierto
                const menu = document.querySelector(".menu-block");
                if (menu && menu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Función para inicializar sticky header
function initializeStickyHeader() {
    window.addEventListener("scroll", function () {
        let header = document.querySelector(".site-header");
        if (header) {
            header.classList.toggle("scrolling", window.scrollY > 0);
        }
    });
}

// Hacer las funciones globales disponibles
window.closeOverlay = closeOverlay;
window.toggleMobileMenu = toggleMobileMenu;
