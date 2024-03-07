let express = require('express');

const app = express()
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000...')
})

app.get('/a', (_req, res) => {
    res.sendFile('index.html')
    console.log('pepe')
})

app.get('/', (_req, res) => {
    res.sendFile('public/admin.html')
    console.log('admin')
})