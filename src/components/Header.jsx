import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '../constants/path'
import { AuthContext } from '../context/AuthContext'
import { authLogout } from '../stores/auth/auth'
import { togglePopupLogin } from '../stores/page'
import { togglePopupRegister } from '../stores/page'

export default function Header() {

    // const { user, handleLogout } = useContext(AuthContext)

    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()

    const toggleMenu = () => {
        document.body.classList.toggle('menu-is-show')
    }

    const openLogin = (ev) => {
        ev.preventDefault()
        dispatch(togglePopupLogin())
    }

    const openRegister = (e) => {
        e.preventDefault()
        dispatch(togglePopupRegister())
    }

    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={toggleMenu}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to="/" className="logo">
                    <img src="/img/logo.svg" alt />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {
                        user ? (
                            <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{user.name}</div>
                                        <div className="avatar">
                                            <img src={user.avatar} alt />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <a href="#">Khóa học của tôi</a>
                                    <Link to="/ca-nhan">Thông tin tài khoản</Link>
                                    <a onClick={() => dispatch(authLogout())} href="#">Đăng xuất</a>
                                </div>
                            </div>
                        ) : (
                            <div className="not-login bg-none">
                                <Link to={LOGIN_PATH} onClick={openLogin} className="btn-register">Đăng nhập</Link>
                                <Link to='/dang-ky' onClick={openRegister} className="btn main btn-open-login">Đăng ký</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>

    )
}
