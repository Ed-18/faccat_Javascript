let a, b, c;

alert("informe as medidas de um triângulo:");

a = parseFloat(prompt("informe o valor do lado A: "));
b = parseFloat(prompt("informe o valor do lado B: "));
c = parseFloat(prompt("informe o valor do lado C: "));

if (c+b>a) {
    alert("é um triângulo de dois lado maiores do que o valor A");
} else if(c+a>b) {
    alert("é um triângulo de dois lado maiores do que o valor B");

    
} else if(a+b>c){
    alert("é um triângulo de dois lado maiores do que o valor C");
}