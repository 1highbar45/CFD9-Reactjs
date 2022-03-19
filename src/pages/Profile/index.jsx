import React, { useState } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import Coin from './Coin';
import ProfileCourse from './Course';
import Info from './Info';
import ProfilePayment from './Payment';
import Project from './Project';

export default function Profile({ path }) {
    const login = true;

    return (
        <main className="profile" id="main">
            {
                !login && <Navigate to="/" />
            }
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="/img/avatar-lg.png" alt />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink to={`${path}`} end>Thông tin tài khoản</NavLink>
                            <NavLink to={`${path}/khoa-hoc`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${path}/du-an`}>Dự án đã làm</NavLink>
                            <NavLink to={`${path}/thanh-toan`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section >
        </main >

    )
}
