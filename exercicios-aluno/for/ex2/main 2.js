let peso = 0;
let pesoTotal= 0

for (let cont = 1; cont < 11; cont += 1) {
  peso = prompt('Insira o peso da pessoa numero ' + cont);
  pesoTotal = pesoTotal + Number(peso)
  
}

let media = pesoTotal / 10;
console.log(`A media de peso das pessoas ` + media)