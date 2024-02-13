import { Router } from 'express'

export const Routes = Router()

Routes.get('/cows', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})
