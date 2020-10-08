const hora = new Date().getHours();

console.log("Hora atual: " + hora + "h");

if (hora < 6) {
    console.log("Boa Madrugada!");
} else if (hora >= 6 && hora < 12) {
    console.log("Bom Dia!");
} else if (hora >= 12 && hora < 18) {
    console.log("Boa Tarde!");
} else {
    console.log("Boa Noite!");
}