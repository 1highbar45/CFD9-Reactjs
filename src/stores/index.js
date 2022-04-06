import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { authGetInfo, authReducer } from "./auth/auth"
import { counterReducer } from "./counter";
// import { courseReducer, getCourseList } from "./course";
import { pageReducer } from "./page";
import createSagaMiddleware from 'redux-saga'
import { courseReducer } from "./course/course";
// import { rootSaga } from "./saga";

// const logger = store => next => action => {
//     console.log(action);
//     next(action)
// }

// const thunkFake = store => next => action => {
//     if (typeof action === 'function') {
//         return action(store.dispatch);
//     }
//     next(action)
// }

// const reducers = combineReducers({
//     counter: counterReducer,
//     auth: authReducer,
//     course: courseReducer,
//     page: pageReducer
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        course: courseReducer,
        page: pageReducer
    },
    middleware: [sagaMiddleware, thunk]
})

// sagaMiddleware.run(rootSaga)

store.dispatch(authGetInfo())

// store.dispatch(getCourseList())

export default store