let numero ;
let maiorNumero = 0;
let contador = 0;


 do {
  numero = prompt ('Insira um número')
  numero= Number (numero); //  Converte string para numero

  if (numero > maiorNumero) {
      maiorNumero = numero ;
  }

      contador = contador + 1; //  0 , 1, 2, 3 , 4, 5
 }  while (contador < 5 ) ;

 console.log ('O maior número inserido foi ' + maiorNumero );