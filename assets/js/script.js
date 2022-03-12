//Este diálogo es para recopilar el nombre del usuario.
var nombre = prompt('Hola! ¿Cuál es tu nombre?', 'Ejemplo: Bill Gates');

//Este diálogo es para recopilar qué carrera cursa el usuario.
var carrera = prompt(
	'Dime, ¿qué carrera cursas?',
	'Ejemplo: Ciencias de la computación'
);

var rama1 = prompt(
	'Por favor, ingresa el nombre de tu primera rama',
	'Ejemplo: matemáticas'
);

var rama1_nota1 = prompt(
	'Por favor ingresa tu primera nota de' + ' ' + rama1,
	'Ejemplo: 4'
);

var rama1_nota2 = prompt(
	'Por favor ingresa tu segunda nota de' + ' ' + rama1,
	'Ejemplo: 5'
);

var rama1_nota3 = prompt(
	'Por favor ingresa tu tercera nota de' + ' ' + rama1,
	'Ejemplo: 7'
);

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
document.write('<th scope="row">1</th>');
document.write('<td>1</td>');
document.write('<td>1</td>');
document.write('<td>1</td>');
document.write('<td>1</td>');

document.write('</tr>');
//Cerramos la fila para la primera rama con sus notas.

//Creamos otra fila pra la segunda rama y sus notas.
document.write('<tr>');

//En estas columnas se contienen la segunda rama y sus debidas notas.
document.write('<th scope="row">2</th>');
document.write('<td>2</td>');
document.write('<td>2</td>');
document.write('<td>2</td>');
document.write('<td>2</td>');

document.write('</tr>');
//Cerramos la fila para la segunda rama y sus notas.

//Creamos una tercera fila para la tercera rama y sus notas correspondientes.
document.write('<tr>');

//En estas columnas se contienen la tercera rama con sus dos notas.
document.write('<th scope="row">3</th>');
document.write('<td>3</td>');
document.write('<td>3</td>');
document.write('<td>3</td>');
document.write('<td>3</td>');

document.write('</tr>');
//Cerramos la tercera fila.

document.write('</tbody>');
//Cerramos el cuerpo de la tabla.

document.write('</table>');
//Cerramos la tabla que contiene las tres ramas con sus respectivas notas.
