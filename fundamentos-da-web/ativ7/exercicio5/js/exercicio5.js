function procurar(){
    let texto = document.getElementById("frase").value;
    let palavra = document.getElementById("palavra").value;
    let substituta = document.getElementById("substituta").value;
    let textoArray = texto.split(' ');
    for(let i=0;i<textoArray.length;i++){
        if(textoArray[i]==palavra){
            textoArray[i]=substituta;
        }
    }
    let result=textoArray.join(' ');
    document.body.innerHTML += "<br>"+ result;
}