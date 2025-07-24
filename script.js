// Countdown to August 4, 2025, 19:00 MSK
const countdownEl = document.getElementById("countdown");
const launchDate = new Date("2025-08-04T16:00:00Z").getTime(); // 19:00 MSK = 16:00 UTC
function updateCountdown() {
  const now = new Date().getTime();
  const diff = launchDate - now;
  if (diff <= 0) {
    countdownEl.innerHTML = "Событие началось!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdownEl.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
setInterval(updateCountdown, 1000);
updateCountdown();
async function fetchDiscordCount() {
  try {
    const res = await fetch('https://discord.com/api/guilds/130225748359459648/widget.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    document.getElementById('discord-count').textContent = data.presence_count;
  } catch (e) {
    document.getElementById('discord-count').textContent = '—';
async function fetchTelegramCount() {
    // Telegram API требует прокси-сервер, тут заглушка
    document.getElementById('telegram-count').textContent = '≈ 300+';
    document.getElementById('telegram-count').textContent = '—';
fetchDiscordCount();
fetchTelegramCount();
setInterval(fetchDiscordCount, 60000);
setInterval(fetchTelegramCount, 60000);
// Звуковой эффект на клик по кнопкам и ссылкам
const clickSound = new Audio('assets/click.mp3');
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  });