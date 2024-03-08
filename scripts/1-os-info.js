const os =  require('node:os')

console.info('Informacion del sistema operativo')
console.log('----------------------------------')

console.info('Nombre del sistema operativo', os.platfomr)
console.info('Version del sistema operativo', os.release)
console.info('Arquitectura', os.arch)
console.info('CPUs', os.cpus())
console.info('Memoria libre', os.freemem() / 1024 / 1024)
console.info('Memoria total', os.totalmem() / 1024 / 1024)

console.log('uptime', os.uptime() / 60 / 60)


//control + punto __ convertir require a import





