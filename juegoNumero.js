var visitante = prompt('cual es tu nombre?');
var mensaje = 'Hola ' + visitante;
mensaje += '!';
document.write(mensaje);

//juego de adivinanza de número entre el 1 y el 6

// declaramos la respuesta correcta como false, cuando el usuario adivine el numero la respuesta cambia a true

var respuestaCorrecta = false;
var aleatorio = Math.floor(Math.random() * 6) +1;
var respuesta = prompt('Adivina el numero entre el 1 y el 6');

// Como las respues de los usuarios son string debemos convertirlos a numeros con parseInt

if (parseInt(respuesta) === aleatorio) {
	respuestaCorrecta = true;
}

if(respuestaCorrecta) {
	document.write(' Haz adivinado el numero!');
} else{
	document.write(' No haz adivinado el numero');
}

