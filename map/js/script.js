/*
Map => mapear o array
-Cria um novo array, a partir do array percorrido (array priginal)
-cria um novo array, com a mesma 
=aceita 3 parametros
  -item do array
  -index
  -array completo
*/
const number = [1,2,3,4,5,6,7]
//map deixa o array inalterado
/*
const double = number.map( item=>{
   const newItem = item * 2
   return newItem
} )

console.log(double)
*/

 // Example array
 //pega o primeiro item da posição 0
 //vem na segunda do item 2
 //passa item por item 

const double = number.map((item, index, arrayOriginal) => {
    console.log(item + ' item');
    console.log(index + ' index');
    console.log(arrayOriginal + ' arrayOriginal');
    const newItem = item * 10;
    return newItem;
});

console.log(double); // Output the result

 console.log(double)