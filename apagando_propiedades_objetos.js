var endereco = {
	logradouro: 'Av Brasil',
	numero: 100,
	complemento: 'Apto 12',
	ciudade: 'Rio de Janeiro',
	estado: 'RJ'
};

var joao ={
	nome: 'Joao',
	idade: 25,
	endereco: endereco	
};

console.log(joao);

//apagando propiedad idade

delete joao.idade;
console.log('eliminando idade->', joao);

//apagando propiedad logradouro de endereco

delete joao.endereco.logradouro;
console.log('-> eliminado logradouro', joao);