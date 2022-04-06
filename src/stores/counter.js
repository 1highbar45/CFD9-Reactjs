const initialState = {
    value: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 };
        case 'counter/decremented':
            return { value: state.value - 1 };
        case 'counter/nothing':
            return {}
        default:
            return state
    }
}