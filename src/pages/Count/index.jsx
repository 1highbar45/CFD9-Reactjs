import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Count() {
    const { value } = useSelector(store => store.counter)
    const dispatch = useDispatch()
    console.log(value);
    return (
        <div style={{ marginBottom: 100, marginTop: 100 }}>
            <button onClick={() => dispatch({ type: 'counter/decremented' })}>-</button>
            Count: {value}
            <button onClick={() => dispatch({ type: 'counter/incremented' })}>+</button>
            <button onClick={() => dispatch({ type: 'counter/nothing' })}>0</button>
        </div>
    )
}
