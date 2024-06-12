export function getFormattedDate (fecha) {
  const formattedData = `${fecha.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })} ${fecha.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  })}`

  return formattedData
}
