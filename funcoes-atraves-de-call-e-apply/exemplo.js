// funcao constructora

function Carro(nome, placa){
	this.nome =  nome;
	this.placa = placa;
}

var fox = {};
var gol = {};

Carro.call(fox, 'Fox', 'AAA-1111');
Carro.apply(gol, ['Gol', 'AAA-2222']); // preciso colocar em un array...

console.log('Fox', fox);
console.log('Gol', gol);

