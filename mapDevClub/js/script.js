
  /*const list = [
    { nome: 'Rodolfo', vip: true },
    { nome: 'Maria', vip: false },
    { nome: 'João', vip: true },
    { nome: 'Bruno', vip: true },
    { nome: 'Carla', vip: false },
    { nome: 'Ana', vip: true },
    { nome: 'Julio', vip: false },
  ];
  
 const newList = list.map( user => {
 const newUser = {
  name: user.nome,
  braceletColor: user.vip ? 'black' : 'green'
 }
 return newUser
 })
  
 console.log(newList)
 */


 //ou 

 const list = [
  { nome: 'Rodolfo', vip: true },
  { nome: 'Maria', vip: false },
  { nome: 'João', vip: true },
  { nome: 'Bruno', vip: true },
  { nome: 'Carla', vip: false },
  { nome: 'Ana', vip: true },
  { nome: 'Julio', vip: false },
];

const newList = list.map(user => {
  let braceletColor;

  if (user.vip === true) {
    braceletColor = 'black';
  } else {
    braceletColor = 'green';
  }
  
  const newUser = {
    name: user.nome,
    braceletColor: braceletColor
  }

  return newUser;
});

console.log(newList);
