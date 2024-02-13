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

  // Falta implementar el método
  static async getCollarByIdCow (idCow) {
    try {
      const collar = await Collar.find({ idCow })
      return collar
    } catch (err) {
      throw new Error('Error al obtener el collar')
    }
  }
}
