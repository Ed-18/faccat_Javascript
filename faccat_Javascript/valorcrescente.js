let numero1, numero2, numerocrescente;

numero1=parseFloat(prompt("digite um valor"));
numero2=parseFloat(prompt("digite outro valor"));

if (numero1>numero2) {
    
    alert("o número em ordem crescente ao número " +numero2+ "é número " +numero1);
} else if (numero2>numero1) {
    alert("o número em ordem crescente ao número " +numero1+ "é número " +numero1);
}