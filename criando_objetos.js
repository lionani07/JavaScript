var fox = {cor: 'prata', modelo: 'fox', fabricante: 'VW'}

console.log('fox', fox);
console.log('Typeof', typeof fox);

console.log('Cor do fox:', fox.cor);
console.log(fox[0]);

console.log('Pintando o fox de Branco');
fox.cor = 'Branco';
console.log('fox', fox);

console.log('Modelo', fox['modelo']);

//posso adicionar un elemento ao objeto depois de creado.

fox.peso = 1000;
console.log(fox);

//posso add funcion ao objeto.

fox.ligar = function(){
	console.log('Ligando o carro!');
}

console.log(fox);
fox.ligar();


//Outro objeto carro tipo carro.

var celta = {
	cor: 'Branco',
	modelo: 'Celta',
	fabricante: 'GM',
	apagar: function(){
		console.log('Apagando o carro!');
	}
};

console.log('Celta', celta);
celta.apagar();
