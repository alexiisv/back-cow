const Record = require('../models/record')

const listenMessage = async (client, io) => {

  client.on('message', async (devID, message) => {
    console.log('* Received uplink from*** ', devID)
    const payload = JSON.parse(message).uplink_message

    if (payload?.decoded_payload) {
      console.log('update data')

      const data = {
        aid_Vaca: payload.decoded_payload.aid_Vaca,
        Cont: payload.decoded_payload.Cont,
        Batt: payload.decoded_payload.Batt,
        activ: payload.decoded_payload.activ,

        temp_max: payload.decoded_payload.temp_max,
        temp_max_corregida: payload.decoded_payload.temp_max_correc,
        temp_scd: payload.decoded_payload.temp_scd,
        temp_ambi: payload.decoded_payload.temp_ambi,
        temp_objet: payload.decoded_payload.temp_objet,
        
        temp_nicla: payload.decoded_payload.temp_nicla,
        hum_scd: payload.decoded_payload.hum_scd,
        hum_nicla: payload.decoded_payload.temp_nicla,
        presion: payload.decoded_payload.presion,
        
        c02_scd: payload.decoded_payload.Co2_scd,
        co2_nicla: payload.decoded_payload.co2_nicla,
        gasesg: payload.decoded_payload.gasesg,
        compu_org_volat: payload.decoded_payload.compu_org_volat,

        iaq_regul: payload.decoded_payload.iaq_regul,
        iaq_estat: payload.decoded_payload.iaq_estat,
        heart: {
            value: payload.decoded_payload.heart,
          valid: payload.decoded_payload.heart_valid
        },
        spo2: {
            value: payload.decoded_payload.spo2,
          valid: payload.decoded_payload.spo2_valid
        },

        pasos: {
          detec: payload.decoded_payload.detec_pas,
          cont: payload.decoded_payload.cont_pas
        },
        gyro: {
          x: payload.decoded_payload.gyroX,
          y: payload.decoded_payload.gyroY,
          z: payload.decoded_payload.gyroZ
        },
        acc: {
          x: payload.decoded_payload.accX,
          y: payload.decoded_payload.accY,
          z: payload.decoded_payload.accZ
        },
        ori: {
          x: payload.decoded_payload.oriX,
          y: payload.decoded_payload.oriY,
          z: payload.decoded_payload.oriZ
        },

        sonido: payload.decoded_payload.sonido,

        received_at: payload.received_at
      }
      

      // Guardar el registro en la colección correspondiente
      const record1 = new Record(data)
      await record1.save()
     

      io.emit('dataVacas', data)

    }
  })
}

module.exports = {
  listenMessage
}
