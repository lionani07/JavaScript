var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	fabricante: 'GM'
}

console.log('Fox fabricante', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('Fox fabricante', fox.fabricante);
console.log(fox);

delete fox.fabricante;
console.log('Fox fabricante', fox.fabricante);
console.log(fox);

for(prop in fox){
	console.log(prop, fox.hasOwnProperty(prop));
}
