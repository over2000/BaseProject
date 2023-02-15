import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel{
  public static table = 'base.tb_user'

  @column({ isPrimary: true })
  public id_user: Number

  @column()
  public name: String

  @column()
  public email: String

  @column()
  public password: string

  @column()
  public function: String

  @column()
  public in_ativo: Boolean

}
