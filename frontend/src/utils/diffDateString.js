export function diffDateString (date1, date2) {
  const diff = date1 - date2
  const diffSeconds = diff / 1000
  const diffMinutes = diffSeconds / 60
  const diffHours = diffMinutes / 60
  const diffDays = diffHours / 24

  if (diffSeconds < 60) {
    return 'Hace unos segundos'
  }

  if (diffMinutes < 60) {
    return `Hace ${Math.floor(diffMinutes)} minutos`
  }

  if (diffHours < 24) {
    return `Hace ${Math.floor(diffHours)} horas`
  }

  if (diffDays < 7) {
    return `Hace ${Math.floor(diffDays)} días`
  }

  return `Hace ${Math.floor(diffDays / 7)} semanas`
}
