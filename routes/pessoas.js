//arquivo responsavel pelas rotas de pessoas
const express = require('express')
const pessoasController = require('../controllers/pessoas')

//cria uma função q injeta as dependencias
const pessoasRouter = ({ connection }) => {
    const router = express.Router()
        //bind cria uma nova função passando um novo contexto como primeiro parametro
        //em seguida os parametros desejados.
        //cria uma rota para o index de pessoas
    router.get('/', pessoasController.index.bind(null, connection))
        //cria uma rota para o delete pessoa
    router.get('/delete/:id', pessoasController.deleteOne.bind(null, connection))
        //cria uma rota para novo cadastro
    router.get('/create', pessoasController.create)
        //cria uma rota para o post do novo cadastro
    router.post('/create', pessoasController.createProcess.bind(null, connection))
    router.get('/update/:id', pessoasController.update.bind(null, connection))
    router.post('/update/:id', pessoasController.updateProcess.bind(null, connection))
    return router
}


module.exports = pessoasRouter