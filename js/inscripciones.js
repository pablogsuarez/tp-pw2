let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
let regexTelefono = /^[0-9]{4}\-[0-9]{4}$/;

window.onload = function () {
  let form = document.getElementById('form');
  form.onsubmit = function (e) {
    e.preventDefault(); //prevenir la acción por defecto
    let error = false;
    let mensajesError = '';
    resetear();
    /*logica de validacion*/
    if (document.getElementById('nombre').value == '') {
      error = true;
      mensajesError += '<p>El campo nombre es obligatorio.</p>';
      document.getElementById('nombre').className = 'error';
    }

    if (document.getElementById('apellido').value.length == 0) {
      error = true;
      mensajesError += '<p>El campo apellido es obligatorio.</p>';
      document.getElementById('apellido').className = 'error';
    }

    if (!regexEmail.test(document.getElementById('email').value)) {
      error = true;
      mensajesError += '<p>El campo email no tiene el formato correcto.</p>';
    }

    if (!regexTelefono.test(document.getElementById('telefono').value)) {
      error = true;
      mensajesError += '<p>El telefono debe tener el formato 1234-5678.</p>';
      document.getElementById('telefono').className = 'error';
    }

    if (document.getElementById('provincia').value == '0') {
      error = true;
      mensajesError += '<p>Selecciona una provincia es obligatorio.</p>';
      document.getElementById('provincia').className = 'error';
    }

    if (document.getElementById('ciudad').value == '') {
      error = true;
      mensajesError += '<p>El campo ciudad es obligatorio.</p>';
      document.getElementById('ciudad').className = 'error';
    }

    /*Si hay errores que se muestren*/
    /*Si no los hay, que el formulario se envíe*/
    if (error) {
      document.getElementById('mensaje').innerHTML = mensajesError;
    } else {
      this.submit();
    }
  };

  let idioma = localStorage.getItem('idioma');
  let establecimiento = localStorage.getItem('establecimiento');
  let horario = localStorage.getItem('horario');
  let precio = localStorage.getItem('precio');

  if (idioma == 'Chino') {
    document.getElementById('fechaCurso').innerHTML = '7/10';
  } else if (idioma == 'Alemán') {
    document.getElementById('fechaCurso').innerHTML = '10/10';
  } else if (idioma == 'Francés') {
    document.getElementById('fechaCurso').innerHTML = '13/10';
  } else if (idioma == 'Inglés') {
    document.getElementById('fechaCurso').innerHTML = '4/10';
  }

  document.getElementById('idiomaCurso').innerHTML = idioma;
  document.getElementById('establecimientoCurso').innerHTML = establecimiento;
  document.getElementById('horarioCurso').innerHTML = horario;
  document.getElementById('precioCurso').innerHTML = precio;
};

function resetear() {
  document.getElementById('nombre').className = '';
  document.getElementById('apellido').className = '';
  document.getElementById('email').className = '';
  document.getElementById('telefono').className = '';
  document.getElementById('provincia').className = '';
  document.getElementById('ciudad').className = '';
}

//local storage intento volumen 1
