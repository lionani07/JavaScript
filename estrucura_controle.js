for (var i = 0; i < 5; i++) {
	console.log('i es igual :', i);
}


var cadena = 'AlgaWorks';

for(var k =0, tamanho = cadena.length; k < tamanho; k++){
	console.log('k', cadena.charAt(k));
}

var j = 5;
for (; j < 9; j++) {
	console.log('j', j);
}

var z = 0;
for (;z < 4;) {
	console.log('z', z);
	z++;
}

// loop infinito
var l = 0;
for (;;) {
	console.log('->', l++);

	if (l === 100) {
		break;
	}
}

//Estrutura While

