//Este diálogo es para recopilar el nombre del usuario.
var nombre = prompt('Hola! ¿Cuál es tu nombre?', 'Ejemplo: Bill Gates');

//Este diálogo es para recopilar qué carrera cursa el usuario.
var carrera = prompt(
	'Dime, ¿qué carrera cursas?',
	'Ejemplo: Ciencias de la computación'
);

//Este diálogo es para recopilar el nombre de la primera rama.
var rama1 = prompt(
	'Por favor, ingresa el nombre de tu primera rama',
	'Ejemplo: matemáticas'
);

//Con los tres diálogos siguientes recogemos los datos que son: 1era, 2da y 3era nota de la primera rama.
var rama1_nota1 = prompt(
	'Por favor, ingresa tu 1ra nota de' + ' ' + rama1,
	'Ejemplo: 4'
);

var rama1_nota2 = prompt(
	'Por favor ingresa tu 2da nota de' + ' ' + rama1,
	'Ejemplo: 5'
);

var rama1_nota3 = prompt(
	'Por favor, ingresa tu 3ra nota de' + ' ' + rama1,
	'Ejemplo: 7'
);

//Este diálogo es para recopilar el nombre de la segunda rama.
var rama2 = prompt(
	'Por favor, ingresa el nombre de tu segunda rama',
	'Ejemplo: lógica de programación'
);

//Con los tres diálogos siguientes recogemos los datos que son: 1era, 2da y 3era nota de la primera rama.
var rama2_nota1 = prompt(
	'Por favor, ingresa tu 1ra nota de' + ' ' + rama2,
	'Ejemplo: 10'
);

var rama2_nota2 = prompt(
	'Por favor, ingresa tu 2da nota de' + ' ' + rama2,
	'Ejemplo: 16'
);

var rama2_nota3 = prompt(
	'Por favor, ingresa tu 3ra nota de' + ' ' + rama2,
	'Ejemplo: 18'
);

//Este diálogo es para recopilar el nombre de la tercera rama.
var rama3 = prompt(
	'Por favor, ingresa el nombre de tu tercera rama',
	'Ejemplo: inglés'
);

//Con los tres diálogos siguientes recogemos los datos que son: 1era, 2da y 3era nota de la primera rama.
var rama3_nota1 = prompt(
	'Por favor, ingresa tu 1ra nota de' + ' ' + rama3,
	'Ejemplo: 4'
);

var rama3_nota2 = prompt(
	'Por favor, ingresa tu 2da nota de' + ' ' + rama3,
	'Ejemplo: 5'
);

//Con los siguientes tres diálogos recopilamos el valor de la nota mínima aprobatoria para cada rama.
var nota_aprobatoria_rama1 = prompt(
	'Por favor, ingresa el valor de la nota mínima aprobatoria de' + ' ' + rama1,
	'Ejemplo: 12'
);

var nota_aprobatoria_rama2 = prompt(
	'Por favor, ingresa el valor de la nota mínima aprobatoria de' + ' ' + rama2,
	'Ejemplo: 12'
);

var nota_aprobatoria_rama3 = prompt(
	'Por favor, ingresa el valor de la nota mínima aprobatoria de' + ' ' + rama3,
	'Ejemplo: 12'
);

//En los siguientes tres diálogos recopilamos la nota máxima que se puede alcanzar en cada rama.
var nota_max_rama1 = prompt(
	'Por favor, ingresa la nota máxima alcanzable de' + ' ' + rama1
);

var nota_max_rama2 = prompt(
	'Por favor, ingresa la nota máxima alcanzable de' + ' ' + rama2
);

var nota_max_rama3 = prompt(
	'Por favor, ingresa la nota máxima alcanzable de' + ' ' + rama3
);

//Aquí definimos como enteros los valores de las variables para las notas de la primera rama.
rama1_nota1 = parseInt(rama1_nota1);
rama1_nota2 = parseInt(rama1_nota2);
rama1_nota3 = parseInt(rama1_nota3);

//Aquí definimos como enteros los valores de las variables para las notas de la segunda rama.
rama2_nota1 = parseInt(rama2_nota1);
rama2_nota2 = parseInt(rama2_nota2);
rama2_nota3 = parseInt(rama2_nota3);

//Aquí definimos como enteros los valores de las variables para las notas de la tercera rama.
rama3_nota1 = parseInt(rama3_nota1);
rama3_nota2 = parseInt(rama3_nota2);

//Aquí definimos como enteros los valores de las variables que contienen la nota mínima aprobatoria de cada rama.
nota_aprobatoria_rama1 = parseInt(nota_aprobatoria_rama1);
nota_aprobatoria_rama2 = parseInt(nota_aprobatoria_rama2);
nota_aprobatoria_rama3 = parseInt(nota_aprobatoria_rama3);

//Con las siguientes tres variables se calculará el promedio de cada rama en base a sus respectivas notas.
var promedio_rama1 = (rama1_nota1 + rama1_nota2 + rama1_nota3) / 3;
var promedio_rama2 = (rama2_nota1 + rama2_nota2 + rama2_nota3) / 3;
var promedio_rama3 = (rama3_nota1 + rama3_nota2) / 3;

//Esta variable guarda el resultado de la suma de las 3 notas aprobatorias mínimas para la tercera rama.
var total_aprobatorias_r3 = nota_aprobatoria_rama3 * 3;

//Esta variable guarda el resultado de la suma de las 2 notas del usuario para la rama 3.
var suma_notas_rama3 = rama3_nota1 + rama3_nota2;

//Esta variable guarda la nota mínima faltante para aprobar la tercera rama en caso de que no se apruebe con las dos primeras notas.
var nota_min_faltante_r3 = total_aprobatorias_r3 - suma_notas_rama3;

//Aquí creamos un div para para unir dos columnas en una sola fila y así agregar los datos personales del usuario.
document.write('<div class="row row-cols-1 row-cols-md-2 p-4">');

//Aquí van los datos personales del usuario
document.write('<h2 class="col">Nombre:</h2>');
document.write('<p class="col">' + nombre + '</p>');
document.write('<h2 class="col">Carrera:</h2>');
document.write('<p class="col">' + carrera + '</p>');

//Aquí cerramos el div que une dos columnas en una sola fila.
document.write('</div>');

//Aperturamos la tabla dinámica para plasmar las ramas de la carrera y las notas de cada una de ellas.
document.write('<table class="table text-center">');

//Aquí creamos una cabecera con los identificadores de columnas para los datos.
document.write('<thead class="bg-dark text-white">');

//Aquí creamos una fila para los identificadores de los datos.
document.write('<tr>');

//Se crean las columnas para los antedichos nombres.
document.write('<th scope="col">Ramo</th>');
document.write('<th scope="col">Nota1</th>');
document.write('<th scope="col">Nota2</th>');
document.write('<th scope="col">Nota3</th>');
document.write('<th scope="col">Promedio</th>');

document.write('</tr>');
//Aquí cerramos la fila para los identificadores.

document.write('</thead>');
//Cerramos la cabecera donde van los identificadores

//Aquí se abre el cuerpo de la tabla que contendrá los datos.
document.write('<tbody>');

//se crea una fila para la primera rama y sus notas.
document.write('<tr>');

//En estas columnas se contienen la 1era rama y sus notas.
document.write('<th scope="row">' + rama1 + '</th>');
document.write('<td>' + rama1_nota1 + '</td>');
document.write('<td>' + rama1_nota2 + '</td>');
document.write('<td>' + rama1_nota3 + '</td>');
document.write('<td>' + promedio_rama1 + '</td>');

document.write('</tr>');
//Cerramos la fila para la primera rama con sus notas.

//Creamos otra fila pra la segunda rama y sus notas.
document.write('<tr>');

//En estas columnas se contienen la segunda rama y sus debidas notas.
document.write('<th scope="row">' + rama2 + '</th>');
document.write('<td>' + rama2_nota1 + '</td>');
document.write('<td>' + rama2_nota2 + '</td>');
document.write('<td>' + rama2_nota3 + '</td>');
document.write('<td>' + promedio_rama2 + '</td>');

document.write('</tr>');
//Cerramos la fila para la segunda rama y sus notas.

//Creamos una tercera fila para la tercera rama y sus notas correspondientes.
document.write('<tr>');

//En estas columnas se contienen la tercera rama con sus dos notas.
document.write('<th scope="row">' + rama3 + '</th>');
document.write('<td>' + rama3_nota1 + '</td>');
document.write('<td>' + rama3_nota2 + '</td>');
document.write('<td>-</td>');
document.write('<td>' + promedio_rama3 + '</td>');

document.write('</tr>');
//Cerramos la tercera fila.

document.write('</tbody>');
//Cerramos el cuerpo de la tabla.

document.write('</table>');
//Cerramos la tabla que contiene las tres ramas con sus respectivas notas.

//Evaluamos si el valor de la suma de las 2 notas de la tercera rama es menor al total de la suma de las 3 notas aprobatorias mínimas para la misma rama.
if (suma_notas_rama3 < total_aprobatorias_r3) {
	//Si la comparación es verdadera, entonces se imprime por pantalla el mensaje...

	document.write(
		'<p class="ps-4">Para aprobar la rama de' +
			' ' +
			rama3 +
			' ' +
			'tu 3era nota debe ser de mínimo' +
			' ' +
			nota_min_faltante_r3 +
			'.' +
			'</p>'
	);
}

//Establecemos: si la nota faltante (de la tercera rama) es mayor que el puntaje máximo alcanzable, entonces se imprime el siguiente mensaje.
if (nota_min_faltante_r3 > nota_max_rama3) {
	document.write(
		'\n' +
			'<p class="ps-4"> No puedes aprobar la rama ni tan siquiera alcanzando el máximo puntaje en tu tercera nota de la última rama. Lo siento :( </p>'
	);
}
