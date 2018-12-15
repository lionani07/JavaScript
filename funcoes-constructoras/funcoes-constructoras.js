//Funcoes constructoras por covencao comenzan com Mayusculas...

var Carro = function(nome, placa){
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW';
}

var fox = new Carro('Fox', 'AAA-1111');
var gol = new Carro('Gol', 'BBB-2222');

console.log(fox);

var listaCarros = []; 

listaCarros.push(fox, gol);

console.log(listaCarros);

listaCarros.pop();
console.log('elimnado ultimo carro');
console.log(listaCarros);
