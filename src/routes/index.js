import { Router } from 'express'
import { collaresRoutes } from './collares.routes.js'

export const Routes = Router()

Routes
  .use('/collares', collaresRoutes)
