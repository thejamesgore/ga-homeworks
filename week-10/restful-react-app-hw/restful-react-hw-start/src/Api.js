/* eslint-disable indent */
import axios from 'axios'

const apiUrl = 'https://ga-winebored.herokuapp.com'

export const getAllWines = () => {
    return axios.get(`${apiUrl}/wines`)
}

export const getMyWine = (id) => {
    return axios.get(`${apiUrl}/wines/${id}`)
}

// Auth methods

export const registerUser = (formData) => {
    return axios.post(`${apiUrl}/register`, formData)
}

export const loginUser = (formData) => {
    return axios.post(`${apiUrl}/login`, formData)
}