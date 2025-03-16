
function updateCountdown() {
    const campDate = new Date("June 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = campDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerHTML = days + " Days Left for the Summer Camp!";
}

updateCountdown();
setInterval(updateCountdown, 1000);

function openTab(evt, tabName) {
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}