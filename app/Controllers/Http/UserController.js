'use strict'
const UserModel = use('App/Models/User')
class UserController {
  async index() {
    const userData = await UserModel.all()


    return { status: 200, error: undefined, data: userData }
}
async show() {
    const userData = await UserModel.find
    return { status: 200, data: userData}

}
async store({ request }) {
    const {user_name, password} = request.body
    const userData = await UserModel.create({user_name,password})
     return { status: 200, data: userData}
}
async login({request, auth}) {
  const { user_name, password } = request.body
    try {
      if (await auth.attempt(user_name, password)) {
        let userName = await UserModel.find({user_name})
        let accessToken = await auth.generate(userName)
        return ({status:200, data: userEmail, token: accessToken})
      }

}
catch (err) {
  return ({message: 'Failed'})
}
}
}

module.exports = UserController
