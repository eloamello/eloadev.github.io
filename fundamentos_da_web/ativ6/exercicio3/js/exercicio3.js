function ePar(inicio, fim){
    let soma=0;
    for(i=inicio;i<=fim;i++){
      if(i%2==0) soma=i+soma
    }
    console.log(soma);
  }
  
  
  ePar(2,1000);