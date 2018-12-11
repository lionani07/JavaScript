var accesorio = {
	som: 'Pionner',
	banco: 'Couro'
}

var ligar = function(){
	console.log('Ligando o Carro...');
}


var fox = [ 'Fox', 4, accesorio, ligar ];

console.log(fox);
console.log(fox[2].som);

fox[3]();

