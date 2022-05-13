let avaliacao1, avaliacao2, mediafinal;

avaliacao1=parseFloat(prompt("a nota na primeira avaliação do aluno foi de: "));

avaliacao2=parseFloat(prompt("a nota obtida na segunda avalição foi de: "));

mediafinal= (avaliacao1 + avaliacao2) /2;

if (mediafinal>6) {
    alert("a média final do aluno foi " +mediafinal+ " o aluno foi aprovado!");
    
} else {
    alert("a média final do aluno foi " +mediafinal+ " o aluno foi reprovado");
    
}