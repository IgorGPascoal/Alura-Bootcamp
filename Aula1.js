var nome = "Igor"
var notaDoPrimeiroBimestre = 9.0
var notaDoSegundoBimestre = 4.0
var notaDoTerceiroBimestre = 5.03434
var notaDoQuartoBimestre = 6.4343


var notaFinal = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4)

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log("Sua nota final é " + notaFixada)

if (notaFinal > 6) {
    console.log("Aprovado")
    
} else {
    console.log("Reprovado")
    
}

//Comentário é // -> toFixed serve para fixar os decimais do resultado.
// console.log é para imprimir, o famoso print
