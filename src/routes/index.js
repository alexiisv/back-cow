import { Router } from 'express'
import { collaresRoutes } from './collares.routes.js'
import { usersRoutes } from './users.routes.js'

export const Routes = Router()

Routes
  .use('/collares', collaresRoutes)
  .use('/users', usersRoutes)
