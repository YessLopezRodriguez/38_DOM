function validateForm(){
	valorNombre = document.getElementById("name").value;
	valorApellido = document.getElementById("lastname").value;
	valorCorreo = document.getElementById("input-email").value;
	valorContrasena = document.getElementById("input-password").value;
	valorTwitter = document.getElementById("input-social").value;


	if (valorNombre == null || valorNombre.length == 0 || /^\s+$/.test(valorNombre)) {
		alert("Falta Nombre");
	}
	if (valorApellido == null || valorApellido.length == 0 || /^\s+$/.test(valorApellido)) {
		alert("Falta Apellido");  
	}
	if (!/^[a-zA-Z]*$/g.test(document.getElementById("name").value)) {
		alert("El nombre sólo debe tener solo letras");
	}
	if (/[a-z]/.test(valorNombre[0]) || /[a-z]/.test(valorApellido[0])){
		alert("La primer letra debe ser mayuscula");
	}	
	if (valorCorreo == null || valorCorreo.length == 0 || /^\s+$/.test(valorCorreo)) {
		alert("Falta Correo");    
	}	
	if (valorContrasena == null || valorContrasena.length == 0 || /^\s+$/.test(valorContrasena)) {
		alert("Falta Contraseña"); 
	}
	if (valorTwitter == null || valorTwitter.length == 0 || /^\s+$/.test(valorTwitter)) {
		alert("Falta Twitter");   
	}
	if (valorContrasena.length < 6) {
		alert("Ingresar al menos 6 caracteres en contraseña");
	}
	if (valorContrasena=="password" || valorContrasena =="123456" || valorContrasena == "098754") {
		alert("Cambia tu contraseña");
	}
}
