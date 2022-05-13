let custofabrica, impostos, distribuidor, custofinal;

custofabrica=parseFloat(prompt("informe o custo de fabrica do carro que será comprado: "));

impostos= (45 / 100) * custofabrica;
distribuidor= (28 / 100) * custofabrica;
custofinal= custofabrica + distribuidor + impostos;

alert("o custo de fabrica do veículo é de: " +custofabrica)
alert("o custo final da compra do veículo ao consumidor será de: " +custofinal);
