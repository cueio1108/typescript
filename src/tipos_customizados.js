"use strict";
const alunos = [
    {
        nome: "Julio",
        cursos: ["Front-end", "UX/UI"],
        idade: 24,
    },
    {
        nome: "Julia",
        cursos: ["Front-end", "Python"],
        idade: 29,
    },
];
alunos.push({
    nome: "Mario",
    cursos: ["Arquitetura"],
    idade: 29
});
const novoAluno = {
    nome: "Maria",
    idade: 27
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
