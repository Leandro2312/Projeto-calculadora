function calc(num1, num2) {

    let n1, n2, n3, operacao;

    n1 = document.querySelector("#num1").value;

    operacao = document.querySelector("#operacao").value;

    n2 = document.querySelector("#num2").value;

    if (operacao == "Soma") {

        n3 = parseFloat(n1) + parseFloat(n2);
        document.querySelector("#res").innerHTML = n3;

    }
    if (operacao == "Subtração") {

        n3 = parseFloat(n1) - parseFloat(n2);
        document.querySelector("#res").innerHTML = n3;

    }
    if (operacao == "Multiplicação") {

        n3 = parseFloat(n1) * parseFloat(n2);
        document.querySelector("#res").innerHTML = n3;

    }
    if (operacao == "Divisão") {

        n3 = parseFloat(n1) / parseFloat(n2);
        document.querySelector("#res").innerHTML = n3;

    }


}