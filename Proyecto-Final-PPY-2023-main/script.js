let PESOCANAL = document.getElementById("pesoEnCanalinput").value;
let resultado = document.getElementById("resultado");
let respuesta;
let clase = 0;

function calcularCA(totalalimento , pesoinicial , pesofinal){

let ca = totalalimento / (pesofinal-pesoinicial)

return ca;



}
function calcularRendimientoCanal(pesovivo,pesocanal){

 let rendimiento = (pesocanal/pesovivo*100);
 return rendimiento;

}

function mostrarEntradas(){

	let opcion = document.getElementById("opciones");
	let entrada = opcion.value;
	let op1 = document.getElementById("conversional");
	let op2 = document.getElementById("pesocanal");
	let bt = document.getElementById("btn");

	console.log(entrada);


	if (entrada == 1){

		
		op1.style.visibility = "visible";
		btn.style.visibility = "visible";
		op2.style.visibility = "hidden";
		clase = 1;
		


	}
	if (entrada == 2){

		op2.style.visibility = "visible";
		btn.style.visibility = "visible";
		op1.style.visibility = "hidden";
		clase = 2;
		
	}

 

}

function mostrarResultado(){

	

    
    
	if (clase == 1) {

		let alimento = document.getElementById('alimentoinput').value;
		let pesoinicial = document.getElementById('pesoInicialinput').value;
		let pesofinal = document.getElementById('pesoFinalinput').value;
		let a = parseFloat(alimento);
		let pi = parseFloat(pesoinicial);
		let pf = parseFloat(pesofinal);

		respuesta = calcularCA(a,pi,pf);
		           

		resultado.innerHTML = '<h5>El animal deberá consumir '+ respuesta.toFixed(3) + ' kg de alimento para ganar 1kg de peso</h5>';

	}

	if (clase == 2) {

		let pesovivo = document.getElementById('pesoVivoinput').value;
		let canal =  document.getElementById('pesoEnCanalinput').value;
		let pv = parseFloat(pesovivo);
		let pc = parseFloat(canal);
		respuesta = calcularRendimientoCanal(pv,pc);

		resultado.innerHTML = '<h5>El rendimiento del animal es de un '+ respuesta.toFixed(3) + '%</h5>';
		console.log(pesovivo,canal);
		
	}


}