import _ from 'lodash'

export const calculateAverageData = (groupedByData, prop) => {
  const aggregatedData = []
  for (const group in groupedByData) {
    const groupCollars = groupedByData[group]
    const values = groupCollars.map(collar => collar[prop])

    const fechas = groupCollars.map(r => new Date(r.received_at))

    // Obtener la fecha mínima y máxima
    const fechaMin = new Date(Math.min(...fechas))
    const fechaMax = new Date(Math.max(...fechas))

    // Calcular la fecha central
    const fechaCentral = new Date((fechaMin.getTime() + fechaMax.getTime()) / 2)

    // validar si values es un objeto y si es objeto hacer otro procedimiento
    if (typeof values[0] === 'object') {
      const keys = Object.keys(values[0])
      const obj = {}
      keys.forEach(key => {
        const valuesByKey = groupCollars.map(collar => collar[prop][key])
        obj[key] = _.mean(valuesByKey)
      })
      aggregatedData.push({ timestamp: fechaCentral, value: obj })
      continue
    }

    const averageValue = _.mean(values) // Promedio de los valores del día
    aggregatedData.push({ timestamp: fechaCentral, value: averageValue })
  }

  return aggregatedData
}
