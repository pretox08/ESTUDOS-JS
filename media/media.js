import prompt from 'prompt-sync';
let ler = prompt();

console.log('quer saber sua média?');

console.log('\nInsira um número');
let número1 = Number (ler());

console.log('Coloque outro');
let número2 = Number (ler());

console.log('ótimo, ultimo número');
let número3 = Number (ler());

let media = (número1 + número2 + número3) / 3;

console.log('a média é ' + media);