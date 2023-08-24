// ---------Inserisco la data da ragiungere
const cdTarget = new Date("Aug 25, 2023 09:30:00").getTime();

// ----------Aggiorno il countdown ogni secondo
var countDown = setInterval(function () {
  // ---------Inserisco la data attuale
  let start = Date.now();

  //----------Inserisco la differenza
  let timeLeft = cdTarget - start;

  // ----------Converto il tempo
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // ----------Inserisco i Dati negli appositi spazi in HTML
  document.getElementById(`days`).innerHTML = days;
  document.getElementById(`hours`).innerHTML = hours;
  document.getElementById(`minutes`).innerHTML = minutes;
  document.getElementById(`seconds`).innerHTML = seconds;

  // ----------finito il countdown,i timer si fermano
  if (timeLeft <= 0) {
    clearInterval(countDown);
  }
}, 1000);
