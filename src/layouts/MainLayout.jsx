import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../assets/style/style.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import LoginModal from '../components/LoginModal'
import RegisterModal from '../components/RegisterModal'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
            <LoginModal />
            <RegisterModal />
        </>
    )
}
