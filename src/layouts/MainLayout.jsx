import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../assets/style/style.scss'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
