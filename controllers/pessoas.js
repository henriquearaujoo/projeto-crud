const pessoasModel = require('../models/pessoas')

const index = async(connection, req, res) => {
    const pessoas = await pessoasModel.findAll(connection)
    res.render('pessoas/index', {
        pessoas
    })
}

const deleteOne = async(connection, req, res) => {
    await pessoasModel.deleteOne(connection, req.params.id)
    res.redirect('/pessoas')
}

const create = async(req, res) => {
    res.render('pessoas/create')
}

const createProcess = async(connection, req, res) => {
    await pessoasModel.create(connection, req.body)
    res.redirect('/pessoas')
}

const update = async(connection, req, res) => {
    const pessoa = await pessoasModel.findById(connection, req.params.id)
    res.render('pessoas/update', {
        pessoa
    })
}

const updateProcess = async(connection, req, res) => {
    await pessoasModel.update(connection, req.params.id, req.body)
    res.redirect('/pessoas')
}

module.exports = {
    index,
    deleteOne,
    create,
    createProcess,
    update,
    updateProcess
}