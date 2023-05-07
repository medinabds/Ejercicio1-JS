
function primo(numero) {

if (typeof numero !== 'number'){
    throw new Error('no es un numero');
}
    let esprimo = true;

    if (numero === 1 || numero === 2 || numero === 0 || numero === 4) {
        return false;
    }

    for (let j = 2; j < numero / 2; j++) {
        if (numero % j === 0) {
            return false;
        }


    }

    return esprimo;
}

const array = [0, 1, 2, 4, 50, 51, 3, '500', 7, 11, 1311, 999983];
const numerosprimos = [];

for (let i = 0; i < array.length; i++) {
    try{
        const primo2 = primo(array[i]);
        if(primo2){
            // console.log('Es primo:', array[i]);
            numerosprimos.push(array[i]);
             }
    }catch(err){
        console.log ('Estoy catch y recibo:', err)
    }

    

  
}

console.log(numerosprimos);
