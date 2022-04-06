// import { takeEvery, takeLatest } from 'redux-saga/effects'
// import { USER_STORAGE_KEY } from '../constants/key'
// import { authService } from '../services/auth'
// import { clearToken } from '../utils/token'
// import { authActions } from './auth/auth'
// import { AUTH_FETCH_LOGIN } from './type'

// function fetchLogin(action) {
//     try {
//         yield putResolve(authActions.setFetching(true))
//         // const res = await authService.login(form)
//         const res = yield call(authService.login, action.payload)
//         // message is error
//         if (res.message) {
//             yield putResolve(authActions.setFetching(false))
//             return yield put(authActions.errorMessage(res.message))
//         }
//         setToken(res.data)
//         const user = yield call(userService.getInfo())
//         // const user = await userService.getInfo()
//         localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data))
//         yield put(togglePopupLogin(false))
//         yield put(authActions.setUser(user.data))
//         yield putResolve(authActions.setFetching(false))
//     } catch (err) {
//         console.log(err);
//     }
// }

// function* logout() {
//     clearToken()
//     localStorage.removeItem(USER_STORAGE_KEY)
// }

// export function* rootSaga() {
//     // yield takeEvery('auth/fetchLogin', fetchLogin)
//     yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin)
//     yield takeLatest(authActions.logout, logout)
// }