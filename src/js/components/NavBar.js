export class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="p-4 md:p-0 bg-white drop-shadow-xl h-auto md:sticky md:top-0 md:z-50">
                <button id="btnMenu" class="md:hidden group flex flex-col justify-center items-center gap-1.5 w-10 h-10 border-none">
                    <span class="line-button"></span>
                    <span class="line-button"></span>
                    <span class="line-button"></span>
                </button>

                <nav class="hidden flex-col md:flex md:flex-row w-full h-full p-5 justify-center items-center md:justify-between gap-5" id="navBar">
                    <img src="./src/assets/img/logo.webp" alt="Logo" class="h-16"/> 
                    <ul class="flex flex-col justify-center items-center md:flex-row gap-5">
                        <li class="hover:text-primary transition-colors duration-300"><a href="index.html">Interés</a></li>
                        <li class="hover:text-primary transition-colors duration-300"><a href="biografia.html">Biografía</a></li>
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