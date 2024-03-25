import bcrypt from 'bcrypt'
import { UserRepository } from '../data/repositories/user.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class UserController {
  static async createUser (req, res) {
    const { username, email, password, roles } = req.body

    try {
      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await UserRepository.createUser({
        username,
        email,
        password: hashedPassword,
        roles
      })
      return sendSuccess(res, { message: `Usuario ${user.username} registrado` }, 201)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async findByUsername (username) {
    try {
      const user = await UserRepository.findByUsername(username)
      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async getAllUsers (req, res) {
    try {
      const users = await UserRepository.getAllUsers()
      return sendSuccess(res, users)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }
}
