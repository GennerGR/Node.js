const fs = require('node:fs/promises');

const folder = process.argv(2) ?? '.'

fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        if (err) {
            console.error(`Error en el directorio ${err}`)
            return;
        }
    })


// Posicion 0 == node
// Posicion 1 == fichero - archivo
// Posicion 2 == argumentos que se an pasado al programa



