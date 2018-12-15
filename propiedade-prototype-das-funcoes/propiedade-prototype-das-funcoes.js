var Carro = function(nome, placa){
	this.nome = nome;
	this.placa = placa;
	//this.fabricante = 'VW';
}

Carro.prototype.fabricante = 'VW';
Carro.prototype.ligar = function(){
	console.log('Ligando o carro....');
}

var fox = new Carro('Fox', 'AAA-1111');
var gol = new Carro('Gol', 'AAA-2222');
console.log('Fox', fox);

console.log(Object.getPrototypeOf(fox)===Object.getPrototypeOf(gol));

console.log('Fox.fabricante', fox.fabricante);
fox.ligar();