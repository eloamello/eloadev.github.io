

function ocorrencia() {
  let texto = document.getElementById("frase").value;
  let textoArray = texto.split(' ');

  let words = [];
  let wordCounts = [];

  for(i=0 ; i< textoArray.length ; i++){
      
      if(words.includes(textoArray[i])){
          wordCounts[words.indexOf(textoArray[i])] += 1;
      } else {
          words.push(textoArray[i]);
          wordCounts[words.indexOf(textoArray[i])] = 1;
      }
  }
  for(i=0;i<words.length;i++){
  document.body.innerHTML += "<br>"+ words[i] + ": " + wordCounts[i];
  }
}