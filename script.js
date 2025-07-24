
const countdownTarget = document.getElementById("countdown");
const launchDate = new Date("2025-08-04T16:00:00Z").getTime(); // 19:00 МСК

function updateCountdown() {
  const now = new Date().getTime();
  const diff = launchDate - now;

  if (diff <= 0) {
    countdownTarget.textContent = "⚔️ Событие началось!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownTarget.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
