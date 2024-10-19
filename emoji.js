let e = document.getElementById("emoji");
let a = 128512;
function genEmoji() {
    let b = Math.floor(Math.random() * 64);
    e.innerHTML = "&#" + (a + b) + ";"
    // console.log(e.innerText)
}
function formatDateTime(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = days[date.getDay()]; // Get the name of the day
    const day = String(date.getDate()).padStart(2, '0'); // Get the day of the month
    const monthName = months[date.getMonth()]; // Get the name of the month
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${dayName}, ${day} ${monthName}&nbsp;&nbsp; ${hours}:${minutes}`;//:${seconds}`;
}

function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').innerHTML = formatDateTime(now);
}

updateDateTime();
setInterval(updateDateTime, 1000);
