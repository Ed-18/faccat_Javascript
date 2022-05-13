let macas, custototal;

macas=parseFloat(prompt("informe quantas maças foram compradas: "));
alert(" a quantidade comprada de maças foi: " +macas);
if (macas>=12) {
    macas= macas * 1
    alert(" o custo total das maças foi de: " +macas);
    
} else if (macas<12){
    macas= macas * 1.30
    alert("o custo final das maças foi de: " +macas);
    
}