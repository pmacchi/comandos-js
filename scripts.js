
function ingresoNumero ( izquierda, derecha ) {
	var numeroSerie = ( izquierda + derecha);
		return numeroSerie;
	}

console.log(ingresoNumero( 200, 300));
document.write(ingresoNumero(200, 400));

// bucle while

var max = 10000;
var numAleatorio = getRamdonNumber(max);
var numPropuesto;
var intentos = 0;

//función que devuelve numeros aleatorios

function getRamdonNumber(num) {
	return Math.floor(Math.random() * num) + 1;
}

while(numPropuesto !== numAleatorio) {
	numPropuesto = getRamdonNumber(max);
	intentos += 1;
}

//document.getElementById('numero').innerHTML = "El numero aleatorio es: " + numAleatorio;
// document.getElementById('intentos').innerHTML = "El numero  de intentos fue de: " + intentos;

document.write("El numero secreto fue " + numAleatorio);
document.write("El numero de intentos fue " + intentos);
