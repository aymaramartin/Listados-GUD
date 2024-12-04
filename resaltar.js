// Obtener la tabla
const tabla = document.getElementById('table');

// Agregar un evento al hacer clic en cualquier celda de la tabla
tabla.addEventListener('click', function(event) {
  // Verificar que se haya hecho clic en una celda (td)
  if (event.target.tagName.toLowerCase() === 'td') {
    // Obtener la fila (tr) a la que pertenece la celda
    const fila = event.target.parentElement;

    // Eliminar la clase 'resaltada' de todas las filas
    const filas = tabla.querySelectorAll('tr');
    filas.forEach(fila => fila.classList.remove('resaltada'));

    // Agregar la clase 'resaltada' a la fila en la que se hizo clic
    fila.classList.add('resaltada');
  }
});
