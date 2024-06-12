import axios from 'axios'

const URL_API = import.meta.env.VITE_URL_API

export async function lastByAid (aidCow) {
  return axios.get(`${URL_API}/collares/lastByAid/${aidCow}`)
}
export async function currentDateToSelected (date) {
  return axios.get(`${URL_API}/collares/currentDateToSelected/${date}`)
}
