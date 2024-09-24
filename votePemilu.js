let selectedCards = {};
let totalVotes = 0;

const targetDate = new Date("2024-06-11T11:45:00");
const countdownElements = {
    weeks: document.getElementById("weeks"),
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};

const requiredVotes = 5;

const updateCountdown = () => {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        document.getElementById("countdown-container").style.display = "none";
        document.getElementById("voting-container").style.display = "block";
        clearInterval(countdownInterval);
        return;
    }

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
const countdownInterval = setInterval(updateCountdown, 1000);

function handleVote(event) {
    event.stopPropagation();
    const card = event.currentTarget;
    const cardId = card.getAttribute('data-card');
    const group = card.getAttribute('data-group');

    if (!selectedCards[group]) {
        selectedCards[group] = cardId;
        totalVotes++;
        card.style.backgroundColor = '#b0e0e6';
    } else if (selectedCards[group] !== cardId) {
        const previouslySelectedCard = document.querySelector(`[data-card="${selectedCards[group]}"]`);
        previouslySelectedCard.style.backgroundColor = '';
        selectedCards[group] = cardId;
        card.style.backgroundColor = '#b0e0e6';
    }

    if (Object.keys(selectedCards).length === requiredVotes) {
        showModal();
    }
}

function showModal() {
    const modal = document.getElementById('voteModal');
    const voteSummary = document.getElementById('voteSummary');
    voteSummary.innerHTML = 'Kandidat Pilihan Anda:<br>';
    for (let group in selectedCards) {
        voteSummary.innerHTML += `${selectedCards[group]}<br>`;
    }
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('voteModal');
    modal.style.display = 'none';
}

function submitVotes() {
    showSuccessNotification();
    closeModal();
}

function showSuccessNotification() {
    const notification = document.getElementById('success-notification');
    notification.style.display = 'block';
}

function hideSuccessNotification() {
    const notification = document.getElementById('success-notification');
    notification.style.display = 'none';
    window.location.href = 'Halaman_Beranda.html';
}

function redirectToHome() {
    hideSuccessNotification();
}
