function vida(){
    let data = document.getElementById("data").value;

    dataArray = data.split("/");

    let nascimento= new Date(dataArray[2],dataArray[1],dataArray[0]);
    var atual = new Date();
    let result = atual.getTime() - nascimento.getTime() ;

    let seconds = result / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24
    document.body.innerHTML += "<br> A quantidade de dias de vida é de: "+ days.toFixed(2);
}