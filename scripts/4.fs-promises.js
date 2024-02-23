const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo ...')
fs.readFile('../1.txt', 'utf-8')
.then(text => {
    console.log(`Primer texto: ${text}`)
})
.catch(error => {
   console.log(error)
})

console.log('Hace cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo ...')
fs.readFile('../2.txt', 'utf-8')
.then(secondText => {
    console.log(`Segundo texto: ${secondText}`)
})

//Promesa

console.log('Leyendo el main:')
fs.readFile('../main.txt', 'utf-8') // Funcion asincrona
.then(main => {                     // Promesa
    console.log(`Main: ${main}`)
    console.log(main.length)
})


//Una funcion asincrona que lee un archivo y devuelve una promesa.




//Casos en por lo que sea no se esta dando una version por promesas -- Callback a promesas.
//Esto solo en los modulos nativos que no tienen promesas nativas

//const(promisify) = require.('node:util')
//const readFilePromise = promisify(fs.readFile)



