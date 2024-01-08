const Record = require('../models/record')

const listenMessage = async (client, io) => {
  client.on('message', async (devID, message) => {
    console.log('* Received uplink from*** ', devID)
    const payload = JSON.parse(message).uplink_message

    if (payload?.decoded_payload) {
      console.log('update data')

      const dateUTC = new Date(payload.received_at)
      dateUTC.setHours(dateUTC.getHours() - 5)
      const dateUTC5 = dateUTC.toISOString()
      payload.received_at = dateUTC5

      const data = {
        aid_Vaca: payload.decoded_payload.aid_Vaca,
        c02_scd: payload.decoded_payload.Co2_scd,
        temp_scd: payload.decoded_payload.temp_scd,
        hum_scd: payload.decoded_payload.hum_scd,
        heart: {
          value: payload.decoded_payload.heart,
          valid: payload.decoded_payload.heart_valid
        },
        spo2: {
          value: payload.decoded_payload.spo2,
          valid: payload.decoded_payload.spo2_valid
        },
        temp_max: payload.decoded_payload.temp_max,
        temp_ambi: payload.decoded_payload.temp_ambi,
        temp_objet: payload.decoded_payload.temp_objet,
        pasos: {
          detec: payload.decoded_payload.detec_pas,
          cont: payload.decoded_payload.cont_pas
        },
        temp_nicla: payload.decoded_payload.temp_nicla,
        hum_nicla: payload.decoded_payload.temp_nicla,
        presion: payload.decoded_payload.presion,
        gasesg: payload.decoded_payload.gasesg,
        gyro: {
          x: payload.decoded_payload.gyroX,
          y: payload.decoded_payload.gyroY,
          z: payload.decoded_payload.gyroZ
        },
        mag: {
          x: payload.decoded_payload.magX,
          y: payload.decoded_payload.magY,
          z: payload.decoded_payload.magZ
        },
        activ: payload.decoded_payload.activ,
        iaq_regul: payload.decoded_payload.iaq_regul,
        iaq_estat: payload.decoded_payload.iaq_estat,
        compu_org_volat: payload.decoded_payload.compu_org_volat,
        co2_nicla: payload.decoded_payload.co2_nicla,
        ori: {
          x: payload.decoded_payload.oriX,
          y: payload.decoded_payload.oriY,
          z: payload.decoded_payload.oriZ
        },

        Cont: payload.decoded_payload.Cont,
        Batt: payload.decoded_payload.Batt,
        received_at: payload.received_at
      }

      const record = new Record(data)
      await record.save()

      io.emit('dataVacas', data)
    }
  })
}

module.exports = {
  listenMessage
}
