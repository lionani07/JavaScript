var nome = 'AlgaWorks'; //Variable Global, esta fuera de uma function

var capitalizar = function(){

	//variavel local a funcao.
	var nome = 'capitalizar'.toUpperCase();
}

capitalizar();
console.log("nome local", nome);

function capitalizar2(){
	nome = nome.toUpperCase();
}

capitalizar2();
console.log('nome Global', nome);