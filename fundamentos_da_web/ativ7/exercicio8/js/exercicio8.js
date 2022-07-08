function distanciaEntreDatas() {
  let data1Array = document.getElementById("data1").value.split("/");
  let dataFinal1 = new Date(data1Array[2], data1Array[1], data1Array[0]);

  let data2Array = document.getElementById("data2").value.split("/");
  let dataFinal2 = new Date(data2Array[2], data2Array[1], data2Array[0]);

  if (dataFinal1 > dataFinal2) {
    resultado = Math.round(
      (dataFinal1 - dataFinal2) / (7 * 24 * 60 * 60 * 1000)
    );
  }
  if (dataFinal1 < dataFinal2) {
    resultado = Math.round(
      (dataFinal2 - dataFinal1) / (7 * 24 * 60 * 60 * 1000)
    );
  } else resultado = 0;

  document.body.innerHTML +=
    "<br> A diferença é de: " + resultado + " semana(s).";
}
