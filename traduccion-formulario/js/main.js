var idioma = "es";
var elh2 = document.getElementById("form-signin-heading");
var elspan = document.getElementById("span");
var elboton = document.getElementById("boton");
var elinput1 = document.getElementById('inputuno');
var elinput2 = document.getElementById('inputdos');



if (idioma == "es") {
	elh2.innerHTML="Por favor inicia sesión";
	elspan.innerHTML="Recordar datos";
	elboton.innerHTML="Iniciar sesión";
	elinput1.placeholder = "Correo Electrónico";
	elinput2.placeholder = "Contraseña";
}
