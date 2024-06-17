/*
Reduce 
-Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)
-acumulador
-valor atual
-index
-array completo
*/

const list = [1,2,3,4,5,6,7,8,9,10]
//o reduce reduz ou soma

const sum = list.reduce( (acumulador, valorAtual)=>{
   return acumulador + valorAtual
},0)
//valor do acumulador
console.log(sum)
//ele guarda no acumulador e spma no valorAtual
