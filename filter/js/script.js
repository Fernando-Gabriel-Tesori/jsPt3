
//filter filtra e passa só os valores decididos
/*
function isEven(number) {
    return number % 2 === 0;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
  const evenNumbers = numbers.filter(isEven);

  console.log("Números pares:", evenNumbers);
*/
  //só pega os numeros pares

  /*
  Filter
  cria um outro array, a partir do array percorrido (array original)
  cria um novo array com os elementos filtrados
  aceita 3 parametros
  item do array
  index
  array completo

  return true -> item atual passa novo array
  return false -> item atual não passa pro novo array
  */
/*
  const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

  const newList = list.filter( number => {
    if(number > 100){
        return true
    }
    else{
        return false 
    }
  })
  console.log(newList)
  */
  //pega os valores a mais de 100 
  //o de  baixo é o resumo do de cima
  const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

  const newList = list.filter( number => number > 100)
  console.log(newList)
