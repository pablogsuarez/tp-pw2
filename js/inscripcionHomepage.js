// Inscripciones en la Hompage

document.addEventListener('DOMContentLoaded', function () {
  // Cambio en select de provincia
  document.getElementById('provincia').onchange = function () {
    cambioEnProvincia(this.value);

    cambioEnEstablecimiento(document.getElementById('establecimiento').value);

    cambioEnIdioma(document.getElementById('idiomas').value);
  };

  // Cambio en select de establecimiento
  document.getElementById('establecimiento').onchange = function () {
    cambioEnEstablecimiento(this.value);
    cambioEnIdioma(document.getElementById('idiomas').value);
  };

  // Cambio en el select de idiomas
  document.getElementById('idiomas').onchange = function () {
    cambioEnIdioma(this.value);
  };

  // Guardar datos de inscripcion en localstorage
  document.getElementById('inscribite').onclick = function () {
    let provincia = document.getElementById('provincia').value;
    let establecimiento = document.getElementById('establecimiento').value;
    let curso = document.getElementById('idiomas').value;
    let horario = document.getElementById('horarios').value;
    let precio = document.getElementById('precio').value;

    localStorage.setItem('provincia', provincia);
    localStorage.setItem('establecimiento', establecimiento);
    localStorage.setItem('idioma', curso);
    localStorage.setItem('horario', horario);
    localStorage.setItem('precio', precio);

    localStorage.getItem('provincia');
    localStorage.getItem('establecimiento');
    localStorage.getItem('idioma');
    localStorage.getItem('horario');
    localStorage.getItem('precio');
  };

  // Se rellenan los select con los datos si hay algo en localStorage
  // o se inicializan con los valores predeterminados
  let provincia = localStorage.getItem('provincia');
  let establecimiento = localStorage.getItem('establecimiento');

  if (provincia != undefined) {
    document.getElementById('provincia').value = provincia;
    cambioEnProvincia(localStorage.getItem('provincia'));
    document.getElementById('establecimiento').value = establecimiento;
    cambioEnEstablecimiento(establecimiento);
    cambioEnIdioma(localStorage.getItem('idioma'));
    document.getElementById('idiomas').value = localStorage.getItem('idioma');
    document.getElementById('horarios').value = localStorage.getItem('horario');
  } else {
    document.getElementById('provincia').value = 'buenosAires';
    cambioEnProvincia('buenosAires');
    cambioEnEstablecimiento('Ciudadela');
  }
});

// Funciones para los eventos
function cambioEnProvincia(valorSeleccionado) {
  const selectEstablecimiemto = document.getElementById('establecimiento');

  // Se resetean todas las opciones
  selectEstablecimiemto.innerHTML = '';

  for (let provincia in establecimientos[valorSeleccionado]) {
    selectEstablecimiemto.appendChild(crearElementoOption(provincia));
  }
}

function cambioEnEstablecimiento(valorSeleccionado) {
  let provincia = document.getElementById('provincia').value;
  const detallesEstablecimiento = document.getElementById(
    'detallesEstablecimiento'
  );
  const idiomas = document.getElementById('idiomas');
  const horarios = document.getElementById('horarios');
  const precio = document.getElementById('precio');

  let datosEstablecimiento = establecimientos[provincia][valorSeleccionado];

  // Se resetean todos los select y campos
  detallesEstablecimiento.innerHTML = '';
  idiomas.innerHTML = '';
  horarios.innerHTML = '';

  // Llena los datos del establecimiento
  for (let dato of datosEstablecimiento['datos']) {
    detallesEstablecimiento.appendChild(parrafoDatos(dato));
  }

  // Llena el select de horarios disponibles para el establecimiento
  for (let horario of datosEstablecimiento['horarios']) {
    horarios.appendChild(crearElementoOption(horario));
  }

  // Llena el select de idiomas disponibles
  for (let idioma in datosEstablecimiento['idiomas']) {
    idiomas.appendChild(crearElementoOption(idioma));
    precio.value = datosEstablecimiento['idiomas'][idioma];
  }
}

function cambioEnIdioma(valorSeleccionado) {
  let provincia = document.getElementById('provincia').value;
  let establecimiento = document.getElementById('establecimiento').value;
  let precio = document.getElementById('precio');
  let horarios = document.getElementById('horarios');

  let datosEstablecimiento = establecimientos[provincia][establecimiento];

  precio.value = datosEstablecimiento['idiomas'][valorSeleccionado];
}

// Funciones para crear etiquetas html
function crearElementoOption(valor) {
  const option = document.createElement('option');
  option.value = valor;
  const textoOption = document.createTextNode(valor);

  option.appendChild(textoOption);

  return option;
}

function parrafoDatos(dato) {
  const parrafo = document.createElement('p');
  const textoParrafo = document.createTextNode(dato);

  parrafo.classList.add('detalles');

  parrafo.appendChild(textoParrafo);

  return parrafo;
}

// JSON con datos de los establecimientos y provincias
var establecimientos = {
  buenosAires: {
    Ciudadela: {
      datos: [
        'Nombre: Ciudadela English School',
        'Direccion: Av. Rivadavia 12378',
        'Localidad: Ciudadela',
        'Provincia: Buenos Aires',
        'Email: ciudadelaEnglish@gmail.com',
      ],
      idiomas: {
        Inglés: 10000,
        Chino: 7000,
      },
      horarios: [
        'Turno tarde - Prescencial',
        'Turno tarde - Virtual',
        'Turno noche - Prescencial',
        'Turno noche - Virtual',
      ],
    },
    'Ramos Mejía': {
      datos: [
        'Nombre: Idiomas Ramos',
        'Direccion: Av. Mayo 85',
        'Localidad: Ramos Mejía',
        'Provincia: Buenos Aires',
        'Email: ramosIdiomas@gmail.com',
      ],
      idiomas: {
        Alemán: 12000,
        Chino: 7000,
      },
      horarios: [
        'Turno mañana - Prescencial',
        'Turno mañana - Virtual',
        'Turno tarde - Prescencial',
        'Turno tarde - Virtual',
      ],
    },
    'San Justo': {
      datos: [
        'Nombre: San Justo Languages',
        'Direccion: Florencio Varela 1903',
        'Localidad: San Justo',
        'Provincia: Buenos Aires',
        'Email: sanjustolanguages@outlook.com',
      ],
      idiomas: {
        Inglés: 10000,
        Francés: 9000,
      },
      horarios: [
        'Turno mañana - Prescencial',
        'Turno tarde - Virtual',
        'Turno noche - Prescencial',
        'Turno noche - Virtual',
      ],
    },
    Morón: {
      datos: [
        'Nombre: Morón International School',
        'Direccion: Domingo French 854',
        'Localidad: Morón',
        'Provincia: Buenos Aires',
        'Email: moroninternational@gmail.com',
      ],
      idiomas: {
        Alemán: 12000,
        Chino: 7000,
      },
      horarios: [
        'Turno mañana - Virtual',
        'Turno tarde - Prescencial',
        'Turno tarde - Virtual',
        'Turno noche - Prescencial',
        'Turno noche - Virtual',
      ],
    },
  },
  cordoba: {
    'Rio Cuarto': {
      datos: [
        'Nombre: Harry Potter Rio Cuarto School',
        'Direccion: Av. Italia 1589',
        'Localidad: Rio Cuarto',
        'Provincia: Córdoba',
        'Email: harryriocuarto@gmail.com',
      ],
      idiomas: {
        Francés: 10000,
        Alemán: 15000,
      },
      horarios: ['Turno tarde - Prescencial', 'Turno tarde - Virtual'],
    },
    'Carlos Paz': {
      datos: [
        'Nombre: Idiomas Carlos Paz',
        'Direccion: Frente al Reloj Cucú',
        'Localidad: Carlos Paz',
        'Provincia: Córdoba',
        'Email: idiomascarlospaz@outlook.com',
      ],
      idiomas: {
        Inglés: 12000,
        Chino: 8000,
      },
      horarios: [
        'Turno mañana - Virtual',
        'Turno tarde - Prescencial',
        'Turno tarde - Virtual',
        'Turno noche - Virtual',
      ],
    },
    'Alta Gracia': {
      datos: [
        'Nombre: Alta Gracia Languages',
        'Direccion: Av. Córdoba 4718',
        'Localidad: Alta Gracia',
        'Provincia: Córdoba',
        'Email: altagracialanguages@outlook.com',
      ],
      idiomas: {
        Inglés: 13000,
        Chino: 6000,
        Francés: 11000,
        Alemán: 14000,
      },
      horarios: [
        'Turno mañana - Virtual',
        'Turno tarde - Prescencial',
        'Turno tarde - Virtual',
        'Turno noche - Virtual',
      ],
    },
  },
};
