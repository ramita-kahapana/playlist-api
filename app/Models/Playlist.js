'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Playlist extends Model {
  static get primaryKey(){
    return 'playlists_id'
}
static get createdAtColumn() {
  return 'created_at';

}
static get updatedAtColumn(){
  return 'updated_at' ;
}
  user() {
    return this.belongsTo('App/Models/User')
}
}

module.exports = Playlist
