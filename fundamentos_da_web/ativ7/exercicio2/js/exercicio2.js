
function marcaVogal() {
    let frase = document.getElementById("frase").value;
    let fraseArray = frase.split('');
    for(i=0;i<fraseArray.length;i++){
        console.log(i);
        if(fraseArray[i]=='a'||fraseArray[i]=='A'||fraseArray[i]=='e'||fraseArray[i]=='E'||fraseArray[i]=='i'||fraseArray[i]=='I'||fraseArray[i]=='o'||fraseArray[i]=='O'||fraseArray[i]=='u'||fraseArray[i]=='U'){
            fraseArray[i]= fraseArray[i].bold();
        }
    }
    let result = fraseArray.join('');
    document.body.innerHTML += "<br>"+result;
  }