let salario, reajuste, novosalario;

salario=parseFloat(prompt("informe por favor o salário atual do funcionário: "));

reajuste= (25 / 100) * 1000;

novosalario= reajuste + salario;
alert("o novo salário que será designado ao funcionário é de: " +novosalario);