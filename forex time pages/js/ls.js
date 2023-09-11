function updateLondonTime() {
    const londonTimeElement = document.getElementById("londonTime");
    const londonTimeZoneOffset = -0 * 60; 
    const now = new Date();
    now.setMinutes(now.getMinutes() + londonTimeZoneOffset);
    const timeString = now.toLocaleTimeString("en-US", { timeZone: 'Europe/London' });
    londonTimeElement.textContent = timeString;
}
setInterval(updateLondonTime, 1000);
updateLondonTime();
function updateCountdownTimer() {
    const countdownTimerElement = document.getElementById("countdownTimer");
    const now = new Date();
    const londonTimeZone = 'Europe/London';
    const currentDateTime = new Date(
        now.toLocaleString("en-US", { timeZone: londonTimeZone })
    );
    const openingTime = new Date(currentDateTime);
    openingTime.setHours(8, 0, 0, 0);
    const restartTime = new Date(currentDateTime);
    restartTime.setHours(17, 30, 0, 0);
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