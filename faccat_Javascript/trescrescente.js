let numero1, numero2, numero3;

numero1 = parseInt (prompt("Digite um número: "));
numero2 = parseInt (prompt("Digite outro número: "));
numero3 = parseInt (prompt("Digite mais um número: "));

if ((numero1>numero2) && (numero2>numero3) && (numero1>numero3)) {
    alert("a ordem crescente dos número é de: " +numero3+ "," +numero2+ "," +numero1);
    
} else if((numero2>numero1) && (numero3>numero2) && (numero3>numero1)){
    alert("a ordem crescente dos número é de: " +numero1+ "," +numero2+ "," +numero3);
} 
  else if((numero3>numero1) && (numero1>numero2) && (numero3>numero1)){
    alert("a ordem crescente dos número é de: " +numero2+ "," +numero1+ "," +numero3);
  }