
/**** validacion para campos de universidad */
const formularios = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');

const expresion = {
    NombreUniversidad: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    AbreviaturaUniversidad: /^[a-zA-ZÀ-ÿ\s]{1,8}$/, // Letras y espacios, pueden llevar acentos.
    CorreoUniversidad: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    CelularUniversidad: /^\d{7,10}$/,// 10 numeros.
    DireccionUniversidad: /^[a-zA-Z0-9\s\_\-]{1,30}$/, // Letras, numeros, guion y guion_bajo
    WebUniversidad: /^[a-zA-Z0-9\s\_\-]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    NombreDirector: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    EmailDirector: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    EmailSecretaria: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const camposs = {
    NombreUniversidad: false,
    AbreviaturaUniversidad: false,
    CorreoUniversidad: false,
    CelularUniversidad: false,
    DireccionUniversidad: false,
    WebUniversidad: false,
    NombreDirector: false,
    EmailDirector: false,
    EmailSecretaria: false

}

const validarFormularioUni = (e) => {
    switch (e.target.name) {
        case "NombreUniversidad":
            validarCampoUni(expresion.NombreUniversidad, e.target, 'NombreUniversidad');
            break;
        case "AbreviaturaUniversidad":
            validarCampoUni(expresion.AbreviaturaUniversidad, e.target, 'AbreviaturaUniversidad');
            break;
        case "CorreoUniversidad":
            validarCampoUni(expresion.CorreoUniversidad, e.target, 'CorreoUniversidad');
            break;
        case "CelularUniversidad":
            validarCampoUni(expresion.CelularUniversidad, e.target, 'CelularUniversidad');
            break;
        case "DireccionUniversidad":
            validarCampoUni(expresion.DireccionUniversidad, e.target, 'DireccionUniversidad');
            break;
        case "WebUniversidad":
            validarCampoUni(expresion.WebUniversidad, e.target, 'WebUniversidad');
            break;
        case "NombreDirector":
            validarCampoUni(expresion.NombreDirector, e.target, 'NombreDirector');
            break;
        case "EmailDirector":
            validarCampoUni(expresion.EmailDirector, e.target, 'EmailDirector');
            break;
        case "EmailSecretaria":
            validarCampoUni(expresion.EmailSecretaria, e.target, 'EmailSecretaria');
            break;
    }
}


const validarCampoUni = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        camposs[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        camposs[campo] = false;
    }
}


input.forEach((input) => {
    input.addEventListener('keyup', validarFormularioUni);
    input.addEventListener('blur', validarFormularioUni);
});



const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__Close');
openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});


closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});

