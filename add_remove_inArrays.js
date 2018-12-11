var emails = [];

var veces = 0;

function mostrar(){
	veces++;
	console.log('Metodo mostrar ejecutado:', veces);
	console.log('Tamanho del arrays es: ', emails.length);
	for (var i = 0; i < emails.length; i++) {
	console.log(emails[i]);

}
}

emails.push('primero@gmail.com'); //adiciona elemento al final
emails.push('segundo@gmail.com');

mostrar();

console.log(emails.pop()); //Elimina el ultimo elemento del array y devuelve el elemento eliminado;
mostrar();

emails.unshift('pedro@gmail.com'); //adiciona al inicio del arrays.
mostrar();

console.log(emails.shift()); //elimina el elemnto del inico y te lo devuelve;

