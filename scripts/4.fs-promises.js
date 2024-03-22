const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo')
fs.readFile('../1.txt', 'utf-8')
.then(uno => {
    console.log(`resultados del primer archivo: ${uno}`)
});

console.log('haciendo cosas mientras hace otras cosas')

console.log('Leyendo el segundo archvo')
fs.readFile('../2.txt', 'utf-8')
.then(dos => {
    console.log(`resultados del segundo archivo: ${dos}`)
});

//Promesa

console.log('Leyendo el tercer archivo')
fs.readFile('../3.txt', 'utf-8')
.then(tres => {
    console.log(`resultados del tercer archivo: ${tres}`)
    console.log(tres.length)
});






console.log('Leyendo un archivo')
fs.readFile('../4.txt', 'utf-8')
.then(cuatro => {
    console.log(`resultados del cuarto archivo: ${cuatro}`)
    console.log(cuatro.length)
})


//Una funcion asincrona que lee un archivo y devuelve una promesa.





//Casos en por lo que sea no se esta dando una version por promesas -- Callback a promesas.
//Esto solo en los modulos nativos que no tienen promesas nativas

//const(promisify) = require.('node:util')
//const readFilePromise = promisify(fs.readFile)










