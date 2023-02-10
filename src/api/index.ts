import axios from 'axios'
import { API_KEY } from '@env'

// Passing configuration object to axios
const api = axios.create({
  baseURL: 'https://api.nasa.gov',
  params: { api_key: API_KEY }
})

export default api
