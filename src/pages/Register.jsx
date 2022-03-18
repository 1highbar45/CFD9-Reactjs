import React, { useState } from 'react'
import Input from '../components/Input';

export default function Register() {

    const [form, setForm] = useState({});

    const [errors, setErrors] = useState({});

    const btnClick = (ev) => {
        ev.preventDefault();

        const errorObj = {};

        if (!form.username) {
            errorObj.username = "Username la bat buoc"
        };

        if (!form.phone) {
            errorObj.phone = "Phone la bat buoc"
        };

        if (!form.email) {
            errorObj.email = "Email la bat buoc"
        };

        if (!form.facebook) {
            errorObj.facebook = "Facebook la bat buoc"
        };

        setErrors(errorObj);

        if (Object.keys(errorObj).length === 0) {
            alert('Success');
        }
    }

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <form className="form">
                            <Input
                                label="Họ và tên"
                                onChange={ev => form.username = ev.target.value}
                                placeholder="Họ và tên bạn"
                                error={errors.username}
                            />
                            <Input
                                label="Số điện thoại"
                                onChange={ev => form.phone = ev.target.value}
                                placeholder="Số điện thoại"
                                error={errors.phone}
                            />
                            <Input.Email
                                label="Email"
                                onChange={ev => form.email = ev.target.value}
                                placeholder="Email của bạn"
                                error={errors.email}
                            />
                            <Input
                                label="URL Facebook"
                                onChange={ev => form.facebook = ev.target.value}
                                placeholder="https://facebook.com"
                                error={errors.facebook}
                            />
                            <Input.Number
                                label="Tuổi"
                                onChange={ev => form.username = ev.target.value}
                                placeholder="Tuổi của bạn"
                                error={errors.email}
                            />
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input onChange={ev => form.note = ev.target.value} type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            {/* <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label> */}
                            <Input
                                label="Ý kiến cá nhân"
                                onChange={ev => form.username = ev.target.value}
                                placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                            />
                            <button onClick={btnClick} className="btn main rect">đăng ký</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}
