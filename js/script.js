var contador = 1;  //define contador

function luzes() {
      //setInterval(mudaCor(), 5000);
      setInterval(function() {  //Criando intervalo de tempo
        switch(contador) {
            case 1:      document.body.style.backgroundColor = 'orange';   //Criando sistema de cases que dão as cores dependendo do contador
                         break;
                         
                        
    
            case 2:      document.body.style.backgroundColor = 'blue';
                         break;
                         
            case 3:      document.body.style.backgroundColor = 'red';
                         break;

            case 4:      document.body.style.backgroundColor = 'purple';
                         break; 


            case 5:      document.body.style.backgroundColor = 'green';   
                         break;
                        
    
            case 6:      document.body.style.backgroundColor = 'cyan';
                         break;
                         
            case 7:      document.body.style.backgroundColor = 'black';
                         break;

            case 8:      document.body.style.backgroundColor = 'gray';
                         break; 
                         
                    
        }
            
        if(contador == 8)  //Caso contador é igual a 8 faz ele voltar a ser 1
 {
     contador = 1;
 }

        contador++; //A cada passo aumenta contador em mais 1
    
      }, 500);  //Delay de 500 milissegundos
}

