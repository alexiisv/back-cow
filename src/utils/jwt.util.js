import jwt from 'jsonwebtoken'

export const generateToken = ({ payload, expiresIn, jwtSecret }) => {
  return jwt.sign(payload, jwtSecret, { expiresIn })
}

export const verifyToken = (token) => {
  const jwtSecret = process.env.JWT_SECRET
  return jwt.verify(token, jwtSecret)
}
