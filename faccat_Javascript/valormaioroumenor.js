let numero1, numero2;

numero1 = parseFloat(prompt("digite um número: "));
numero2 = parseFloat(prompt("digite um número: "));

if (numero1>numero2) {
    alert("o primeiro valor informado " +numero1+ " é maior que o segundo informado " +numero2);
} 
else if (numero2>numero1) {
    alert("o segundo valor informado " +numero2+ " é maior que o primeiro informado " +numero1);
    
} else if( numero1 == numero2) {
    alert("os valores " +numero1+ " e " +numero2+ " são iguais");
}