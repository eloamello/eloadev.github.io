function fibonacci(){
    let num1=0,num2=1,auxiliar=0;
    for(i=0;i<100;i++){
      auxiliar=num1+num2;
      num1=num2;
      num2=auxiliar;
      console.log(auxiliar);
    }
  }
  
  fibonacci();