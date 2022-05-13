let saldoatual, saldo, debito, credito, numerodaconta ;

numerodaconta=parseFloat(prompt("informe o número da conta sua conta: "));

saldo=parseFloat(prompt("informe o saldo atual da conta: "));

debito=parseFloat(prompt("informe a quantidade de débito que irá retirar: "));

credito=parseFloat(prompt("informe quanto de crédito você possui disponivél: "));
saldoatual= saldo - debito + credito;

if (saldoatual>=0) {
    alert("o seu saldo é positivo")
    
} else {
    alert("o seu saldo é negativo, pague o aluguel!")
    
}

