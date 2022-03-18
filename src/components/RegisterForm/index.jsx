import React, { useState } from 'react'
import styles from './style.module.scss'

export default function RegisterForm() {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})

    const onClick = (ev) => {
        ev.preventDefault()
        console.log(form);

        const errorObj = {}
        if (!form.username) {
            errorObj.username = 'Username ko dc bo trong'
        }

        if (!form.phone) {
            errorObj.phone = 'Phone ko dc bo trong'
        } else if (!(/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone))) {
            errorObj.phone = "Phone ko dung dinh dang"
        }

        if (!form.email) {
            errorObj.email = 'Email ko dc bo trong'
        } else if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))) {
            errorObj.email = "Email ko dung dinh dang"
        }

        if (!form.facebook) {
            errorObj.facebook = 'Facebook ko dc bo trong'
        }

        console.log(errorObj);
        setError(errorObj)
        if (Object.keys(errorObj).length === 0) {
            alert('Thanh Cong')
        }
    }

    return (
        <section className={styles['register-course']}>
            <h1 className="title">Register</h1>
            <form action="">
                <label htmlFor="">
                    <p>Ho va ten<span>*</span></p>
                    <input type="text" onChange={ev => form.username = ev.target.value} placeholder="Ho va ten cua ban" />
                    {error.username && <p className='error-text'>{error.username}</p>}

                </label>
                <label htmlFor="">
                    <p>So dien thoai<span>*</span></p>
                    <input type="text" onChange={ev => form.phone = ev.target.value} placeholder="So dien thoai cua ban" />
                    {error.phone && <p className='error-text'>{error.phone}</p>}

                </label>
                <label htmlFor="">
                    <p>Email<span>*</span></p>
                    <input type="text" onChange={ev => form.email = ev.target.value} placeholder="Email cua ban" />
                    {error.email && <p className='error-text'>{error.email}</p>}

                </label>
                <label htmlFor="">
                    <p>URL Facebook<span>*</span></p>
                    <input type="text" onChange={ev => form.facebook = ev.target.value} placeholder="https://facebook.com" />
                    {error.facebook && <p className='error-text'>{error.facebook}</p>}

                </label>
                <label htmlFor="">
                    <p>Y kien ca nhan</p>
                    <input type="text" onChange={ev => form.note = ev.target.value} placeholder="Mong muon ca nhan va lich ban co the hoc." />
                </label>
                <button onClick={onClick} className="btn main rect">dang ky</button>
            </form>
        </section>
    )
}
