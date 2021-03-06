import React, { useContext, useState } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export default function Profile({ path }) {
    const { user } = useContext(AuthContext)
    // const login = true;

    if (!user) return <Navigate to="/" />

    return (
        <main className="profile" id="main">
            {/* {
                !login && <Navigate to="/" />
            } */}
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={user.avatar} alt />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
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
