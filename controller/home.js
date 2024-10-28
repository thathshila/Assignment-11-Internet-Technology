function updateDateTime() {
    const now = new Date();
    const dateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById('date-time').textContent = dateTime;
}
setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call to set the time