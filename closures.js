
/*function incrementar(){

	var valor = 0;
	
	return function (){
		return ++valor;
	}
	
}

var fn = incrementar();
console.log(fn());
console.log(fn());
console.log(fn());
*/

var incremento = (function incrementar(){
	var valor = 0;

	return function(){
		return ++valor;
	}
})();


console.log(incremento());
console.log(incremento());
console.log(incremento());