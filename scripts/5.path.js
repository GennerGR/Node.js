const path = require('node:path')

//barra separadora de carpetas segun OS
console.log(path.sep)

// --> unix /
// --> windows \

// unir rutas con path.join
const filePath = path.join('carpeta1', 'carpeta2', '1.txt')
console.log(filePath)

//nombre del fichero
const base = path.basename('./tmp/alex-secret-files/password.txt')
console.log(base)

//nombre del fichero sin extension
const filename = path.basename('./tmp/alex-secret-files/password.txt', '.txt')
console.log(filename)

//extencion
const extension = path.extname('imagen.jpeg')
console.log(extension)



