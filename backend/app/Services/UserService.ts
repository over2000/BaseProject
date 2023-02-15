import User from 'App/Models/User'

class UserService {
  public async index(response) {

    try {
      const user = await User.query()
        .select('*')
        .orderBy('id_associacao')

        user.map(() => {} )

      return response.status(200).json(user)
    } catch (e) {
      return response.status(400).json({
        message: 'Erro na consulta',
        user: e.message,
      })
    }
  }

  public async store(request, response) {

    try {
      const user = await User.create(request.all())

      return response.status(200).json({
        message: 'Gravado com sucesso',
        user: user,
      })
    } catch (e) {
      return response.status(400).json({
        message: 'Erro',
        user: e.message,
      })
    }
  }

  public async show(params, response) {
  
    try {

      const { id } = params
      const user = await User.findOrFail(id)

      return response.status(200).json(user)
    } catch (e) {
      return response.status(400).json({
        message: 'Erro',
        user: e.message,
      })
    }
  }

  public async update(request, response, params) {

    try {
      const { id } = params
      const user = await User.findOrFail(id)
      const userData = request.all()
      user.merge(userData)
      await user.save()

      return response.status(200).json({
        message: 'Atualizado com sucesso',
        user: user,
      })
    } catch (e) {
      return response.status(400).json({
        message: 'Erro',
        user: e.message,
      })
    }
  }

  public async destroy(response, params) {
  
    try {
      const { id } = params
      const user = await User.findOrFail(id)

      const mensagem = user.in_ativo ? 'Inativado com sucesso' : 'Ativado com sucesso'
      user.merge({ in_ativo: user.in_ativo ? false : true })
      await user.save()

      return response.status(200).json({
        message: mensagem,
      })
    } catch (e) {
      return response.status(400).json({
        message: 'Erro',
        user: e.message,
      })
    }
  }
}

export default UserService
