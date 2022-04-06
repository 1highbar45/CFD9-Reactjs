import React, { useState, useEffect } from 'react'
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom'
import CourseAccordion from '../../components/CourseAccordion'
import Teacher from '../../components/Teacher'
import { COURSE_REGISTER_PATH, HOME_PATH } from '../../constants/path'
import useQuery from '../../hooks/useQuery'
import { courseService } from '../../services/course'
import { currency } from '../../utils/number'
import Skeleton from '@mui/material/Skeleton';
import { useDispatch, useSelector } from 'react-redux'
// import { getCourseDetail } from '../../stores/course'
import { useCourseDetail } from '../../hooks/useCourseDetail'
import Head from '../../components/Head'

export default function CourseDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [accordionOpen, setAccordionOpen] = useState(-1)
    // const [detail, setDetail] = useState({})
    // useEffect(async () => {
    //     const res = await courseService.getDetail(id)
    //     if (res.data.data) {
    //         setDetail(res.data.data)
    //     } else {
    //         navigate(HOME_PATH)
    //     }
    // }, [id])
    // const { data: detail, loading } = useQuery(async () => {
    //     const res = await courseService.getDetail(id)
    //     if (res.data) {
    //         return res
    //     } else {
    //         navigate(HOME_PATH)
    //     }
    // }, [], {})

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    const detail = useCourseDetail(id)
    const registerPath = generatePath(COURSE_REGISTER_PATH, { id })
    // const detail = cache[id]
    const loading = !detail?.id
    const { teacher, mentor } = detail

    return (
        <main className="course-detail" id="main">
            <Head>
                <title>{detail.title}</title>
            </Head>
            <section className="banner style2" style={{ "--background": detail.template_color_banner }}>
                <div className="container">
                    <div className="info">
                        {
                            !loading ? <h1>Thực Chiến {detail.title}</h1> :
                                <Skeleton width={'100%'} height={128} />
                        }
                        {
                            !loading ? (
                                <div className="row">
                                    <div className="date"><strong>Khai giảng:</strong> 12/10/2020</div>
                                    <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                                </div>
                            ) : <Skeleton width={'70%'} variant="text" />
                        }
                        <Link to={registerPath} className="btn white round" style={{ "--color-btn": detail.template_color_btn }}>đăng ký</Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="video">
                            <div className="icon">
                                <img src="/img/play-icon-white.png" alt />
                            </div> <span>giới thiệu</span>
                        </div>
                        <div className="money">{currency(detail.money)} VND</div>
                    </div>
                </div>
            </section>
            <section className="section-2">
                <div className="container">
                    {
                        !loading ? <p className="des">{detail.long_description}</p>
                            : <Skeleton height={300} />
                    }
                    <h2 className="title">giới thiệu về khóa học</h2>
                    <div className="cover">
                        <img src="/img/course-detail-img.png" alt />
                    </div>
                    <h3 className="title">nội dung khóa học</h3>
                    {/* {
                        !loading ? detail.content?.map((e, i) => <CourseAccordion onClick={() => setAccordionOpen(i)} open={i === accordionOpen} key={1} index={1 + i} {...e} />)
                            : [...Array(18)].map((_, i) => <div key={i} style={{ marginBottom: 8 }}>
                                <Skeleton height={80} />
                            </div>)
                    } */}
                    <CourseAccordion.Group>
                        {
                            !loading ? detail.content?.map((e, i) => <CourseAccordion open={i === accordionOpen} key={1} index={1 + i} {...e} />)
                                : [...Array(18)].map((_, i) => <div key={i} style={{ marginBottom: 8 }}>
                                    <Skeleton height={80} />
                                </div>)
                        }
                    </CourseAccordion.Group>
                    <h3 className="title">yêu cầu cần có</h3>
                    <div className="row row-check">
                        <div className="col-md-6">Đã từng học qua HTML, CSS</div>
                        <div className="col-md-6">Cài đặt phần mềm Photoshop,
                            Adobe illustrator, Skype</div>
                    </div>
                    <h3 className="title">hình thức học</h3>
                    <div className="row row-check">
                        <div className="col-md-6">Học offline tại văn phòng, cùng {detail.teacher?.title} và 3 đồng nghiệp.</div>
                        <div className="col-md-6">Dạy và thực hành thêm bài tập online
                            thông qua Skype.</div>
                        <div className="col-md-6">Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
                            hoặc phần mềm điều khiển máy tính.</div>
                        <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
                    </div>
                    <h3 className="title">
                        <div className="date-start">lịch học</div>
                        <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                    </h3>
                    <p>
                        <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
                        <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h
                    </p>
                    <h3 className="title">Người dạy</h3>
                    <Teacher teacher={teacher} />
                    <h3 className="title">Người hướng dẫn</h3>
                    {
                        mentor?.map(e => <Teacher key={e.id} teacher={e} />)
                    }
                    <div className="bottom">
                        <div className="user">
                            <img src="/img/user-group-icon.png" alt /> 12 bạn đã đăng ký
                        </div>
                        <Link to={registerPath} className="btn main btn-register round">đăng ký</Link>
                        <div className="btn-share btn overlay round btn-icon">
                            <img src="/img/facebook.svg" alt />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-3">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">DỰ ÁN</h3>
                        <h2 className="main-title">THÀNH VIÊN</h2>
                    </div>
                    <div className="list row">
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img.png" alt />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        React JS
                                    </a>
                                    <p className="des">
                                        One of the best corporate fashion brands in Sydney
                                    </p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt />
                                        </div>
                                        <div className="name">Vương Đặng</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img2.png" alt />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Animation
                                    </a>
                                    <p className="des">
                                        One of the best corporate fashion brands in Sydney
                                    </p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt />
                                        </div>
                                        <div className="name">Trần Nghĩa</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img3.png" alt />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Scss, Grunt JS và Boostrap 4
                                    </a>
                                    <p className="des">
                                        One of the best corporate fashion brands in Sydney
                                    </p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt />
                                        </div>
                                        <div className="name">Trần Nghĩa</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Khóa học</h3>
                        <h2 className="main-title">Liên quan</h2>
                    </div>
                    <div className="list row">
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img.png" alt />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Front-end căn bản
                                    </a>
                                    <p className="des">
                                        One of the best corporate fashion brands in Sydney
                                    </p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt />
                                        </div>
                                        <div className="name">Vương Đặng</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img2.png" alt />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Front-end nâng cao
                                    </a>
                                    <p className="des">
                                        One of the best corporate fashion brands in Sydney
                                    </p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt />
                                        </div>
                                        <div className="name">Trần Nghĩa</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img3.png" alt />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Laravel framework
                                    </a>
                                    <p className="des">
                                        One of the best corporate fashion brands in Sydney
                                    </p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt />
                                        </div>
                                        <div className="name">Trần Nghĩa</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
