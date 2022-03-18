import React from 'react'

export default function Input({ label, error, ...props }) {
    return (
        <>
            <label className="label">
                <p>{label}<span>*</span></p>
                <input type="text" {...props} />
            </label>
            {
                error && <p className="error-text">{error}</p>
            }
        </>
    )
}

// Ke thua
Input.Number = ({ ...props }) => {
    return (
        <Input {...props} type="number" />
    )
}

// Ko ke thua
Input.Number = ({ label, placeholder, onChange, error }) => {
    return (
        <>
            <label className="label">
                <p>{label}<span>*</span></p>
                <input onChange={onChange} type="number" placeholder={placeholder} />
            </label>
            {
                error && <p className="error-text">{error}</p>
            }
        </>
    )
}

Input.Email = ({ label, placeholder, onChange, error }) => {
    return (
        <>
            <label className="label">
                <p>{label}<span>*</span></p>
                <input onChange={onChange} type="email" placeholder={placeholder} />
            </label>
            {
                error && <p className="error-text">{error}</p>
            }
        </>
    )
}

Input.Password = ({ ...props }) => {
    return (
        <Input {...props} type="password" />
    )
}

