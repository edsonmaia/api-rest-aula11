import conexao from '../database/conexao.js'

class SelecaoRepository {

    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (erro, resultado) => {
                if(erro) return reject('Não foi possível inserir')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject('Não foi possívelo localizar')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar')
                const [ rows ] = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (erro, resultado) => {
                if(erro) return reject('Não foi possível atualizar')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }
    
    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Não foi possível deletar')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }

}

export default new SelecaoRepository()
