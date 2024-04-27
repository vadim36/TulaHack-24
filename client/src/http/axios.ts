import axios from 'axios'

const API_URL = 'http://localhost:7000'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default $api