export function mapCollar (data) {
  const mappedCollar = {
    aid_vaca: data.decoded_payload.aid_Vaca,

    temp_max: data.decoded_payload.temp_max,
    temp_ambi: data.decoded_payload.temp_ambi,
    temp_objet: data.decoded_payload.temp_objet,

    
   
    heart: {
      value: data.decoded_payload.heart,
      valid: data.decoded_payload.heart_valid
    },
    spo2: {
      value: data.decoded_payload.spo2,
      valid: data.decoded_payload.spo2_valid
    },

    received_at: data.received_at
  }

  return mappedCollar
}
