import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UserService'

export default class UserController {

  public async index({ response }: HttpContextContract) {
    return new UserService().index(response)
  }

  public async store({ request, response }: HttpContextContract) {
    return new UserService().store(request, response)
  }

  public async show({ response, params }) {
    return new UserService().show(params, response)
  }

  public async update({ request, response, params }: HttpContextContract) {
    return new UserService().update(request, response, params)
  }

  public async destroy({ response, params }: HttpContextContract) {
    return new UserService().destroy(response, params)
  }

}
