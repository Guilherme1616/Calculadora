function calcularNovoSalario() {
    var salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    var porcentagemAumento = parseFloat(document.getElementById('porcentagemAumento').value);
    var resultadoElement = document.getElementById('resultado');

    // Verifica se os valores digitados são maiores que 0
    if (salarioAtual <= 0 || porcentagemAumento <= 0) {
        resultadoElement.innerText = "Por favor, digite valores maiores que zero.";
        return;
    }

    var aumento = salarioAtual * (porcentagemAumento / 100);
    var novoSalario = salarioAtual + aumento;

    resultadoElement.innerText = "Novo Salário: R$ " + novoSalario.toFixed(2);
}
