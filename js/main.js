// ---------Inserisco la data da ragiungere
const cdTarget = new Date("Aug 24, 2023 09:30:00").getTime();

// ---------Inserisco la data attuale
let start = Date.now();

//----------Inserisco la differenza
let timeLeft = cdTarget - start;

//----------Converto il tempo
let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//----------Inserisco i Dati negli appositi spazi in HTML
document.getElementById(`days`).innerHTML = days;
document.getElementById(`hours`).innerHTML = hours;
// document.getElementById(`minutes`).innerHTML = minutes;
// document.getElementById(`seconds`).innerHTML = seconds;

//----------Inizializzo il Countdown
//secondi
setInterval(function () {
  document.getElementById(`seconds`).innerHTML = seconds--;
  if (seconds <= 0) {
    document.getElementById(`seconds`).innerHTML = seconds--;
  }
}, 1000);

//minuti
setInterval(
  (function () {
    document.getElementById(`minutes`).innerHTML = minutes--;
  })(1000 * 60 * 60) /
    (1000 * 60)
);
//ore
