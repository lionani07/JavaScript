var joao = {
	nome: 'Joao',
	idade: 27,
	email: 'teste@gmail.com',
	igualA: function(obj){
		return this.email===obj.email;
	}
}

var maria = {
	nome: 'Maria',
	idade: '27',
	email: 'teste@sgmail.com'
}

console.log(joao.igualA(maria))

