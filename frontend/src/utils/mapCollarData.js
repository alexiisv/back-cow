export function mapCollarData (data) {
  return {
    __aid_vaca: data.aid_vaca,
    c02_scd: data.c02_scd,
    temp_scd: data.temp_scd,
    hum_scd: data.hum_scd,
    heart: data.heart,
    spo2: data.spo2,
    temp_max: data.temp_max,
    temp_max_corregida: data.temp_max_corregida,
    temp_objet: data.temp_objet,
    pasos: data.pasos,
    temp_nicla: data.temp_nicla,
    hum_nicla: data.hum_nicla,
    presion: data.presion,
    gasesg: data.gasesg,
    activ: data.activ,
    iaq_regul: data.iaq_regul,
    compu_org_volat: data.compu_org_volat,
    co2_nicla: data.co2_nicla,
    batt: data.batt,
    cont: data.cont,
    sonido: data.sonido,
    gyro: data.gyro,
    acc: data.acc,
    ori: data.ori,
    __received_at: new Date(data.received_at)
  }
}
