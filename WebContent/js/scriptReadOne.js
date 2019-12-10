/**
 * 
 */
let xhr = new XMLHttpRequest();

window.onload = function(){
	document.getElementById("btnReadOne").addEventListener("click",ReadIndividial);
}

function ReadIndividual(){
	xhr.onload = functionCallBack;
	let idProduct = document.getElementById("txtIdProduct").value;
	
	let myForm = new FormData();
	myForm.append("idProduct");
	
	xhr.open("POST","readOneServlet");
	xhr.send(myForm);
}

function functionCallBack(){
	document.getElementById("resultado").innerHTML = xhr.responseText;
}