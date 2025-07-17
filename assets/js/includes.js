// Script para cargar header y footer dinámicamente
document.addEventListener('DOMContentLoaded', function () {
    console.log('Includes script loaded');

    // Definir el HTML del header directamente
    const headerHTML = `<!--...::: Header Start :::... -->
<header class="section-header relative z-30 w-full">
    <!-- Header Bottom -->
    <div class="site-header bg-white px-5 py-4 sm:px-10 md:px-[60px] lg:py-0">
        <!-- Header Bottom Area -->
        <div class="flex items-center justify-between gap-x-8 gap-y-6 text-xl text-white">
            <div class="flex items-center gap-14">
                <!-- Header Logo -->
                <a href="index.html">
                    <img src="assets/img/images/logo-dark.png" alt="logo-dark" width="143" height="44" />
                </a>
                <!-- Header Logo -->

                <!-- Header Navigation -->
                <div class="menu-block-wrapper">
                    <div class="menu-overlay"></div>
                    <nav class="menu-block" id="append-menu-header">
                        <div class="mobile-menu-head">
                            <div class="go-back">
                                <i class="ri-arrow-left-s-line"></i>
                            </div>
                            <div class="current-menu-title"></div>
                            <div class="mobile-menu-close">&times;</div>
                        </div>
                        <ul class="site-menu-main">
                            <!-- Home -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="index.html">Inicio</a>
                            </li>


                            <!-- Servicio -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#about">Servicio</a>
                            </li>

                                                        <!-- Pricing -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#precios">Precio</a>
                            </li>


                                                        <!-- FAQ -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#faq">FAQ</a>
                            </li>

                                                        <!-- Reseñas -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#resenas">Reseñas</a>
                            </li>

                                                        <!-- Contact -->
                            <li class="nav-item">
                                <a class="nav-link-item text-colorDark" href="#contacto">Contacto</a>
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
                        <button id="openBtn" class="hamburger-menu mobile-menu-trigger">
                            <span class="bg-colorBlue before:bg-colorBlue after:bg-colorBlue"></span>
                        </button>
                    </div>
                    <!-- Responsive Offcanvas Menu Button -->

                    <a href="#contacto" class="btn btn-primary hidden xl:inline-flex">
                        Contáctanos
                        <span>
                            <i class="ri-arrow-right-up-line"></i>
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


<div id="info-menu-block"
    class="fixed right-0 top-0 z-[999] flex min-h-dvh max-w-md translate-x-full flex-col justify-between gap-10 bg-white px-12 py-16 transition-all duration-300">
    <button class="absolute right-8 top-8 text-[2rem] leading-none text-[#6E6E77] hover:text-colorBlue"
        onclick="closeInfoMenu()">
        <i class="ri-close-large-fill"></i>
    </button>

    <!-- Info Menu Top Block -->
    <div>
        <a href="index.html" class="mb-6 block">
            <img src="assets/img/images/logo-dark.png" alt="logo-dark" width="143" height="44" />
        </a>
        <p>
            Vast numbers of employees now work remotely, and it's too late to
            develop a set of remote-work policies if you didn't already have
            one.
        </p>
    </div>
    <!-- Info Menu Top Block -->

    <!-- Info Menu Bottom Block -->
    <div class="mt-auto">
        <ul class="flex flex-col gap-y-12">
            <li>
                <span class="text-colorBlue">
                    <i class="ri-map-pin-2-fill"></i>
                </span>
                <span class="mb-1.5 mt-4 block text-2xl font-semibold">Address</span>
                <address class="block max-w-52">
                    1791 Yorkshire Circle Kitty Hawk, NC 279499
                </address>
            </li>
            <li>
                <span class="text-colorBlue">
                    <i class="ri-mail-fill"></i>
                </span>
                <span class="mb-1.5 mt-4 block text-2xl font-semibold">Contact</span>
                <a href="mailto:tekup@example.com" class="block hover:text-colorBlue">tekup@example.com</a>
                <a href="tel:+5185643200" class="block hover:text-colorBlue">518-564-3200</a>
            </li>
            <li>
                <div class="flex gap-2">
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"
                        class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-colorGrey text-lg hover:bg-colorBlue hover:text-white">
                        <i class="ri-twitter-x-line"></i>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                        class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-colorGrey text-lg hover:bg-colorBlue hover:text-white">
                        <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                        class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-colorGrey text-lg hover:bg-colorBlue hover:text-white">
                        <i class="ri-instagram-line"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                        class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-colorGrey text-lg hover:bg-colorBlue hover:text-white">
                        <i class="ri-linkedin-fill"></i>
                    </a>
                </div>
            </li>
        </ul>
    </div>
    <!-- Info Menu Bottom Block -->
</div>
<!-- Info Offcanvas Block -->

<!-- Overlay Block -->
<div class="overlay-block fixed left-0 top-0 z-50 hidden size-full bg-black/85" onclick="closeOverlay()">
</div>
<!-- Overlay Block -->`;

    // Definir el HTML del footer directamente
    const footerHTML = `<!--...::: Footer Section Start :::... -->
<footer class="section-footer">
    <!-- Footer Background -->
    <div class="bg-colorDark text-xl text-white">
        <!-- Footer Top -->
        <div class="section-space">
            <!-- Section Container -->
            <div class="container">
                <!-- Footer Top Area -->
                <div class="flex flex-wrap gap-x-10 gap-y-[60px] lg:justify-between">
                    <!-- Footer Widget - Navigation -->
                    <div>
                        <span class="mb-7 block text-[26px] font-semibold leading-[1.3]">Enlaces Rápidos</span>
                        <nav class="flex flex-col gap-y-3">
                            <a href="#about">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                                    Servicio
                                </span>
                            </a>
                            <a href="#precios">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Precios</span>
                            </a>
                            <a href="#faq">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">FAQ</span>
                            </a>
                            <a href="#resenas">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Reseñas</span>
                            </a>
                            <a href="#contacto">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contacto</span>
                            </a>
                        </nav>
                    </div>
                    <!-- Footer Widget - Navigation -->



                    <!-- Footer Widget - Information -->
                    <div>
                        <span class="mb-7 block text-[26px] font-semibold leading-[1.3]">Información</span>
                        <nav class="flex flex-col gap-y-3">
                            <a href="#about">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                                    Cómo Funciona
                                </span>
                            </a>
                            <a href="#">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Política de Privacidad</span>
                            </a>
                            <a href="#">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Términos y Condiciones</span>
                            </a>
                            <a href="#faq">
                                <span
                                    class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Preguntas Frecuentes</span>
                            </a>
                        </nav>
                    </div>
                    <!-- Footer Widget - Information -->

                    <!-- Footer Widget - Contact -->
                    <div class="max-w-80 xl:max-w-[416px]">
                        <span class="mb-7 block text-[26px] font-semibold leading-[1.3]">Contáctanos</span>
                        <p class="mb-6">
                            ¿Listo para optimizar tus retornos? Únete a la comunidad de transporte más confiable de Chile.
                        </p>

                        <!-- Contact Info -->
                        <div class="mb-6 space-y-4">
                            <div class="flex items-center gap-3">
                                <i class="ri-mail-fill text-colorBlue"></i>
                                <a href="mailto:contacto@retornoschile.cl" class="hover:text-colorBlue">contacto@retornoschile.cl</a>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="ri-whatsapp-fill text-colorBlue"></i>
                                <a href="https://wa.me/56912345678" class="hover:text-colorBlue">+56 9 1234 5678</a>
                            </div>
                        </div>

                        <!-- Social Links -->
                        <div class="flex gap-2">
                            <a href="https://www.facebook.com/retornoschile" target="_blank" rel="noopener noreferrer"
                                class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F202E] text-lg hover:bg-colorBlue hover:text-white">
                                <i class="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/retornoschile" target="_blank" rel="noopener noreferrer"
                                class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F202E] text-lg hover:bg-colorBlue hover:text-white">
                                <i class="ri-instagram-line"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/retornoschile" target="_blank" rel="noopener noreferrer"
                                class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F202E] text-lg hover:bg-colorBlue hover:text-white">
                                <i class="ri-linkedin-fill"></i>
                            </a>
                            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer"
                                class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F202E] text-lg hover:bg-colorBlue hover:text-white">
                                <i class="ri-whatsapp-fill"></i>
                            </a>
                        </div>
                        <!-- Social Links -->
                    </div>
                    <!-- Footer Widget - Contact -->
                </div>
                <!-- Footer Top Area -->
            </div>
            <!-- Section Container -->
        </div>
        <!-- Footer Top -->
        <div class="container border-t border-white/10"></div>
        <!-- Footer Bottom -->
        <div class="py-11">
            <!-- Section Container -->
            <div class="container">
                <!-- Footer Area -->
                <div class="text-center">
                    <p class="mb-0">
                        Copyright &copy;
                        <span id="copyright-year">2025</span> RetornosChile. Todos los derechos reservados.
                    </p>
                </div>
                <!-- Footer Area -->
            </div>
            <!-- Section Container -->
        </div>
        <!-- Footer Bottom -->
    </div>
    <!-- Footer Background -->
</footer>
<!--...::: Footer Section End :::... -->`;

    // Inyectar el HTML directamente
    function injectHTML() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;
            console.log('Header inyectado exitosamente');
        } else {
            console.error('Header placeholder no encontrado');
        }

        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
            console.log('Footer inyectado exitosamente');
        } else {
            console.error('Footer placeholder no encontrado');
        }

        // Inicializar scripts del menú después de un breve delay
        setTimeout(initializeMenuScripts, 100);
    }

    // Ejecutar inmediatamente
    injectHTML();

    // También intentar cargar desde archivos como fallback/debugging
    loadHTMLFromFiles();

    function loadHTMLFromFiles() {
        // Función para cargar archivos HTML con XMLHttpRequest como fallback
        function loadHTML(file, elementId) {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Archivo cargado exitosamente:', file);
                    } else {
                        console.log('No se pudo cargar el archivo:', file, '(usando HTML embebido en su lugar)');
                    }
                }
            };
            xhr.open('GET', file, true);
            xhr.send();
        }
    }
});

// Función para reinicializar los scripts del menú después de cargar el header
function initializeMenuScripts() {
    // Reinicializar el menú móvil y otros scripts relacionados con el header
    if (typeof window.initMenu === 'function') {
        window.initMenu();
    }

    // Reinicializar eventos del header si es necesario
    const openBtn = document.getElementById('openBtn');
    const headerInfoMenuBlock = document.getElementById('info-menu-block');
    const headerOverlayBlock = document.querySelector('.overlay-block');

    if (openBtn && headerInfoMenuBlock) {
        openBtn.addEventListener('click', function () {
            headerInfoMenuBlock.classList.remove('translate-x-full');
            if (headerOverlayBlock) {
                headerOverlayBlock.classList.remove('hidden');
            }
        });
    }
}

// Función para cerrar el menú de información
function closeInfoMenu() {
    const headerInfoMenuBlock = document.getElementById('info-menu-block');
    const headerOverlayBlock = document.querySelector('.overlay-block');

    if (headerInfoMenuBlock) {
        headerInfoMenuBlock.classList.add('translate-x-full');
    }
    if (headerOverlayBlock) {
        headerOverlayBlock.classList.add('hidden');
    }
}

// Función para cerrar overlay
function closeOverlay() {
    closeInfoMenu();
}

// Hacer las funciones globales para que puedan ser llamadas desde el HTML
window.closeInfoMenu = closeInfoMenu;
window.closeOverlay = closeOverlay;
