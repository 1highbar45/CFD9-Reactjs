import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Count() {
    const { value } = useSelector(store => store)
    const dispatch = useDispatch()
    console.log(value);
    return (
        <div style={{ height: 500, marginTop: 100 }}>
            <button onClick={() => dispatch({ type: 'counter/decremented' })}>-</button>
            Count {value}
            <button onClick={() => dispatch({ type: 'counter/incremented' })}>+</button>
        </div>
    )
}
