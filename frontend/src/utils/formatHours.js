export function formatHours (fecha) {
  const ahora = new Date()
  const unDia = 24 * 60 * 60 * 1000

  let dia
  const hora = fecha.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })

  if (fecha.toDateString() === ahora.toDateString()) {
    dia = 'hoy'
  } else if (fecha.toDateString() === new Date(ahora - unDia).toDateString()) {
    dia = 'ayer'
  } else {
    const options = { day: '2-digit', month: 'short' }
    dia = fecha.toLocaleDateString('es-ES', options)
  }

  return {
    dia,
    hora
  }
}
