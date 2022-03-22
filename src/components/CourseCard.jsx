import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { COURSE_DETAIL_PATH, COURSE_REGISTER_PATH } from '../constants/path'

export default function CourseCard({ slug, thumbnail, title, short_description, teacher, id }) {
    const detailPath = generatePath(COURSE_DETAIL_PATH, { slug, id })
    const registerPath = generatePath(COURSE_REGISTER_PATH, { id })

    return (
        <div className="col-md-4 course" key={id}>
            <div className="wrap">
                <Link className="cover" to={detailPath}>
                    <img src={thumbnail.link} alt />
                    <span className="badge b1">Đã kết thúc</span>
                </Link>
                <Link className="info" to={detailPath}>
                    <a className="name" href="#">
                        {title}
                    </a>
                    <p className="des">
                        {short_description}
                    </p>
                </Link>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher.avatar.link} alt />
                        </div>
                        <div className="name">{teacher.title}</div>
                    </div>
                    <Link to={registerPath} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </div>
    )
}
