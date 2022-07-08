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
    
    let max = 0;
    let posicao = 0;
    for(i=0;i<wordCounts.length;i++){
        if(wordCounts[i]> max){
            max = wordCounts[i];
            posicao = i;
        }
    }

    document.body.innerHTML += "<br> A palavra de maior ocorrência é: "+ words[posicao] + "<br> Com " + wordCounts[posicao] + " ocorrências.";

    for(i=0;i<words.length;i++){
        document.body.innerHTML += "<br>"+ words[i] + ": " + wordCounts[i];
        }
  }