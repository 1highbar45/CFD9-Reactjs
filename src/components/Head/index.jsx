import React from 'react'
import reactDom from 'react-dom'

export default function Head({ children }) {
    return reactDom.createPortal(
        children,
        document.head
    )
}
