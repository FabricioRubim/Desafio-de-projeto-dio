const nomeDoHeroi = "Sans";
let nivel = 1500;

if (nivel <= 1000) {
    console.log("Ferro");
}

else if (nivel >= 1001 && 2000) {
    console.log("Bronze");
}

else if (nivel >= 2001 && 5000) {
    console.log("Prata");
}

else if (nivel >= 5001 && 7000) {
    console.log("Ouro");
}

else if (nivel >= 7001 && 8000) {
    console.log("Platina diamante");
}

else if (nivel >= 8001 && 9000) {
    console.log("Ascendente");
}

else if (nivel >= 9001 && 10000) {
    console.log("Imortal");
}

else if (nivel >= 10001) {
    console.log("Radiante");
}

console.log("O Heroi nome de " + nomeDoHeroi + " está no nivel de " + nivel);