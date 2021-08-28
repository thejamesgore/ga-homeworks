/* eslint-disable indent */
export const setToken = (token) => {
    window.localStorage.setItem('token', token)
}

export const getToken = () => {
    return window.localStorage.getItem('token')
  }

  export const getUserStatus = () => {
    const token = getToken()
    if (!token) {
      return false
    }
  
    const parts = token.split('.')
  
    if (parts.length < 3) {
      return false
    }
  
    return JSON.parse(window.atob(parts[1]))
  }