import { Schema, model } from 'mongoose'

const CollarSchema = new Schema({
  // Variables CO2
  aid_vaca: {
    type: String,
    required: [true, 'identifier is required'],
    unique: false
  },
 
  // Variables Max
  heart: {
    value: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    valid: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    }
  },

  spo2: {
    value: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    valid: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    }
  },

  temp_max: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },

  // Mlx
  temp_ambi: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  temp_objet: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  
  received_at: {
    type: Date,
    required: [true, 'identifier is required'],
    unique: false
  }
})

export default model('Collar', CollarSchema)
