
function inverter() {
    let documento = document.getElementById("frase").value;
    let result = documento.split('').reverse().join('');
    document.body.innerHTML += "<br>"+result;
  }