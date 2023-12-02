let resultado = document.getElementById("resultado");
let clase = 0;

function calcularCA(totalalimento, pesoinicial, pesofinal) {
    let ca = totalalimento / (pesofinal - pesoinicial);
    return ca;
}

function calcularRendimientoCanal(pesovivo, pesocanal) {
    let rendimiento = (pesocanal / pesovivo) * 100;
    return rendimiento;
}

function validarEntradas() {
    let alimento, pesoinicial, pesofinal, pesovivo, canal;

    if (clase === 1) {
        alimento = parseFloat(document.getElementById('alimentoinput').value);
        pesoinicial = parseFloat(document.getElementById('pesoInicialinput').value);
        pesofinal = parseFloat(document.getElementById('pesoFinalinput').value);
    }

    if (clase === 2) {
        pesovivo = parseFloat(document.getElementById('pesoVivoinput').value);
        canal = parseFloat(document.getElementById('pesoEnCanalinput').value);
    }

    if (alimento <= 0 || pesoinicial <= 0 || pesofinal <= 0 || pesovivo <= 0 || canal <= 0) {
        resultado.innerHTML = '<h5>Error: Ingresa valores mayores que 0 para realizar el cálculo.</h5>';
        return false;
    }

    return true;
}

function mostrarEntradas() {
    let opcion = document.getElementById("opciones");
    let entrada = opcion.value;
    let op1 = document.getElementById("conversional");
    let op2 = document.getElementById("pesocanal");
    let btn = document.getElementById("btn");

    console.log(entrada);

    if (entrada == 1) {
        op1.style.visibility = "visible";
        btn.style.visibility = "visible";
        op2.style.visibility = "hidden";
        clase = 1;
    }
    if (entrada == 2) {
        op2.style.visibility = "visible";
        btn.style.visibility = "visible";
        op1.style.visibility = "hidden";
        clase = 2;
    }
}

function mostrarResultado() {
    if (!validarEntradas()) {
        return;
    }

    if (clase === 1) {
        let alimento = parseFloat(document.getElementById('alimentoinput').value);
        let pesoinicial = parseFloat(document.getElementById('pesoInicialinput').value);
        let pesofinal = parseFloat(document.getElementById('pesoFinalinput').value);

        let respuesta = calcularCA(alimento, pesoinicial, pesofinal);
        resultado.innerHTML = `<h5>El animal deberá consumir ${respuesta.toFixed(3)} kg de alimento para ganar 1kg de peso</h5>`;
    }

    if (clase === 2) {
        let pesovivo = parseFloat(document.getElementById('pesoVivoinput').value);
        let canal = parseFloat(document.getElementById('pesoEnCanalinput').value);

        let respuesta = calcularRendimientoCanal(pesovivo, canal);
        resultado.innerHTML = `<h5>El rendimiento del animal es de un ${respuesta.toFixed(3)}%</h5>`;
        console.log(pesovivo, canal);
    }
}
