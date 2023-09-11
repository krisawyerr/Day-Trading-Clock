function updateTokyoTime() {
    const TokyoTimeElement = document.getElementById("TokyoTime");
    const TokyoTimeZoneOffset = -0 * 60; 
    const now = new Date();
    now.setMinutes(now.getMinutes() + TokyoTimeZoneOffset);
    const timeString = now.toLocaleTimeString("en-US", { timeZone: 'Asia/Tokyo' });
    TokyoTimeElement.textContent = timeString;
}
setInterval(updateTokyoTime, 1000);
updateTokyoTime();
function updateCountdownTimer() {
    const countdownTimerElement = document.getElementById("countdownTimer");
    const now = new Date();
    const TokyoTimeZone = 'Asia/Tokyo';
    const currentDateTime = new Date(
        now.toLocaleString("en-US", { timeZone: TokyoTimeZone })
    );
    const openingTime = new Date(currentDateTime);
    openingTime.setHours(9, 0, 0, 0);
    const restartTime = new Date(currentDateTime);
    restartTime.setHours(15, 0, 0, 0);
    const timeDiff = openingTime - currentDateTime;
    if (timeDiff > 0) {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        const countdownString = `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        countdownTimerElement.textContent = countdownString;
    } else if (currentDateTime >= restartTime) {
        const nextOpeningTime = new Date(currentDateTime);
        nextOpeningTime.setDate(nextOpeningTime.getDate() + 1); 
        nextOpeningTime.setHours(9, 30, 0, 0);
        const timeDiff = nextOpeningTime - currentDateTime;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        const countdownString = `${hours.toString().padStart(2, "0")}:${minutes
            .toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        countdownTimerElement.textContent = countdownString;
    } else {
        countdownTimerElement.textContent = "Market is open!";
    }
}
setInterval(updateCountdownTimer, 1000);
updateCountdownTimer();
