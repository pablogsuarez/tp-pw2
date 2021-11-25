document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('filtro').onkeyup = function() {
        filtrarPorProvincia(this.value);
    }

});

function filtrarPorProvincia(provinciaABuscar) {
    
    // Se obtienen todos los articles de establecimiento
    const establecimientos = document.getElementsByClassName('contenedor-columnas-establecimientos');
    const sinResultados = document.getElementById('sin-resultados');
    sinResultados.style.display = 'none';

    
    // Se cuentan las clases que se ocultan
    let contador = 0;

    // Por cada uno se verifica si contiene el nombre de la provincia a buscar
    for(let establecimiento of establecimientos) {
        // Primero se resetean todos a visible
        establecimiento.style.display = "";

        // Se obtiene el texto de la etiqueta span que contiene el nombre de la provincia
        // Paso todo a minisculas por las dudas
        let parrafoProvincia = establecimiento.querySelector('.provincia').innerHTML.toLowerCase();

        // Si no contiene el nombre de la provincia a buscar, se oculta
        if(!parrafoProvincia.includes(provinciaABuscar.toLowerCase())) {
            establecimiento.style.display = "none";
            contador++;
        }
    }

    // Si se ocultaron todos, se muestra el elemento sin resultados
    if(contador == 8) {
        sinResultados.style.display = "block";
    }
}