/* Exemplo 03 - else if */

let diaSemana = new Date();

numeroSemana = diaSemana.getDay();

if(numeroSemana == 1) {
    console.log("Segunda Feira");
} else if (numeroSemana == 2) {
    console.log("Terça Feira");
} else if (numeroSemana == 3) {
    console.log("Quarta Feira");
} else if(numeroSemana == 4) {
    console.log("Quinta Feira");
} else if(numeroSemana == 5) {
    console.log("Sexta Feira");
} else if(numeroSemana == 6) {
    console.log("Sábado");
} else {
    console.log("Domingo");
}