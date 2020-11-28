'use strict'
const Playlist = use('App/Models/Playlist')
class PlaylistController {
  async index() {


    return {status : 200 ,error : undefined, data :  await Playlist.query().fetch().then(response => response.toJSON()) }
}
async show({ request }) {
  const { id } = request.params

  return {status : 200 ,error : undefined, data :  await Playlist.query().where({playlist_id : id}).fetch().then(response => response.toJSON()) }

}
async store({ request }) {
  const {playlist_id} = await Playlist.create(request.body)

    return {status : 200 ,data : await Playlist.query().where({playlist_id: playlist_id }).fetch().then(response => response.toJSON())}
}
async update ( {request} ) {
  const { id } = request.params
  const {song_id} = request.body

  let dataBefore = await Playlist.findBy({playlist_id :id})

  if(!dataBefore){
    return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
  }
  dataBefore.merge({song_id : song_id})
  await dataBefore.save();

  return {status : 200 ,data : await  Playlist.query().where({playlist_id: id }).fetch().then(response => response.toJSON())}

}
async destroy ( {request} ) {
  const { id } = request.params

  let dataBefore = await Playlist.findBy({playlist_id :id})

  if(!dataBefore){
    return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
  }
  dataBefore.delete()
  await dataBefore.save();

  return {status : 200 ,error : undefined , data : 'complete'};
}

}


module.exports = PlaylistController
