var nomes = ['Joao', 'Maria', 'Pedro', 'Jose'];

for (var i = 0; i<nomes.length; i++) {
	console.log('nomes [',i,'] =', nomes[i]);
}


nomes.forEach(function (e) {
	console.log(e);
});