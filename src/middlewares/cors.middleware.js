import cors from 'cors'

const ACCEPTED_ORIGINS = [
  process.env.FRONTEND_URL
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: true
})

/*
(origin, callback) => {
    if (!origin || acceptedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS: ', origin))
    }
  }
*/
