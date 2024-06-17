/*const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'joão', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
  ];
  
  const vipStatus = list.map((person) => ({
    name: person.name,
    vip: person.vip,
    status: person.vip ? 'VIP' : 'Regular',
  }));
  
  console.log(vipStatus);
  */
  const lista = [
    { nome: 'Rodolfo', vip: true },
    { nome: 'Maria', vip: false },
    { nome: 'João', vip: true },
    { nome: 'Bruno', vip: true },
    { nome: 'Carla', vip: false },
    { nome: 'Ana', vip: true },
    { nome: 'Julio', vip: false },
  ];
  
  const statusVip = lista.map((pessoa) => ({
    nome: pessoa.nome,
    vip: pessoa.vip,
    cor: pessoa.vip ? 'preta' : 'verde',
  }));
  
  console.log(statusVip);
  
  