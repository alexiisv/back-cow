import User from '../models/user.model.js'

export class UserRepository {
  static async createUser (userData) {
    try {
      const user = new User(userData)
      await user.save()
      return user
    } catch (err) {
      throw new Error('Error al crear el usuario')
    }
  }

  static async findByUsername (username) {
    try {
      const user = await User.findOne({ username })
      return user
    } catch (error) {
      throw new Error('Error al obtener el usuario')
    }
  }

  static async getAllUsers () {
    try {
      const users = await User.find({}, { password: 0 })
      return users
    } catch (error) {
      throw new Error('Error al obtener los usuarios')
    }
  }
}
