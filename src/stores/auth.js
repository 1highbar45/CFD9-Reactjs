const initialState = {
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'auth/login':
            return {
                user: action.payload
            }
        case 'auth/logout':
            return {
                user: null
            }
        default:
            return state
    }
}