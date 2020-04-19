const express = require('express')
const path = require('path')
    //cria uma nova aplicação com express
const app = express();
//pega a porta 3000 caso não tenho no enviroment
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

// conexão com mysql
// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 's3nh@root',
//     database: 'cadastro'
// })
const connection = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 's3nh@root',
        database: 'cadastro'
    }
})

//cria um objeto com as dependencias
const dependencies = {
    connection
}

const pessoas = require('./routes/pessoas')


app.use(bodyParser.urlencoded({ extended: false }))
    //public pasta de assets
app.use(express.static('public'))

//rota para o home
app.get('/', (req, res) => {
    res.render('home')
})

//rota para pessoas passando as dependencias
app.use('/pessoas', pessoas(dependencies))

//seta a pasta views para as views da aplicação
app.set('views', path.join(__dirname, 'views'))
    //seta o ejs como view engine
app.set('view engine', 'ejs')

//conecta com o banco, se ok abre o listen do express
// connection.connect((erro) => {
//     if (erro) {
//         console.log('Erro ao conectar')
//     } else {
//         app.listen(port, () => {
//             console.log('Servidor rodando')
//         })

//     }
// })

app.listen(port, () => {
    console.log('Servidor rodando')
})