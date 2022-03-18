import React from 'react'
import CallToAction from './components/CallToAction'
import Banner from './components/Banner'
import CourseOffline from './components/CourseOffline'
import CourseOnline from './components/CourseOnline'
import Special from './components/Special'
import Gallery from './components/Gallery'
import Customer from './components/Customer'

export default function Home() {
    return (
        <>
            <main className="homepage" id="main">
                <Banner />
                <CourseOffline />
                <CourseOnline />
                <Special />
                <Customer />
                <Gallery />
                <CallToAction />
            </main>

        </>
    )
}
