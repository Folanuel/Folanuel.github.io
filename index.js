const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = "AM";

    if (hour > 12) {
        hour -= 12;
        ampm = "PM";
    }
    // if (hour == 0) {
    //     hour = 12;
    //     ampm = "AM"
    // }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hourEl.innerText = hour;
    minutesEl.innerText = min;
    secondEl.innerText = sec;
    ampmEl.innerText = ampm; 
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock()