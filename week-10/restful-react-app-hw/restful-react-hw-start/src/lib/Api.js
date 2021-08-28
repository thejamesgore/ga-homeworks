/* eslint-disable indent */
import axios from 'axios'
import { getToken } from './Auth'

const apiUrl = 'https://ga-winebored.herokuapp.com'

export const getAllWines = () => {
    return axios.get(`${apiUrl}/wines`)
}

export const getMyWine = (id) => {
    return axios.get(`${apiUrl}/wines/${id}`)
}

// Create & Edit Methods

export const createWine = (formData) => {
    const requestConfig = {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  
    return axios.post(`${apiUrl}/wines`, formData, requestConfig)
  }

export const editWine = (id, formData) => {
    const requestConfig = {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  
    return axios.put(`${apiUrl}/wines/${id}`, formData, requestConfig)
  }

  export const deleteCheese = (id) => {
    const requestConfig = {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  
    return axios.delete(`${apiUrl}/wines/${id}`, requestConfig)
  }

// Auth methods

export const registerUser = (formData) => {
    return axios.post(`${apiUrl}/register`, formData)
}

export const loginUser = (formData) => {
    return axios.post(`${apiUrl}/login`, formData)
}