const initialState = {
    isOpenLogin: false,
    isOpenRegister: false
}

export const togglePopupLogin = (flag) => {
    return {
        type: 'page/togglePopupLogin', payload: flag
    }
}

export const togglePopupRegister = (flag) => {
    return {
        type: 'page/togglePopupRegister', payload: flag
    }
}

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'page/togglePopupLogin':
            if (typeof action.payload === 'undefined') {
                return {
                    ...state,
                    isOpenLogin: !state.isOpenLogin
                }
            }

            return {
                ...state,
                isOpenLogin: action.payload
            }
        case 'page/togglePopupRegister':
            if (typeof action.payload === 'undefined') {
                return {
                    ...state,
                    isOpenRegister: !state.isOpenRegister
                }
            }

            return {
                ...state,
                isOpenRegister: action.payload
            }
        default: return state
    }
}