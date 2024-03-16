export function sendError (res, code = 500, message = 'Error inesperado', details = null) {
  if (code === 500) {
    message = 'Error inesperado'
  }
  return res.status(code).json({
    message,
    details
  })
}

export function sendSuccess (res, data, code = 200) {
  return res.status(code).json(data)
}
