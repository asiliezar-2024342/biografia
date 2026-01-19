export class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="relative w-full md:p-0 bg-transparent z-50 md:fixed top-0 left-0 right-0 md:w-full">
                <button id="btnMenu" class="md:hidden group flex flex-col justify-center items-center gap-1.5 w-10 h-10 border-none absolute top-0 left-0 z-50">
                    <span class="line-button"></span>
                    <span class="line-button"></span>
                    <span class="line-button"></span>
                </button>

                
                <nav class="hidden flex-col md:flex md:flex-row w-full h-dvh p-2 justify-center items-center md:justify-between gap-5 bg-white md:bg-primary-dark/35 md:backdrop-blur-md md:border-b border-white/10 md:text-white absolute top-0 left-0 md:h-auto md:w-full" id="navBar">
                    
                    <picture>
                        <source media="(max-width: 768px)" srcset="/src/assets/img/logo.avif" type="image/avif">
                        <source media="(min-width: 768px)" srcset="/src/assets/img/logo-ligth.avif" type="image/avif">
                        <img alt="Logo" class="h-16"/>
                    </picture> 

                    <ul class="flex flex-col justify-center items-center md:flex-row gap-5 ">
                        <li class="hover:text-primary md:hover:text-primary-light transition-colors duration-300"><a href="/index.html">Interés</a></li>
                        <li class="hover:text-primary md:hover:text-primary-light transition-colors duration-300"><a href="/src/pages/biography.html">Biografía</a></li>
                    </ul>
                    <button class="bg-primary-dark text-white p-2 rounded-lg cursor-pointer hover:bg-primary transition-colors duration-300">Ir a Kinal</button>
                </nav>
            </header>`;


        this.#setupAnimation();
    }

    #setupAnimation() {
        const btnMenu = this.querySelector('#btnMenu');
        const lines = this.querySelectorAll('.line-button');

        btnMenu.addEventListener('click', () => {
            this.#openMenu();
            // Línea superior
            lines[0].classList.toggle('rotate-45');
            lines[0].classList.toggle('translate-y-2.5');
            // Línea media
            lines[1].classList.toggle('opacity-0');
            // Línea inferior
            lines[2].classList.toggle('-rotate-45');
            lines[2].classList.toggle('-translate-y-2.5');

            document.body.classList.toggle('overflow-hidden');
        });

    }

    #openMenu() {
        const navBar = this.querySelector("#navBar");
        navBar.classList.toggle('hidden');
        navBar.classList.toggle('flex');
    }
}
customElements.define('nav-bar', Header);