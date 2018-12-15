var contador = {
	valor: 0,
	incrementa:  function(){
		this.valor++;
	},
	reset: function(){
		console.log('Valor de contador agoga: ', this.valor);
		this.valor = 0;
	}
}

contador.incrementa();
contador.incrementa();
contador.reset();

contador.incrementa();
contador.reset();