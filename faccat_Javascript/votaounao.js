let anoatual, anonascimento;

anonascimento=parseFloat(prompt("informe o ano de nascimento da pessoa: "));

anoatual=parseFloat(prompt("informe aqui o ano atual: "));



 if(anoatual - anonascimento<=16){
    alert("o eleitor ainda não pode votar");



 }else if(anoatual - anonascimento<=17) {
        alert("o voto é opcional");
 }   



if (anoatual - anonascimento>=18) {
    alert("o eleitor poderá realizar seu voto!");
}