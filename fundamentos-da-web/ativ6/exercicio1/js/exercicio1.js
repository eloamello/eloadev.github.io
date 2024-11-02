function fatorial (numero){
  let resultado=numero;
  for(i=1;i<numero;i++){
    resultado=resultado*(numero-i);
  }
  console.log(resultado);
}

fatorial(12);