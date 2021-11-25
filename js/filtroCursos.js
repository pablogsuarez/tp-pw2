// Filtro de cursos en calendario

$(document).ready(function() {
    $('#establecimiento').change(function() {
        filtrarPor($(this).val(), $('#idioma').val());
    });
    
    $('#idioma').change(function() {
        filtrarPor($('#establecimiento').val(),$(this).val());
    });

});

function filtrarPor(establecimiento, idioma) {
    $('.cuatro-columnas-calendario').each(function(){
        $(this).hide();
        if($(this).hasClass(establecimiento) && $(this).hasClass(idioma)) {
            $(this).show();
        }
    });

}