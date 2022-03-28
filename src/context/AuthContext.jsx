import { createContext, useEffect, useState } from "react";
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import { userService } from "../services/user";
import { clearToken, getToken } from "../utils/token";

export const AuthContext = createContext()

let _user = localStorage.getItem(USER_STORAGE_KEY)
if (_user) {
    _user = JSON.parse(_user)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(_user)

    useEffect(async () => {
        const token = getToken()
        if (token) {
            const user = await userService.getInfo()
            if (user.data) {
                setUser(user.data)
            }
        }
    }, [])

    useEffect(() => {
        if (user) {
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
        } else {
            localStorage.removeItem(USER_STORAGE_KEY)
            clearToken()
        }
    }, [user])

    const handleLogin = async (data) => {
        console.log(data);
        const res = await authService.login(data)

        // message is error
        if (res.message) {
            return res.message
        }

        localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data))

        const user = await userService.getInfo()
        setUser(user.data)
    }

    const handleLogout = () => {
        setUser()
        // localStorage.removeItem(USER_STORAGE_KEY)
        // localStorage.removeItem(TOKEN_STORAGE_KEY)
    }

    return <AuthContext.Provider value={{ user, handleLogin, handleLogout }} >{children}</AuthContext.Provider>
}