const students = [
    { nome: 'Rodolfo', testGrade: 7 },
    { nome: 'Maria', testGrade: 5 },
    { nome: 'João', testGrade: 8 },
    { nome: 'Bruno', testGrade: 9 },
    { nome: 'Carla', testGrade: 3 },
    { nome: 'Ana', testGrade: 2 },
    { nome: 'Julio', testGrade: 10 },
];

const newStudents = students.map( students =>{
    return{
        nome:students.nome,
        studentStatus: students.testGrade >= 5 ? 'promovido': 'reprovado'
    }
})
console.log(newStudents)