var nombre = prompt('Hola! ¿Cuál es tu nombre?', 'Bill Gates');

var carrera = prompt;

//Aquí creamos un div para para unir dos columnas en una sola fila y así agregar los datos personales del usuario.
document.write('<div class="row row-cols-1 row-cols-md-2">');

//Aquí van los datos personales del usuario
document.write('<h2 class="col">Nombre:</h2>');
document.write('<p class="col">' + nombre + '</p>');
document.write('<h2 class="col">' + carrera + '</h2>');
document.write('<p class="col">Jose G.</p>');

//Aquí cerramos el div que une dos columnas en una sola fila.
document.write('</div>');

document.write('');
