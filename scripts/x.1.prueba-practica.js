    const {promises} = require('dns') 

function cruzSuperior () {
    return new Promise((resolve, _reject) => {
        setTimeout (() => {
            console.log('Armar la cruz superior');
            resolve('Cruz armada');
        }, 1000);
    })
}

(
async function pepe () {
    try{
        console.log('haciendo peticion')
    }
    catch{
        console.log('fallo')
    }
})()

function caraSuperior () {
    return new Promise((resolve, _reject) => {
        setTimeout (() => {
            console.log('Armar la cara superior');
            resolve('Cara superior armada')
        }, 2000);
    })
}

function capaMedia () {
    return new Promise((resolve, _reject) => {
        setTimeout (() => {
            console.log('Completar la capa del medio');
            resolve('Capa del medio completada')
        }, 3000);
    })
}

function cruzSuperior () {
    return new Promise((resolve, _reject) => {
        setTimeout(() => { 
            console.log('Armar la cruz de la cara superio   r')
            resolve('Cruz superior armada')
        }, 4000)
    })
}

function acomodarCruzSuperior () {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('Acomodar los colores de la cruz superior')
            resolve('Colores acomodados')
        }, 5000)
    })
}

function ultimasEsquinas () {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('Orientar bien las ultimas 3 esquinas')
            resolve('Esquinas orientadas')
        }, 6000);
    })
}

function utlimasDosEsquinas () {
    return new Promise ((resolve, _reject) => {
        setTimeout(() => {
            console.log('Acomodar las ultimas dos esquinas');
            resolve('Ultimas esquinas acomodadas')
        }, 7000);
    })
}

function armarCubo () {
    console.log('Armando el cubo....');
    return Promise.all([cruzSuperior(), caraSuperior(), capaMedia(), acomodarCruzSuperior(), ultimasEsquinas(), utlimasDosEsquinas()])
        .then(resultados => {
            console.log(warn('........................................'))
            console.log('Pasos realizados', resultados[0], resultados[1], resultados[2], resultados[3], resultados[4], resultados[5], resultados[6])
            return 'Cubo armado';
        })
        .catch(() => console.log(Error('rechazo de promesa')))
}

armarCubo()
.then (resultado => {
    console.log(resultado);
})
.catch (error => {
    console.error(error);
})


//Armar un cubo de rubik
//1. La cruz superior.
//2. Completar la cara superior.
//3. Completar la capa del medio.
//4. Completar la cruz de la cara superior.
//5. Acomodar los colores de la cruz superior.
//6. Orientar bien las ultimas 3 esquinas.
//7. Acomodar las ultimas dos esquinas.





//peticiones (all)
//verbos http




