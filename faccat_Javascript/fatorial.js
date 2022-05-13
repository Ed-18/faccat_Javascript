let contadora = 0;

let acumuladora = 0;

let fatorial = 0;

do {
    
let numero = parseInt(prompt("digite um número: "));
do {
    

    fatorial = fatorial*contadora;
    numero--;
    
} while (numero>0);
     //numero=0
    alert(fatorial);
   acumuladora =  fatorial + acumuladora;
   alert(acumuladora);
   contadora++
} while (contadora<5);