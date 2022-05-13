let quantidadeatual, quantidademinima, quantidademaxima, quantidademedia;

quantidadeatual=parseFloat(prompt("informe a quantidade atual do produto em estoque: "));

quantidademaxima=parseFloat(prompt("informe a quantidade máxima que pode ser ocupada no estoque: "));

quantidademinima=parseFloat(prompt("informe a quantidade minima que deve ser ocupada no estoque: "));

quantidademedia= (quantidademaxima + quantidademinima) /2;

if (quantidadeatual>quantidademedia) {

alert("não efetuar a compra de mais estoque")
    
} else {
    alert("efetuar a compra de mais produtos ao estoque")
    
}