const alunos = ['vini'];
const alunos2 = alunos.map(function(item){
    return {
        nome: item,
        nota: 8.5
    }
})

alunos2.push({
    nome: 'junior',
    nota: 7
})

alunos2.push({
    nome: 'caio',
    nota: 4
})

alunos2.push({
    nome: 'dani',
    nota: 6.5
})

alunos2.push({
    nome: 'marceli',
    nota: 5
})

const alunosAprovados = alunos2.filter(function(item) {
    return item.nota >= 6
})

const alunosReprovados = alunos2.filter(function(item){
    return item.nota < 6
})

console.log(alunosAprovados);
console.log(alunosReprovados);