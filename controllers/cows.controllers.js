const Record = require('../models/record')

const recordsGet = async (req, res) => {
  const records = await Record.find({})

  res.json(records)
}

module.exports = {
  recordsGet
}
