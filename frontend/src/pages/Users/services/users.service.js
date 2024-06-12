import axios from 'axios'

const URL_API = import.meta.env.VITE_URL_API

export async function getAllUsers () {
  return axios.get(`${URL_API}/users`)
}

export async function getByUsername (username) {
  return axios.get(`${URL_API}/users/${username}`)
}

export async function createUser (data) {
  return axios.post(`${URL_API}/users`, data)
}

export async function updateUser (username, data) {
  return axios.put(`${URL_API}/users/${username}`, data)
}

export async function deleteUser (username) {
  return axios.delete(`${URL_API}/users/${username}`)
}
