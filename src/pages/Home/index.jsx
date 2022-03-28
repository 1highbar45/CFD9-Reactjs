import React, { useState, useEffect } from 'react'
import CallToAction from './components/CallToAction'
import Banner from './components/Banner'
import Special from './components/Special'
import Gallery from './components/Gallery'
import Customer from './components/Customer'
import { courseService } from '../../services/course'
import Course from './components/Course'
import useQuery from '../../hooks/useQuery'
import { homeService } from '../../services/home'

export default function Home() {
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     courseService.getList()
    //         .then(res => {
    //             setCourses(res.data.data);
    //         })
    // }, [])
    const { data: courses, loading } = useQuery(() => {
        return courseService.getList()
    }, []);


    // console.log(courses);

    return (
        <main className="homepage" id="main">
            <Banner />
            <Course courses={courses} loading={loading} />
            <Special />
            <Customer />
            <Gallery />
            <CallToAction />
        </main>
    )
}
