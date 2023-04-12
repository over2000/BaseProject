import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel{
  public static table = 'base.tb_user'

  @column({ isPrimary: true })
  public id_user: Number

  @column()
  public nome: String

  @column()
  public email: String

  @column()
  public senha: string

  @column()
  public id_funcao: Number

  @column()
  public desc_funcao: String

  @column()
  public in_ativo: Boolean

}
