import { createStore } from "redux"
import { authReducer } from "./auth"

const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

const reducers = combineReducers({
    counter: counterReducer,
    auth: authReducer
})
const store = createStore(reducers)

export default store