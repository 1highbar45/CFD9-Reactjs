import { useState } from 'react'
import './style.css'
const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`accordion ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <h3 className='title' >{title}</h3>
            <div className='content'>{children}</div>
        </div>
    )
}

export default Accordion