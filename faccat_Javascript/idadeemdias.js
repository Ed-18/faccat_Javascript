let diasvividos, anos, meses, dias;

anos=parseFloat(prompt("informe aqui quantos anos você possui: "));
anos= anos * 365;

meses=parseFloat(prompt("informe a quantidade de meses que possui depois do último aniversário: "));
meses= meses * 30;

dias=parseFloat(prompt("informe por favor, a quantidade de dias vividos até agora no mês: "));

diasvividos= anos + meses + dias
alert("a quantidade de dias vividos por você até agora é de: " +diasvividos);
