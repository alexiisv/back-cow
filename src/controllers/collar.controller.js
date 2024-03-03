import { CollarRepository } from '../data/repositories/collar.repository.js'

export class CollarController {
  static async lastByAid (req, res) {
    const { aidCow } = req.params

    try {
      const collar = await CollarRepository.lastByAid(aidCow)
      res.status(200).json(collar)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async currentDateToSelected (req, res) {
    const { date } = req.params

    try {
      const collars = await CollarRepository.currentDateToSelected(date)
      res.status(200).json(collars)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
