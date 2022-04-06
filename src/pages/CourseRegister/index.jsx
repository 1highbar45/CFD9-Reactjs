import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Checkbox from '../../components/Checkbox'
import { useCourseDetail } from '../../hooks/useCourseDetail'
import { courseService } from '../../services/course'
import { currency } from '../../utils/number'

export default function CourseRegister() {
    // const [detail, setDetail] = useState({})
    const coinRef = useRef({ abc: 123 })
    const { id } = useParams()

    const [form, setForm] = useState({})

    // useEffect(async () => {
    //     const res = await courseService.getDetail(id)
    //     if (res.data.data) {
    //         setDetail(res.data.data)
    //     }
    // }, [id])

    const detail = useCourseDetail(id)

    // const { data: detail } = useQuery(async () => {
    //     const res = await courseService.getDetail(id)
    //     if (res.data.data) {
    //         return res
    //     } else {
    //         navigate(HOME_PATH)
    //     }
    // }, [], {})

    useEffect(() => {
        // coinRef.current.checked = true
    }, [])

    const onSubmit = (ev) => {
        ev.preventDefault();

        const errorObj = {}

        if (!form.username) {
            errorObj.username = "Username la bat buoc"
        }

        const coin = coinRef.current.checked
        console.log('use coin', coin);
        setErrors(errorObj)
        if (Object.keys(errorObj).length === 0) {
            console.log('thanh cong');
        }
    }

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến {detail.title} </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> {currency(detail.money)}</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" placeholder="Họ và tên bạn" onChange={ev => form.username = ev.target.value} />
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" placeholder="Số điện thoại" />
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input type="text" placeholder="Email của bạn" />
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" placeholder="https://facebook.com" />
                            </label>
                            <Checkbox label='Sử dụng COIN' ref={coinRef}>Hiện có <strong>300 COIN</strong></Checkbox>
                            {/* <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    <input type="checkbox" defaultChecked="checked"  />
                                    <span className="checkmark" />
                                </div>
                            </label> */}
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div onClick={onSubmit} className="btn main rect">đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
          <div class="contain">
              <div class="main-title">đăng ký thành công</div>
              <p>
                  <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                      Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                      hoặc số điện thoại của bạn.
              </p>
          </div>
          <a href="/" class="btn main rect">về trang chủ</a>
      </div> */}
        </main>
    )
}

//cach 1: lay html DOM de thao tac
//cach 2: khi user muốn forward ref từ component qua 1 element nào đó
//cach 3: khi component muốn trả về 1 cách thể hiện khác của ref