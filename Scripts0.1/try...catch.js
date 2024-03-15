const fs = require ('node:fs')


//Uso del try...catch: no es del todo necesario, 
//por que estoy utilizando codigo asincrono, pero ocacionalmente puede ser util
//ya que se pueden manejar errores de forma mas eficiente con funciones asincronas y codigo sincrono.


try {
    // Código que puede lanzar un error
    console.log('Primer lectura')
    fs.readFile('../5.txt', 'utf-8', (err, data) => {
        // console.log(`Resultados: ${data}`)
        if (err) {
            console.log('Error:', err.message)
            return
        }
        else {
            console.log(`Resultados: ${data}`)
        }
    })
} catch (error) {
    console.error('Error:', error.message);
}

console.log(`.........................................................`);

console.log('Segunda lectura')
fs.readFile('../1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(`Error: ${err.message}`)
        return
    }
        console.log(`Resultados: ${data}`)
})




