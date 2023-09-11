function updatehongKongTime() {
    const hongKongTimeElement = document.getElementById("hongKongTime");
    const hongKongTimeZoneOffset = -0 * 60; 
    const now = new Date();
    now.setMinutes(now.getMinutes() + hongKongTimeZoneOffset);
    const timeString = now.toLocaleTimeString("en-US", { timeZone: 'Asia/Hong_Kong' });
    hongKongTimeElement.textContent = timeString;
}
setInterval(updatehongKongTime, 1000);
updatehongKongTime();
function updateCountdownTimer() {
    const countdownTimerElement = document.getElementById("countdownTimer");
    const now = new Date();
    const hongKongTimeZone = 'Asia/Hong_Kong';
    const currentDateTime = new Date(
        now.toLocaleString("en-US", { timeZone: hongKongTimeZone })
    );
    const openingTime = new Date(currentDateTime);
    openingTime.setHours(9, 30, 0, 0);
    const restartTime = new Date(currentDateTime);
    restartTime.setHours(16, 0, 0, 0);
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