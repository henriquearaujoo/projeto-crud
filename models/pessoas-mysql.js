//arquivo responsavel pelas operações da entidade pessoas
const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from pessoas order by id desc', (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }

        })
    })
}

const deleteOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('delete from pessoas where id = ' + id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const create = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into pessoas (nome, nascimento, cargo) values ('${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })

    })
}

const findById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from pessoas where id = ' + id, (err, results) => {
            if (err) {
                reject(err)
            } else {
                if (results.length > 0) {
                    resolve(results[0])
                } else {
                    resolve({})
                }

            }

        })
    })
}

const update = (connection, id, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`update pessoas set nome = '${data.nome}', nascimento = '${data.nascimento}', cargo = '${data.cargo}' where id = ${id}`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })

    })
}

module.exports = {
    findAll,
    findById,
    deleteOne,
    create,
    update
}