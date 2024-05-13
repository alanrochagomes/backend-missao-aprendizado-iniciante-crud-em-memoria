const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const lista = ['Java', 'Kotlin', 'Android']
//              0       1         2

// Endpoint Read All [GET] /personagem
app.get('/personagem', function (req, res) {
    res.send(lista)
})

// Endpoint Read By Id [GET] /personagem/:id
app.get('/personagem/:id', function (req, res) {
    // Acessamos o parâmetro de rota ID-
    const id = req.params.id

    // Acessa o item na lista usando o Id - 1
    const item = lista [id - 1]

    // Enviamos o item como resposta
    res.send(item)
})

app.listen(3000)