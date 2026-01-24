setTimeout(() => {
    document.getElementById("animation-entry").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
}, 3000);

const btnMenu = document.querySelector('#btnMenu');
const lines = document.querySelectorAll('.line-button');

btnMenu.addEventListener('click', () => {
    openMenu();
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

function openMenu() {
    const navBar = document.querySelector("#navBar");
    navBar.classList.toggle('hidden');
    navBar.classList.toggle('flex');
}