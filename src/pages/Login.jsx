import React, { useState } from 'react'
import Input from '../components/Input';

export default function Login() {

    const [form, setForm] = useState({})

    const [errors, setErrors] = useState({})

    const btnClick = (ev) => {
        ev.preventDefault();

        const errorObj = {}

        if (!form.username) {
            errorObj.username = "Username la bat buoc"
        }

        if (!form.password) {
            errorObj.password = "Password la bat buoc"
        }

        setErrors(errorObj)
        if (Object.keys(errorObj.errors).length === 0) {
            console.log('Validate thanh cong');
            // call api
        }
    }

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG NHẬP</div>
                        <form className="form">
                            <Input
                                label="Họ và tên"
                                onChange={ev => form.username = ev.target.value}
                                placeholder="Họ và tên bạn"
                                error={errors.username}
                            />
                            <Input.Password
                                label="Password"
                                onChange={ev => form.password = ev.target.value}
                                placeholder="******"
                                error={errors.password}
                            />
                            <Input
                                label="Ý kiến cá nhân"
                                onChange={ev => form.username = ev.target.value}
                                placeholder="Họ và tên bạn"
                            />
                            <button onClick={btnClick} className="btn main rect">đăng nhập</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}
