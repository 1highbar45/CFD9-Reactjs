import axios from 'axios'
import { authService } from '../services/auth'
import { getToken, setToken } from '../utils/token'

const api = axios.create({
    baseURL: import.meta.env.VITE_HOST
})

api.interceptors.response.use((res) => {
    return res.data
}, async (error) => {
    if (error.request.data.error_code === 'TOKEN_EXPIRED') {
        console.log(error);

        let token = getToken()

        if (token) {
            // refresh token
            const refresh = await authService.refreshToken({ refreshToken: token.refreshToken })

            if (refresh.data) {
                token.accessToken = refresh.data.accessToken
                setToken(token)

                return api(error.config)
            }
        }
    }

    // accessToken mới thì có refreshToken mới ko ? 

    return error.response.data.json();
})

api.interceptors.request.use((config) => {
    let token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }
    return config
})

export default api