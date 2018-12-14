
var voks = {
	fabricante: 'VW'
}

var gol =  Object.create(voks);
gol.nome = 'Gol';
gol.placa ='AAA-2222'


var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	__proto__:voks	
}
/*
var gol = {
	nome: 'Gol',
	placa: 'AAA-2222'	
}
*/

console.log(fox);
console.log(Object.getPrototypeOf(fox)===Object.getPrototypeOf(gol));

console.log('Fox fabricante: ', fox.fabricante);
console.log('Gol fabricante: ', gol.fabricante);

Object.setPrototypeOf(fox, voks);
console.log('Fox fabricante: ', fox.fabricante);
