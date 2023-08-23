// ---------Inserisco la data da ragiungere
let cdTarget = new Date("Aug 24, 202 09:30:00").getTime();

// ---------Inserisco la data attuale
let start = Date.now();

console.log(start);
console.log(cdTarget);

//----------Inserisco la differenza
let timeLeft = cdTarget - start;
console.log(timeLeft);
