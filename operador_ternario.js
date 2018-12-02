var temFoto = false;
var usurio = 'maria';


/*
var pathFoto = '';

if(temFoto){
	pathFoto = usurio + '-perfil.jpg';
}
else{
	pathFoto = 'mock-perfil.jpg';
}
*/

var pathFoto = temFoto ? usurio + '-perfil.jpg' : 'mock-perfil.jpg';

console.log('Path da foto es:', pathFoto);