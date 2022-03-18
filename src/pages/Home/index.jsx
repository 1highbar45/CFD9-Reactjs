import React from 'react'
import Action from './components/Action'
import Banner from './components/Banner'
import CourseOffline from './components/CourseOffline'
import CourseOnline from './components/CourseOnline'
import Different from './components/Different'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'

export default function Home() {
    return (
        <>
            <main className="homepage" id="main">
                <Banner />
                <CourseOffline />
                <CourseOnline />
                <Different />
                <Testimonial />
                <Gallery />
                <Action />
            </main>

        </>
    )
}
