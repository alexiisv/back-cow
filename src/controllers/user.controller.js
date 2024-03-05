import { UserRepository } from '../data/repositories/user.repository.js'
import bcrypt from 'bcrypt'

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
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
