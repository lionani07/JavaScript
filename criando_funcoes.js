
//function declaration
function somar(a, b){
	//Arguments
	console.log('Mostrando Arguments da function->', arguments);	
	return a + b;
}

//function expression
var subtrair = function(a, b){
	console.log('Mostrando Arguments->', arguments);	
	return a - b;
}

var result = somar(4, 5);
console.log('4 + 5 =', result);

var resta = subtrair(6, 2);
console.log('6 - 2 =', resta);

console.log(typeof somar);