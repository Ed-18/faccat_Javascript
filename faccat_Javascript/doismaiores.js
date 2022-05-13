let numero1, numero2, numero3, soma;

numero1 = parseInt (prompt("Digite um número: "));
numero2 = parseInt (prompt("Digite outro número: "));
numero3 = parseInt (prompt("Digite mais um número: "));

if ((numero1>numero3) && (numero2>numero3)){
    soma=numero1+numero2
    alert("o resultado da soma do " +numero1+ " mais " +numero2+ " é " +soma);
}else if ((numero2>numero1) && (numero3>numero1)){
    soma=numero2+numero3
    alert("o resultado da soma do " +numero2+ " mais " +numero3+ " é " +soma);
}else if ((numero3>numero2) && (numero1>numero2)){
    soma=numero3+numero1
    alert("o resultado da soma do " +numero3+ " mais " +numero1+ " é " +soma);
}