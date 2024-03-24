import bcrypt from 'bcrypt'
import { generateToken } from '../utils/jwt.util.js'
import { sendError, sendSuccess } from '../utils/response.util.js'
import { UserController } from './user.controller.js'

export class AuthController {
  static async login (req, res) {
    try {
      const { username, password } = req.body

      const user = await UserController.findByUsername(username)
      if (!user) {
        return sendError(res, 404, 'El usuario no existe')
      }

      const match = await bcrypt.compare(password, user.password)
      if (!match) {
        return sendError(res, 401, 'Contraseña incorrecta')
      }

      const token = generateToken({
        payload: { username },
        expiresIn: '1h',
        jwtSecret: process.env.JWT_SECRET
      })

      return sendSuccess(res, { token })
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async reconnect (req, res) {
    try {
      const username = req.jwtPayload.username

      const token = generateToken({
        payload: { username },
        expiresIn: '1h',
        jwtSecret: process.env.JWT_SECRET
      })

      return sendSuccess(res, {
        username,
        message: 'Usuario logueado',
        token
      })
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }
}
