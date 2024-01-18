const dataAttuale = new Date();
const dataProssima = new Date("2024-01-19 , 09:30");
let millisecondiAttuali = dataAttuale.getTime();
let millisecondiProssimi = dataProssima.getTime();
let tempoMancante = document.getElementById("tempo-mancante");


document.getElementById("data-attuale").innerHTML = `<h3> ${dataAttuale} </h3>`
document.getElementById("data-prossima").innerHTML = `<h3> ${dataProssima} </h3>`


function countdown(){
    let risultato = millisecondiProssimi - millisecondiAttuali;
    
    let ore = Math.floor(risultato / (1000 * 60 * 60));
    let minuti = Math.floor((risultato % (1000 * 60 * 60)) / (1000 * 60));
    let secondi = Math.floor((risultato % (1000 * 60)) / 1000);
    document.getElementById("tempo-mancante").innerHTML = "<h4>"+ ore + " " + "ore" + " " + minuti + " " + "minuti e" + " " + secondi + " " + "secondi" + "</h4>"
}
setInterval (countdown, 1);
