import { sendError } from '../utils/response.util.js'
import { verifyToken } from '../utils/jwt.util.js'

export const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return sendError(res, 401, 'El token ha expirado', 'El token ha expirado')
  }

  try {
    const payload = verifyToken(token)
    req.jwtPayload = payload
    next()
  } catch (error) {
    return sendError(res, 401, 'El token ha expirado', 'El token ha expirado')
  }
}
