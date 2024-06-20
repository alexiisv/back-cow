export function mapCollar (data) {
  const mappedCollar = {
    aid_vaca: data.decoded_payload.aid_Vaca,
    cont: data.decoded_payload.Cont,
    batt: data.decoded_payload.Batt,
    activ: data.decoded_payload.activ,

    temp_max: data.decoded_payload.temp_max,
    temp_max_corregida: data.decoded_payload.temp_max_correc,
    temp_scd: data.decoded_payload.temp_scd,
    temp_ambi: data.decoded_payload.temp_ambi,
    temp_objet: data.decoded_payload.temp_objet,

    temp_nicla: data.decoded_payload.temp_nicla,
    hum_scd: data.decoded_payload.hum_scd,
    hum_nicla: data.decoded_payload.hum_nicla,
    presion: data.decoded_payload.presion,

    c02_scd: data.decoded_payload.Co2_scd,
    co2_nicla: data.decoded_payload.co2_nicla,
    gasesg: data.decoded_payload.gasesg,
    compu_org_volat: data.decoded_payload.compu_org_volat,

    iaq_regul: data.decoded_payload.iaq_regul,
    iaq_estat: data.decoded_payload.iaq_estat,
    heart: {
      value: data.decoded_payload.heart,
      valid: data.decoded_payload.heart_valid
    },
    spo2: {
      value: data.decoded_payload.spo2,
      valid: data.decoded_payload.spo2_valid
    },

    pasos: {
      detec: data.decoded_payload.detec_pas,
      cont: data.decoded_payload.cont_pas
    },
    gyro: {
      x: data.decoded_payload.gyroX,
      y: data.decoded_payload.gyroY,
      z: data.decoded_payload.gyroZ
    },
    acc: {
      x: data.decoded_payload.accX,
      y: data.decoded_payload.accY,
      z: data.decoded_payload.accZ
    },
    ori: {
      x: data.decoded_payload.oriX,
      y: data.decoded_payload.oriY,
      z: data.decoded_payload.oriZ
    },

    sonido: data.decoded_payload.sonido,

    received_at: data.received_at
  }

  return mappedCollar
}
