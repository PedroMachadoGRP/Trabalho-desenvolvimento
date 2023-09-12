let a = parseFloat(prompt ("Qual a sua altura?"))
let b = parseFloat(prompt ("Qual o seu peso?"))
let c = a * a
let IMC = b / c

console.log(IMC);

if (IMC >= 9000){
    console.log("Esta extremamente obeso");
}

else if (IMC >= 39.99 && IMC <= 35){
    console.log("Esta muito obeso");
}

else if (IMC >= 34.99 && IMC <= 30){
    console.log("Está obeso");
}

else if (IMC >= 29.99 && IMC <= 25) {
    console.log("Acima do peso");
}

else if (IMC >= 24.99 && IMC <= 18.5) {
    console.log("Peso normal");
} else console.log("Abaixo do peso");
