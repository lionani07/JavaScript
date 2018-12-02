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
console.log('Ciudade que Joao mora', joao.endereco.ciudade);


