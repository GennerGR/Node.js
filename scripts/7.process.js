// argumentos de entrada 
console.log(process.argv);

// podemos controlar eventos del proceso
process.on('exit', () => {
    //limpiar los recursos
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.CH)

// controlar el proceso y su salida
process.exit(1); // <--- con 0 todo bien, con 1 un error y tiene que salir.

