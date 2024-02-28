const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', checkCalcular);

function checkCalcular() {
    const DATO = document.getElementById('peso').value;
    //validamos que el DATO ingresado no es 0:
    if (DATO > 0) {
        //analizamos que metodo usar segun el peso(DATO) ingresado
        //si el peso esta entre 1 y 30 se usa el metodo holliday Segar
        if (DATO > 0 && DATO <= 30) {
            let flujo = (hollidaySegar(DATO) / 24);
            let m2 = flujo + (flujo / 2);
            FLU.innerHTML = flujo.toFixed() + ' cc/hr';
            FLU.style.display = 'block';
            MAN.innerHTML = 'm+m/2 ' + m2.toFixed() + '   cc/hr';
            console.log(flujo + (flujo / 2));
            MAN.style.display = 'block';

        }
        //si el peso es mayor a 30 usamos el metodo de superficie corporal
        if (DATO > 30) {
            let flujo = supCorporal(DATO);
            ERROR.style.display = 'none';
            FLU.style.display = 'none';
            MAN.innerHTML =  (flujo*1500).toFixed() + '   cc/hr' + ' x 1500';
            MAN.style.display = 'block';
        }




    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }

}

function hollidaySegar(peso) {
    let volumen;

    if (peso <= 10) {


        volumen = peso * 100;


    }
    if (peso > 10 && peso <= 20) {


        volumen = 1000 + (peso - 10) * 50;


    }

    if (peso > 20 && peso <= 30) {


        volumen = 1500 + (peso - 20) * 20;


    }

    return volumen;

}

function supCorporal(peso) {
    let volumen = ((peso * 4) + 7) / (peso + 90);

    return volumen;

}

