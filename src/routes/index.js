import { Router } from 'express'
import { collaresRoutes } from './collares.routes.js'
import { usersRoutes } from './users.routes.js'
import { jwtMiddleware } from '../middlewares/jwt.middleware.js'

export const Routes = Router()

Routes.use(jwtMiddleware)

Routes
  .use('/collares', collaresRoutes)
  .use('/users', usersRoutes)
