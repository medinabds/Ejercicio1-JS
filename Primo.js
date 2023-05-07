
const array = [0, 1, 2, 4, 50, 51, 3, 500, 7, 11, 1311,999983];

function primo() {

    for (let i = 0; i < array.length; i++) {

        const start = new Date();
        let numero = array[i];
        let esprimo = true;

        if (numero == 1 || numero == 2 || numero == 0) {
            esprimo= false;
            console.log('Estamos en una caso especial', numero);

        }

        for (let j = 2; j < numero/2; j++) {
            if (numero % j === 0) {
                esprimo = false;
                console.log('El numero', numero, 'no es primo');
                break;
            }


        }
        if (esprimo) {
            console.log('el numero', numero, 'es primo');
        }
        const end = new Date();
        console.log('Tiempo:',end.getTime()-start.getTime());
    }
}

primo();




