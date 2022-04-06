import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Checkbox = ({ label, children, errors }, ref) => {
    const [checked, setChecked] = useState()

    useImperativeHandle(ref, () => {
        return {
            toggle() {
                setChecked(checked)
            },
            checked
        }
    }, [checked])

    return (
        <>
            <label className="disable">
                <p>{label}</p>
                <div className="checkcontainer">
                    {children}
                    <input type="checkbox" checked={checked} onChange={ev => setChecked(ev.target.checked)}
                    ref={ref}
                    />
                    <span className="checkmark" />
                </div>
            </label>
            {errors && <p className='error-text'>{errors}</p>}
        </>
    )
}

//HOC
export default forwardRef(Checkbox)