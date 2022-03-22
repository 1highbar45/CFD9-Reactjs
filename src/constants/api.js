import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_HOST
})


export default api