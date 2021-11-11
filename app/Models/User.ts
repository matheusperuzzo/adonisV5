import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  public static table = 'users'

  @column({ isPrimary: true })
  public id: number

  @column()
  public secureId: uuidv4

  @column()
  public eMail: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public lastLoginAt: DateTime

  @beforeCreate()
  public static assingUuid(user: User) {
    user.secureId = uuidv4()
  }
}
