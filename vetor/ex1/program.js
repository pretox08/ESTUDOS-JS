import prompt from 'prompt-sync'
let ler = prompt();

let notas = [];

console.log('Informe a quantidade de notas')
let qtd = Number(ler());

for(let cont= 0; cont < qtd; cont++){
    console.log('Informe a nota:');
    notas[cont] = Number(ler());
}

let soma = 0;

for(let cont = 0; cont < qtd; cont++){
    soma = soma + notas[cont];
}

let media = soma / notas.length;

console.log('A média é ' + media);