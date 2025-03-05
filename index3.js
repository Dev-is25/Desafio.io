let ranking = soma(85, 2)
console.log(ranking)

function soma(vitoria, derrota) {
    let ranking = vitoria - derrota
    return ranking
}

if (ranking <= 10) {
    console.log("Ferro")
}
else if (ranking >= 11 && ranking <= 20) {
    console.log("Bronze")
}
else if (ranking >= 21 && ranking <= 50) {
    console.log("Prata")
}
else if (ranking >= 51 && ranking <= 80) {
    console.log("Ouro")
}
else if (ranking >= 81 && ranking <= 90) {
    console.log("Diamante")
}
else if (ranking >= 91 && ranking <= 100) {
    console.log("Lenário")
}
else
console.log("Imortal")