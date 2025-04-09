
function updateCountdown() {
    const campDate = new Date("June 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = campDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerHTML = days + " Days Left for the Summer Camp!";
}

updateCountdown();
setInterval(updateCountdown, 1000);

function openTab(evt, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    contents.forEach(c => c.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
  }
