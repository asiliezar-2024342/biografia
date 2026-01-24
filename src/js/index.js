import { Header } from "./components/NavBar.js";

let timer = document.getElementById("timer");
let timeSection = document.getElementById("time-section");
let timerMinutes = document.getElementById("timer-minutes");

let timeLeft = 24; // Segundos
let counter = null;

const observerTimeSection = new IntersectionObserver((entries) => {

    entries.forEach((section) => {

        if (section.isIntersecting) {
            // Si el contador ya esta activo no hacer nada
            if (counter || timeLeft <= 0) return;

            counter = setInterval(() => {
                timeLeft--;

                const seconds = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
                timer.textContent = seconds;

                if (timeLeft <= 0) {
                    clearInterval(counter);
                    counter = null;
                    timeSection.classList.toggle("bg-red-500");
                    timerMinutes.classList.toggle("timer-neon");
                }

            }, 1000);

        } else {
            // Cuando el usuario no ve la sección
            if (counter) {
                clearInterval(counter);
                counter = null;
            }
        }
    });
}, {
    // Al 38% de visibilidad comenzar el contador
    threshold: 0.38
});

observerTimeSection.observe(timeSection);