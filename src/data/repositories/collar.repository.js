import { NoResultsError } from '../../utils/customErrors.js'
import Collar from '../models/collar.model.js'

export class CollarRepository {
  static async createCollar (collarData) {
    try {
      const collar = new Collar(collarData)
      await collar.save()
      return collar
    } catch (err) {
      throw new Error('Error al crear el collar')
    }
  }

  static async lastByAid (aidCow) {
    try {
      const collar = await Collar.findOne({ aid_vaca: aidCow }).sort({ received_at: -1 })
      return collar
    } catch (err) {
      throw new Error('Error al obtener los datos')
    }
  }

  static async getForLastHours (aidCow, hours, prop) {
    const fieldsToSelect = ['_id', 'received_at', 'aid_vaca', prop]

    try {
      const hoursAgo = parseInt(hours)
      if (isNaN(hoursAgo)) {
        throw new Error('El parámetro "hours" debe ser un número válido')
      }

      const cutoffDate = new Date(Date.now() - hoursAgo * 60 * 60 * 1000)

      const collars = await Collar.find({
        aid_vaca: aidCow,
        received_at: { $gte: cutoffDate }
      })
        .select(fieldsToSelect.join(' '))
        .lean()

      if (collars.length === 0) {
        throw new NoResultsError('No results were found for the specified range.')
      }

      return collars
    } catch (err) {
      if (err instanceof NoResultsError) {
        throw err
      } else {
        throw new Error('Error retrieving the data.')
      }
    }
  }

  static async currentDateToSelected (date) {
    try {
      const collars = await Collar.find({ received_at: { $gte: new Date(date) } })
      return collars
    } catch (err) {
      throw new Error('Error al obtener los datos')
    }
  }

  static async lastThirtyDays (aidCow, prop) {
    try {
      const fieldsToSelect = ['_id', 'received_at', 'aid_vaca', prop]

      const collars = await Collar.find({
        aid_vaca: aidCow,
        received_at: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }
      })
        .select(fieldsToSelect.join(' '))
        .lean()

      return collars
    } catch (err) {
      throw new Error('Error al obtener los datos')
    }
  }
}
