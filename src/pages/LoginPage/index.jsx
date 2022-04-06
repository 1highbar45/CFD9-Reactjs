import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { authLogin } from '../../stores/auth/auth'

export default function LoginPage() {
    // const { handleLogin, user } = useContext(AuthContext)
    const [form, setForm] = useState({})
    // const [errorMessage, setErrorMessage] = useState('')

    const { user, errorMessage } = useSelector(store => store.auth)
    const dispatch = useDispatch()

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
            dispatch(authLogin(form))
        }
    }

    if (user) return <Navigate to='/' />

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG NHẬP</div>
                        {
                            errorMessage && <p className="error-message" >{errorMessage}</p>
                        }
                        <form className="form">
                            <label htmlFor="">
                                <p>Tên đăng nhập<span>*</span></p>
                                <input type="text" onChange={ev => form.username = ev.target.value} />
                                {errors.username && <p className='error-text'>{errors.username}</p>}
                            </label>
                            <label htmlFor="">
                                <p>Mật khẩu<span>*</span></p>
                                <input type="password" onChange={ev => form.password = ev.target.value} />
                                {errors.password && <p className='error-text'>{errors.password}</p>}
                            </label>
                            <button onClick={btnClick} className="btn main rect">đăng nhập</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
