let Capital = parseFloat(prompt ("Qual o seu valor?"))
let Taxa = parseFloat(prompt ("Qual é a taxa de juros?"))
let Tempo = parseFloat(prompt ("Qual o tempo desses juros?"))
let Juros = Capital * Taxa * Tempo
let Montante = Juros + Capital

console.log("Seu montante total é de", Montante);


