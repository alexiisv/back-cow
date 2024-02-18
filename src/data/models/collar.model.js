import { Schema, model } from 'mongoose'

const CollarSchema = new Schema({
  // Variables CO2
  aid_vaca: {
    type: String,
    required: [true, 'identifier is required'],
    unique: false
  },
  c02_scd: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  temp_scd: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  hum_scd: {
    type: Number,
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
  temp_max_corregida: {
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
  // Nicla

  pasos: {
    detec: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    cont: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    }
  },

  temp_nicla: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  hum_nicla: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  presion: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  gasesg: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  gyro: {
    x: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    y: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    z: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    }
  },
  acc: {
    x: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    y: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    z: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    }
  },

  activ: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  iaq_regul: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  iaq_estat: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  compu_org_volat: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  co2_nicla: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  ori: {
    x: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    y: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    },
    z: {
      type: Number,
      required: [true, 'identifier is required'],
      unique: false
    }
  },
  batt: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  cont: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },

  sonido: {
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
