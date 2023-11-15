const countDownDate = new Date("jan 1, 2024 00:00:00").getTime();
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("seconds").innerHTML = `${seconds}`;
    document.getElementById("hours").innerHTML = `${hours}`;
    document.getElementById("days").innerHTML = `${days}`;
    document.getElementById("minutes").innerHTML = `${minutes}`;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);