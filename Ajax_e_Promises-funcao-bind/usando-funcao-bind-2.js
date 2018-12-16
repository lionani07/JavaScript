var Estado = (function(){

	function Estado(){
		this.comboEstado = $('#combo-estado');		
		this.emitter = $({});
		this.on = this.emitter.on.bind(this.emitter);
	}

	Estado.prototype.iniciar = function(){
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados.bind(this),
			error: onError
		});

		this.comboEstado.on('change', onEstadoAlterado.bind(this));
	}

	function onEstadoAlterado(){
		this.emitter.trigger('alterado', this.comboEstado.val());
	}

	function onEstadoAlterado() {
		this.emitter.trigger('alterado', this.comboEstado.val());
	}

	function onEstadosRetornados(estados){		
		this.comboEstado.html('<option value ="">Selecione o estado</option>');
		estados.forEach(function(estado){
		var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
		this.comboEstado.append(optionEstado);
		}.bind(this));
	}

	function onError(){
		alert('Error cargando estrados');
	}
	return Estado;

	})();


	var Ciudade = (function(){
		function Ciudade(estado){			
			this.comboCiudade = $('#combo-ciudade');
			this.estado = estado;
		}

		Ciudade.prototype.iniciar = function() {
			//handle quando o estado for alterado
			this.estado.on('alterado', onEstadoSelecionado.bind(this));
	    }

	    function onEstadoSelecionado(evento, uf){
	    	if(uf){
		    	$.ajax({
		    		url: 'http://localhost:8080/cidades',
					method: 'GET',
					dataType: 'jsonp',
					data:{
						uf: uf
					},
					success: onCiudadesRetornadas.bind(this),
					error: onError
		    	});
	    	}else{
	    		this.comboCiudade.html('');
	    		this.comboCiudade.attr('disabled', 'disabled');
	    	}
	    }

	    function onCiudadesRetornadas(ciudades){
	    	this.comboCiudade.removeAttr('disabled');	    	
	    	this.comboCiudade.html('<option> Seleccione ciudade </option>')
	    	ciudades.forEach(function (ciudade){
	    		var optionCiudade = $('<option>').val(ciudade.codigo).text(ciudade.nome);
	    		this.comboCiudade.append(optionCiudade);
	    	}.bind(this));

	    }

	    function onError(){
	    	alert('Error cargando ciudades');
	    }

	    

		return Ciudade;

	})();

	$(function(){
		var estado = new Estado();
		estado.iniciar();

		var ciudade = new Ciudade(estado);
		ciudade.iniciar();
	});


	


