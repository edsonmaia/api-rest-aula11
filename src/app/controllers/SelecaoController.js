import conexao from '../database/conexao.js'
import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {
   
    async index(req, res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        if(!row) {
            res.status(404).json({ Erro: 'Não localizado!'})
        }
        res.json(row)
    }

    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const idExiste = await SelecaoRepository.findById(id)
        if(!idExiste) {
            return res.status(404).json({Erro: 'Id não existe'})
        }
        const selecao = req.body
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const idExiste = await SelecaoRepository.findById(id)
        if(!idExiste) {
            return res.status(404).json({Erro: 'Id não existe'})
        }
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }

}

// padrão Singleton
export default new SelecaoController()
