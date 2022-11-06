//validaciones para campos de solo letras
function sletras(e) {
	key = e.keyCode || e.which;
	teclado = String.fromCharCode(key).toString();
	letras = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ";
	especiales = "8-37-38-46-164";
	teclado_especial = false;
	for (var i in especiales) {
		if (key == especiales[i]) {
			teclado_especial = true;
			break;
		}
	}
	if (letras.indexOf(teclado) == -1 && !teclado_especial) {
		return false;
	}
}


//validaciones para campos de solo numeros
function numeros(evt) {
	// code is the decimal ASCII representation of the pressed key.
	var code = (evt.which) ? evt.which : evt.keyCode;

	if (code == 8) { // backspace.
		return true;
	} else if (code >= 48 && code <= 57) { // is a number.
		return true;
	} else { // other keys.
		return false;
	}
}

// funcion para leer y cargar la imagen en pantalla 

let vistapreliminar = (event) => {
	let leer_img = new FileReader(); //crea una objeto
	let id_img = document.getElementById("img-foto"); // crea otro objeto y se llena con la informacion de la imgane cargada en el formulario
	leer_img.onload = () => {
		if (leer_img.readyState == 2) {
			id_img.src = leer_img.result;
		}
	}
	leer_img.readAsDataURL(event.target.files[0]);
}

//Metodo para visibilidad de contraseña en el login

let banderaVisibilidad = true;
function functionVisibilidadPassword() {
	var elemento = document.getElementById("icono-eye");
	var inputPassword = document.getElementById("user_password");
	if (banderaVisibilidad) {
		elemento.classList.replace("bi-eye", "bi-eye-slash");
		inputPassword.type = "text";
		banderaVisibilidad = false;
	}
	else {
		elemento.classList.replace("bi-eye-slash", "bi-eye");
		inputPassword.type = "password";
		banderaVisibilidad = true;
	}

}

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	NombreAdmin: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	ApellidoAdmin: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	CedulaAdmin: /^\d{10,10}$/,// 10 numeros.
	CelularAdmin: /^\d{7,10}$/, // 7 a 10 numeros.
	ContraseñaAdmin: /^.{6,15}$/, // 6 a 15 digitos.
	EmailAdmin: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	DireccionAdmin: /^[a-zA-Z0-9\s\_\-]{1,30}$/, // Letras, numeros, guion y guion_bajo

}
const campos = {
	NombreAdmin: false,
	ApellidoAdmin: false,
	CedulaAdmin: false,
	CelularAdmin: false,
	EmailAdmin: false,
	DireccionAdmin: false,
	ContraseñaAdmin: false

}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "NombreAdmin":
			validarCampo(expresiones.NombreAdmin, e.target, 'NombreAdmin');
			break;
		case "ApellidoAdmin":
			validarCampo(expresiones.ApellidoAdmin, e.target, 'ApellidoAdmin');
			break;
		case "CedulaAdmin":
			validarCampo(expresiones.CedulaAdmin, e.target, 'CedulaAdmin');
			break;
		case "CelularAdmin":
			validarCampo(expresiones.CelularAdmin, e.target, 'CelularAdmin');
			break;
		case "EmailAdmin":
			validarCampo(expresiones.EmailAdmin, e.target, 'EmailAdmin');
			break;
		case "DireccionAdmin":
			validarCampo(expresiones.DireccionAdmin, e.target, 'DireccionAdmin');
			break;

		case "ContraseñaAdmin":
			validarCampo(expresiones.ContraseñaAdmin, e.target, 'ContraseñaAdmin');
			validarPassword2();
			break;
		case "ConfirmarContraseña":
			validarPassword2();
			break;
	}
}


const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('ContraseñaAdmin');
	const inputPassword2 = document.getElementById('ConfirmarContraseña');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__ConfirmarContraseña`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__ConfirmarContraseña`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__ConfirmarContraseña i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__ConfirmarContraseña i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__ConfirmarContraseña .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['ContraseñaAdmin'] = false;
	} else {
		document.getElementById(`grupo__ConfirmarContraseña`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__ConfirmarContraseña`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__ConfirmarContraseña i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__ConfirmarContraseña i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__ConfirmarContraseña .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['ContraseñaAdmin'] = true;
	}
}