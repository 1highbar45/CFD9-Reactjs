import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { USER_STORAGE_KEY } from "../../constants/key"
import { authService } from "../../services/auth"
import { userService } from "../../services/user"
import { clearToken, getToken, setToken, TOKEN_STORAGE_KEY } from "../../utils/token"
import { togglePopupLogin } from "../page"

let _user = localStorage.getItem(USER_STORAGE_KEY)
if (_user) {
    _user = JSON.parse(_user)
}

const initialState = {
    user: null,
    errorMessage: '',
    isFetchingLogin: true
}

export const authLogin = (form) => {
    // return a function 
    return async (dispatch) => {
        const res = await authService.login(form)

        // message is error
        if (res.message) {
            return dispatch({ type: 'auth/errorMessage', payload: res.message })
        }

        setToken(res.data)

        const user = await userService.getInfo()
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data))
        dispatch({ type: 'auth/login', payload: user.data })
    }
}

export const authLogout = () => {
    clearToken()
    localStorage.removeItem(USER_STORAGE_KEY)
    return { type: 'auth/logout' }
}

export const authGetInfo = () => {
    return async (dispatch) => {
        const token = getToken()
        if (token) {
            const user = await userService.getInfo()
            if (user.data) {
                localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data))
                dispatch({ type: 'auth/login', payload: user.data })
            }
        }
    }
}

// export const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'auth/login':
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         case 'auth/logout':
//             return {
//                 ...state,
//                 user: null
//             }
//         case 'auth/errorMessage':
//             return {
//                 ...state,
//                 errorMessage: action.payload
//             }
//         default:
//             return state
//     }
// }

export const fetchAuthLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (form, thunkAPI) => {
        const res = await authService.login(form)

        // message is error
        if (res.message) {
            return thunkAPI.rejectWithValue(res.message)
            // return dispatch({ type: 'auth/errorMessage', payload: res.message }) 
        }

        setToken(res.data)

        const user = await userService.getInfo()
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data))
        // dispatch({ type: 'auth/login', payload: user.data })

        // thunkAPI.fulfillWithValue()
        thunkAPI.dispatch(togglePopupLogin())
        // thunkAPI.fulfillWithValue(user.data)
        return user.data
    }
)

export const { reducer: authReducer, actions: authActions } = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        // login: (state, action) => {
        //     state.user = action.payload
        // },
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            return {
                user: null
            }
        },
        setFetching : (state, action) => {
            state.isFetchingLogin = false
        },
        errorMessage: (state, action) => {
            state.errorMessage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
            // success
            state.isFetchingLogin = false
            state.user = action.payload
        })

        builder.addCase(fetchAuthLogin.pending, (state, action) => {
            // fetching
            state.isFetchingLogin = true
        })

        builder.addCase(fetchAuthLogin.rejected, (state, action) => {
            // error
        })
    }
})