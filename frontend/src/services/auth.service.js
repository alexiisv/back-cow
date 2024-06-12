import axios from 'axios'

const URL_API = import.meta.env.VITE_URL_API

export async function authLogin (data) {
  return axios.post(`${URL_API}/auth/login`, data)
}

export async function authReconnect () {
  return axios.get(`${URL_API}/auth/reconnect`)
}
