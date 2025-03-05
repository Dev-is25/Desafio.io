let ranking = soma(85, 2)
console.log("O Herói está com o salde de: " + ranking, "Vitorias")

function soma(vitoria, derrota) {
    let ranking = vitoria - derrota
    return ranking
}

if (ranking <= 10) {
    console.log("Ferro")
}
else if (ranking >= 11 && ranking <= 20) {
    console.log("Está no nivel Bronze")
}
else if (ranking >= 21 && ranking <= 50) {
    console.log("Está no nivel Prata")
}
else if (ranking >= 51 && ranking <= 80) {
    console.log("Está no nivel Ouro")
}
else if (ranking >= 81 && ranking <= 90) {
    console.log("Está no nivel Diamante")
}
else if (ranking >= 91 && ranking <= 100) {
    console.log("Está no nivel Lenário")
}
else
console.log("Está no nivel Imortal")
