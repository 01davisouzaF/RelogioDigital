const hrs = document.getElementById("hours");
const min = document.getElementById("minutes");
const sds = document.getElementById("seconds");

const watch = setInterval(function time() {
    let datetoday = new Date();
    let hours = datetoday.getHours();
    let minutes = datetoday.getMinutes();
    let seconds = datetoday.getSeconds();  

    if (hours < 10) hours = '0' + hours;

    if (minutes < 10) minutes = '0' + minutes;

    if (seconds < 10) seconds = '0' + seconds;

    hrs.textContent = hours;
    min.textContent = minutes;
    sds.textContent = seconds;

})