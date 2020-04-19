//arquivo responsavel pelas operações da entidade pessoas
const findAll = async(connection) => {
    try {
        const results = await connection('pessoas')
            .select('*')
            .orderBy('id', 'desc')

        return results
    } catch (error) {
        return error
    }

}

const findById = async(connection, id) => {
    try {
        const results = await connection('pessoas')
            .where({ id: id })
            .select('*')

        if (results.length > 0)
            return results[0]
        else
            return {}
    } catch (error) {
        return error
    }
}

const deleteOne = async(connection, id) => {

    try {
        await connection('pessoas').where({ id: id }).del()
    } catch (error) {
        return error
    }

}

const create = async(connection, data) => {
    try {
        await connection('pessoas').insert(data)
    } catch (error) {
        return error
    }
}

const update = async(connection, id, data) => {
    try {
        const results = await connection('pessoas')
            .where({ id: id })
            .update(data)

        return results
    } catch (error) {
        return error
    }
}

module.exports = {
    findAll,
    findById,
    deleteOne,
    create,
    update
}