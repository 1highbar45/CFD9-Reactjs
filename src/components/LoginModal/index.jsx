import React, { useState } from 'react'
import reactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authLogin, fetchAuthLogin } from '../../stores/auth/auth'
import { togglePopupLogin } from '../../stores/page'
import CircularProgress from '@mui/material/CircularProgress';

export default function LoginModal() {

    const dispatch = useDispatch()
    const { isOpenLogin } = useSelector(store => store.page)

    const [form, setForm] = useState({})
    // const [errorMessage, setErrorMessage] = useState('')

    const { user, errorMessage, isFetchingLogin } = useSelector(store => store.auth)

    const [errors, setErrors] = useState({})

    const btnClick = async (ev) => {
        ev.preventDefault();

        const errorObj = {}

        if (!form.username) {
            errorObj.username = "Username la bat buoc"
        }

        if (!form.password) {
            errorObj.password = "Password la bat buoc"
        }

        setErrors(errorObj)
        if (Object.keys(errorObj).length === 0) {
            // dispatch(authLogin(form))
            dispatch(fetchAuthLogin(form))
        }
    }

    if (user) return <Navigate to='/' />

    return reactDom.createPortal(
        <div className="popup-form popup-login" onClick={() => dispatch(togglePopupLogin())} style={{ display: isOpenLogin ? 'flex' : 'none' }}>
            <div className="wrap" onClick={ev => ev.stopPropagation()}>
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    {
                        errorMessage && <p className="error-message" >{errorMessage}</p>
                    }
                    <input type="text" placeholder="Email / Số điện thoại" onChange={ev => form.username = ev.target.value} />
                    {errors.username && <p className='error-text'>{errors.username}</p>}
                    <input type="password" placeholder="Mật khẩu" onChange={ev => form.password = ev.target.value} />
                    {errors.password && <p className='error-text'>{errors.password}</p>}
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={btnClick}> {!isFetchingLogin ? <CircularProgress color="inherit" /> : 'đăng nhập'}</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div className="close" onClick={() => dispatch(togglePopupLogin())}>
                        <img src="/img/close-icon.png" alt />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}
