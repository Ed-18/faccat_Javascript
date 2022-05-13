let nota1, nota2, nota3, mediafinal;

nota1=parseFloat(prompt("informe a nota tirada pelo aluno na primeira avaliação: "));
nota2=parseFloat(prompt("informe a nota tirada pelo aluno na segunda avaliação: "));
nota3=parseFloat(prompt("informe a nota tirada pelo alino na terceira e última avaliação: "));


mediafinal= (nota1 * 2) + (nota2 * 3) + (nota3 * 5) / 10;
alert("a primeira nota foi: " +nota1+ " a segunda nota foi: " +nota2+ " e a terceira e última nota foi: " +nota3);
alert("a média final obtida pelo estudane foi de: " +mediafinal);