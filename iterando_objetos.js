var joao ={
	nome: 'Joao',
	idade: 25,
	endereco: {
	logradouro: 'Av Brasil',
	numero: 100,
	complemento: 'Apto 12',
	ciudade: 'Rio de Janeiro',
	estado: 'RJ'
	}	
}

console.log('Inciando...')

for(var prop in joao){
	console.log(prop, '->', joao[prop])
}