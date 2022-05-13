let salariofixo, valordasvendas, comissao, salariofinal;

salariofixo=parseFloat(prompt("informe o valor do salário fixo do  funcionário: "));
valordasvendas=parseFloat(prompt("informe qual o valor total em vendas no mês efetuadas pelo vendedor: "));

if (valordasvendas<=1500) {
comissao= valordasvendas * (3/100);
salariofinal= salariofixo + comissao;
  alert("o salário no final do mês do vendedor será de: " +salariofinal);  
} else if(valordasvendas>1500) {
    comissao= valordasvendas * (5/100);
    salariofinal= salariofixo + comissao;
    alert("o salaário no final do mês do vendedor será de: " +salariofinal);
}