import React, { useState } from 'react'
import CourseCard from '../../../components/CourseCard'
import Skeleton from '@mui/material/Skeleton';

export default function Course({ courses, loading }) {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        {
                            !loading ? courses?.map(e => <CourseCard key={e.id} {...e} />)
                                : [...Array(12)].map((_, i) => <div key={i} style={{ marginTop: 15, padding: 15 }}>
                                    < Skeleton variant="rectangular" width={290} height={435} />
                                </div>)
                            // courses?.map(e => <CourseCard key={e.id} {...e} />)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
