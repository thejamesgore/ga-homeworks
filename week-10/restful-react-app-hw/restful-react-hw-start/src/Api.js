/* eslint-disable indent */
import axios from 'axios'

export const getMeDrunkOnWine = () => {
    return axios.get('https://winebored.herokuapp.com/wines')
}