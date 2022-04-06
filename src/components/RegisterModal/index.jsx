import React from 'react'
import reactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { togglePopupRegister } from '../../stores/page'

export default function RegisterModal() {

    const dispatch = useDispatch()
    const { isOpenRegister } = useSelector(store => store.page)

    return reactDom.createPortal(
        <div className="popup-form popup-login" onClick={() => dispatch(togglePopupRegister())} style={{ display: isOpenRegister ? 'flex' : 'none' }}>
            <div className="wrap" onClick={ev => ev.stopPropagation()}>
                <h2 className="title">Đăng ký</h2>
                <input type="text" placeholder="Email / Số điện thoại" />
                <input type="password" placeholder="Mật khẩu" />
                <div className="btn rect main btn-login">đăng ký</div>
                <div className="text-register" style={{}}>
                    <strong>hoặc đăng ký bằng</strong>
                </div>
                <div className="btn btn-icon rect white btn-google">
                    <img src="img/google.svg" alt />
                    Google
                </div>
                <p className="policy">
                    Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
                </p>
                <div className="close" onClick={() => dispatch(togglePopupRegister())}>
                    <img src="/img/close-icon.png" alt />
                </div>
            </div>
        </div>,
        document.body
    )
}
