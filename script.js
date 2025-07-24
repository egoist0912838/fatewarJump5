
const countdownEl = document.getElementById("countdown");
const launchDate = new Date("2025-08-04T16:00:00Z").getTime(); // 19:00 МСК = 16:00 UTC

function updateCountdown() {
  const now = new Date().getTime();
  const diff = launchDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "⚔️ Событие уже началось!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
