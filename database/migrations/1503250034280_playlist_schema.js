'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistSchema extends Schema {
  up () {
    this.create('playlists', (table) => {
      table.increments('playlist_id').notNullable().unique()
      table.string('song_id',255).notNullable()
      table.string('name',255).notNullable()
      table.integer('user_id', 80).notNullable().unique()
      table
      .foreign('user_id')
      .references('users.user_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('playlists')
  }
}

module.exports = PlaylistSchema
