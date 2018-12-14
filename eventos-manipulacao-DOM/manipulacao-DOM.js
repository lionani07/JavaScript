$(function(){	

	$('#button1').on('click', function(e){
		console.log('Button 1 Clicado');
	} );

	$('#link1').on('click', function(e){
		e.preventDefault();
		console.log('Link 1 clic');
	});

	$('#input1').on('keyup', function(e){
		console.log(e.keyCode);
		if(e.keyCode===13){
			alert('Enter presionado');
		}
	});

});