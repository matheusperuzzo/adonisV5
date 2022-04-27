import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('last_login_at')
      table.renameColumn('e_mail', 'email')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dateTime('last_login_at')
      table.renameColumn('email', 'e_mail')
    })
  }
}
