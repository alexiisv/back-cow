const { Schema, model } = require('mongoose')

const RecordSchema = Schema({
  // Variables CO2
  aid_Vaca: {
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
  mag: {
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
  Batt: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  Cont: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },

  received_at: {
    type: String,
    required: [true, 'identifier is required'],
    unique: false
  }
})

module.exports = model('Record', RecordSchema)
