document.addEventListener('DOMContentLoaded', function () {
    console.log("Coblos Digital Loaded");

    const targetDate = new Date("2024-06-11T11:45:00");
    const countdownElements = {
        weeks: document.getElementById("weeks"),
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    const updateCountdown = () => { 
        const now = new Date();
        const timeRemaining = targetDate - now;

        const weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElements.weeks.textContent = weeks.toString().padStart(2, '0');
        countdownElements.days.textContent = days.toString().padStart(2, '0');
        countdownElements.hours.textContent = hours.toString().padStart(2, '0');
        countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
        countdownElements.seconds.textContent = seconds.toString().padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.style.display = 'block';
        });

        toggle.addEventListener('mouseleave', (e) => {
            const dropdownMenu = toggle.nextElementSibling;
            setTimeout(() => {
                if (!dropdownMenu.matches(':hover')) {
                    dropdownMenu.style.display = 'none';
                }
            }, 300);
        });
    });
});
