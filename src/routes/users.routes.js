import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'

export const usersRoutes = Router()

usersRoutes
  .get('/', UserController.getAllUsers)
  .post('/', UserController.createUser)
