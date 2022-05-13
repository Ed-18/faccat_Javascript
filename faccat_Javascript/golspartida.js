let corinthians, palmeiras, golscorinthians, golspalmeiras;

alert("Corinthians 0x0 Palmeiras");

golscorinthians = parseFloat(prompt("qual foi o placar do corinthians? :"));
golspalmeiras = parseFloat(prompt("qual foi o placar do palmeiras? :"));

if (golscorinthians>golspalmeiras) {
    alert("Corinthians " +golscorinthians+ "x" +golspalmeiras+ " Palmeiras");
    
} else  if(golspalmeiras>golscorinthians){
    alert("Corinthians " +golscorinthians+ "x" +golspalmeiras+ " Palmeiras");

    
} else if(golscorinthians == golspalmeiras) {
    alert("Corinthians " +golscorinthians+ "x" +golspalmeiras+ " Palmeiras");
    alert("o resultado foi de empate");

}