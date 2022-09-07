function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
    
    var valorEmReal = valorEmDolar * 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

// Para pegar um elemento do html é o document.getElementoById mas com isso estamos trazendo o valor inteiro do html mas o que queremos é o valor então.
// parseFloat é uma função para converter valor recebido em string para numerico decimal.
// inner é para inserir um conteudo dentro dele.