const { promises } = require("dns");

function hervirAgua () {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('Agua hirviendo');
            resolve('Agua caliente');
        }, 3000);
    });
}

function molerCafe () {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('Molieno el cafe');
            resolve('El cafe esta molido')
        }, 5000);
    })
}

function prepararCafe () {
    console.log('Preparando el cafe...');
    return Promise.all([hervirAgua(), molerCafe()])
    .then(resultados => {
        console.error(warn('......................................'))
        console.log(resultados[0], resultados[1], 'Cafe preparado:');
        return 'Cafe servido';
    })
    .catch(() => console.log(Error('pepe')))
}

prepararCafe() 
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error(error);
    })

//Pasos para preparar cafe:
//hervir agua
//moler el cafe
//preparar el cafe





