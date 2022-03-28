import React, { createContext, useContext, useState } from 'react'

export default function CourseAccordion({ index, title, content, open, onClick, position }) {
    const { numOpen } = useContext(Context)
    return (
        <div className="accordion">
            <div className="accordion__title" onClick={onClick}>
                <div className="date">Ngày {index}</div>
                <h3>{title}</h3>
            </div>
            <div className="content"
                // style={{ display: open ? 'block' : 'none' }}
                style={{ display: position === numOpen ? 'block' : 'none' }}
            >
                {content}
            </div>
        </div>
    )
}

const Context = createContext({
    numOpen: -1
})

CourseAccordion.Group = ({ children }) => {
    const [numOpen, setNumOpen] = useState(-1)

    const onClick = (index) => () => {
        setNumOpen(index)
    }
    return <Context.Provider value={{ numOpen }}>
        {/* {children} */}
        {React.Children.map(children, (child, i) => {
            return React.cloneElement(child, { position: i, onClick: onClick(i) })
        })}
    </Context.Provider>
}
