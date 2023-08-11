import prompt from 'prompt-sync';
let ler = prompt();

console.log('Insira um número');
let num = Number(ler());

let r = num % 3

console.log(r);