let carrosvendidos, valortotaldevendas, salariofixo, valorporcarrovendido, salariofinal;

carrosvendidos=parseFloat(prompt("informe aqui a quantidade de carros vendidos pelo vendedor: "));

valortotaldevendas=parseFloat(prompt("informe o valor total das vendas do vendedor: "));
valortotaldevendas= valortotaldevendas * ( 5 / 100);

salariofixo=parseFloat(prompt("informe o salario fixo recebido pelo vendedor mensalmente: "));

valorporcarrovendido=parseFloat(prompt("o valor recebido por carro vendido ao vendedor é de: "));
valorporcarrovendido= valorporcarrovendido * carrosvendidos;

alert("a quantidade de carros vendidos foi de: " +carrosvendidos);

alert("o salario fixo do vendedor é de " +salariofixo+ " e o valor total dos carros vendidos no mês foi de:  " +valorporcarrovendido);

salariofinal= salariofixo + valortotaldevendas + valorporcarrovendido;
alert("o salário final do vendedor será de: " +salariofinal);