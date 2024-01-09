const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN)
    console.log('Database connection - success')
  } catch (error) {
    console.log(error)
    throw new Error('database connection error')
  }
}

module.exports = {
  dbConnection
}
