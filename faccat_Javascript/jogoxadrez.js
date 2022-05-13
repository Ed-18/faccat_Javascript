let horainicio, horafim, duracaojogo;

horafim=parseFloat(prompt("informe o horário de fim do jogo: "));
horacomeco=parseFloat(prompt("informe o horário de início do jogo: "));

if (horafim-horacomeco) {
    duracaojogo=horafim-horacomeco
    alert("o tempo de duração total da partida " +duracaojogo+ "hrs");
    
} else {
    
}