$(function(){

	var actividade = $('#actividade');
	var listaActividades = $('#lista-actividades');

	actividade.on('keyup', function(e){

		var keyCode = e.keyCode;

		if(keyCode===13){
			//Lanco evento creado 'enter'
			actividade.trigger('enter', actividade.val());
			actividade.val('');
		}

	});

	actividade.on('enter', function(evento, texto){
		listaActividades.prepend('<li>' + texto + '</li>' );		
	});

	setTimeout(function(){
		$('#clik-aqui').show();
	}, 3000);




});