const list = [
    { nome: 'Rodolfo', testGrade: 7 },
    { nome: 'Maria', testGrade: 5 },
    { nome: 'João', testGrade: 8 },
    { nome: 'Bruno', testGrade: 9 },
    { nome: 'Carla', testGrade: 3 },
    { nome: 'Ana', testGrade: 2 },
    { nome: 'Julio', testGrade: 10 },
];

const newList = list.map(user => {
    const status = user.testGrade >= 6 ? 'aprovado' : 'reprovado';

    const newUser = {
        name: user.nome,
        testGrade: user.testGrade,
        status: status
    }

    return newUser;
});

console.log(newList);
