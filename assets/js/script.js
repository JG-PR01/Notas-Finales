//Este diálogo es para recopilar el nombre del usuario.
var nombre = prompt('Hola! ¿Cuál es tu nombre?', 'Ejemplo: Bill Gates');

//Este diálogo es para recopilar qué carrera cursa el usuario.
var carrera = prompt(
	'Dime, ¿qué carrera cursas?',
	'Ejemplo: Ciencias de la computación'
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

document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');
document.write('');

<table class="table">
	<thead>
		<tr>
			<th scope="col">Ramo</th>
			<th scope="col">Nota1</th>
			<th scope="col">Nota2</th>
			<th scope="col">Nota3</th>
			<th scope="col">Promedio</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row"></th>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<th scope="row"></th>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<th scope="row">3</th>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>;
