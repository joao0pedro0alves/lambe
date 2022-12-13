import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://lambe-cod3er-default-rtdb.firebaseio.com'
})