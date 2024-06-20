import { CollarRepository } from '../data/repositories/collar.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'
import _ from 'lodash'
import { props } from '../data/maps/props.js'

export class CollarController {
  static async lastByAid (req, res) {
    const { aidCow } = req.params

    try {
      const collar = await CollarRepository.lastByAid(aidCow)
      return sendSuccess(res, collar)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async currentDateToSelected (req, res) {
    const { date } = req.params

    try {
      const collars = await CollarRepository.currentDateToSelected(date)
      return sendSuccess(res, collars)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async lastThirtyDays (req, res) {
    const { aidCow, prop } = req.params

    if (!props.includes(prop)) {
      return sendError(res, 400, 'El campo solicitado no es válido')
    }

    try {
      const collars = await CollarRepository.lastThirtyDays(aidCow, prop)
      console.log(collars)
      const groupedByDay = _.groupBy(collars, collar => {
        return new Date(collar.received_at).toISOString().split('T')[0]
      })

      const aggregatedData = []
      for (const day in groupedByDay) {
        const collarsOfDay = groupedByDay[day]
        const values = collarsOfDay.map(collar => collar[prop])

        // validar si values es un objeto y si es objeto hacer otro procedimiento
        if (typeof values[0] === 'object') {
          const keys = Object.keys(values[0])
          const obj = {}
          keys.forEach(key => {
            const valuesByKey = collarsOfDay.map(collar => collar[prop][key])
            obj[key] = _.mean(valuesByKey)
          })
          aggregatedData.push({ timestamp: day, value: obj })
          continue
        }

        const averageValue = _.mean(values) // Promedio de los valores del día
        aggregatedData.push({ timestamp: day, value: averageValue })
      }

      return sendSuccess(res, aggregatedData)
    } catch (error) {
      console.log(error)
      return sendError(res, 500, error.message)
    }
  }
}
