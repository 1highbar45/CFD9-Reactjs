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
import { useDispatch, useSelector } from 'react-redux'
import { useCourseList } from '../../hooks/useCourseList'
import Head from '../../components/Head'
import Button from '../../components/Button'
import InputNew from '../../components/InputNew'

export default function Home() {
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     courseService.getList()
    //         .then(res => {
    //             setCourses(res.data.data);
    //         })
    // }, [])

    // const { list } = useSelector(store => store.course)
    // const dispatch = useDispatch()

    // const { data: courses, loading } = useQuery(() => {
    //     return courseService.getList()
    // }, []);

    // useEffect(() => {
    //     dispatch(getCourseList())
    // }, [])
    // console.log(courses);

    const list = useCourseList()

    return (
        <main className="homepage" id="main">
            <Head>
                <title>CFD Training</title>
            </Head>
            <Banner />
            {/* <Button rounded type='primary' >
                Send message
            </Button>
            <InputNew></InputNew> */}
            <Course courses={list} loading={false} />
            <Special />
            <Customer />
            <Gallery />
            <CallToAction />
        </main>
    )
}
