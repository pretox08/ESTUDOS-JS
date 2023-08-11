import prompt from 'prompt-sync'
let ler = prompt();

let valor = []
let valortotal = 0;

console.log('Qual o nome da campanha?');
let camp = ler();

console.log('\nQuantos meses de campanha?');
let meses = Number(ler());

console.log('\nQual será a meta de arrecadação?');
let meta = Number(ler());

for(let cont = 0; cont < meses; cont++){
    console.log('Insira o valor arrecadado no mês:');
    valor[cont] = Number(ler())
}

for(let cont = 0; cont > meses; cont++){
    valortotal = valortotal + valor
}

console.log('Campanha ' + camp);
console.log('\nOs valores foram: ' + valor.join());
console.log('\nMeta de arrecadação: ' + meta);

if(valortotal >= meta){
    console.log('\nBateu a meta!')
}
else{
    console.log('\nNão bateu a meta!')
}