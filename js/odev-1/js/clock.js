
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let dayNumber = date.getDay();
    let days = {
        1: "Pazartesi",
        2: "Salı",
        3: "Çarşamba",
        4: "Perşembe",
        5: "Cuma",
        6: "Cumartesi",
        7: "pazar"
    }
    let currentDay = days[dayNumber];
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = `${hour}:${min}:${sec} ${currentDay}`;
    setTimeout(
        currentTime,
        1000
    );
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

function getName() {
    let name = window.prompt("Lütfen adınızı giriniz.");
    document.getElementById("myName").innerText = name;

}
currentTime();
getName();