let numero1, numero2;

numero1=parseFloat(prompt("digite o valor do número 1: "));

numero2=parseFloat(prompt("digite o valor do número 2: "));

if (numero1>numero2) {
    alert("o 1 número digitado " +numero1+ " é maior do que o número 2 digitado");
} else if(numero2>numero1) {
    alert("o 2 número digitado " +numero2+ " é maior do que o número 1 digitado");
}