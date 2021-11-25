$(document).ready(function() {
    
    $('#formulario-contacto').submit(function(evento) {
        validar(evento);
    });

    $('textarea').keyup(function() {
        let cantidadRestante = 1000 - $(this).val().length;
        $('#restantes').html(` (${cantidadRestante} restantes)`);
    });

    $('.close').click(function(){
        $('#modal').hide();
    });

});

function validar(evento) {

    let esValido = true;
    let errores = "";
    let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    let regexTelefono=/^[0-9]{4}\-[0-9]{4}$/;

    let telefono = $('#telefono').val();

    const divErrores = $('#errores');
    divErrores.empty();
    
    if($('#nombre').val() == '' || $('#apellido').val() == '') {
        esValido = false;
        divErrores.append("<p>El nombre y/o apellido no pueden estar vacíos</p>");
    }

    if(!regexEmail.test(document.getElementById('correo').value)) {
        esValido = false;
        divErrores.append("<p>El email no es válido</p>");
    }

    if(!telefono == '' && !regexTelefono.test(telefono)) {
        esValido = false;
        divErrores.append("<p>El telefono debe tener el formato 1234-5678 o ninguno</p>")
    }

    if(!esValido) {
        evento.preventDefault();
    } else {
        // Muestra modal exitoso
        $('#modal').show();
        evento.preventDefault();
    }

}