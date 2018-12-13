$(function(){

	var selecaoTodosUsuarios = $('#selecao-todos-usuarios'); //selecao por id
	var selecaoUsuarios = $('.js-selecao-usuario'); //selecao por class
	
	function estilizarLinhaUsuarios(){
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

	selecaoUsuarios.on('click', function(){			
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;		
		var checked = selecaoUsuarios.length ===totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	selecaoTodosUsuarios.on('click', function(){
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		/*
		if(selecaoTodosUsuarios.prop('checked')){
			selecaoUsuarios.parents('tr').addClass('selecionado');
		}else{
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuarios();


	});

	selecaoUsuarios.on('change', function(evento){
		var usuarioSelecionado = $(evento.target);

		/*
		if(usuarioSelecionado.prop('checked')){
			usuarioSelecionado.parents('tr').addClass('selecionado');
		}else{
			usuarioSelecionado.parents('tr').removeClass('selecionado');
		}
		*/
		estilizarLinhaUsuarios();
		

	});
});