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
}
