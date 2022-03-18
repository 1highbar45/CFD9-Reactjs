import { useState, useEffect } from 'react'

export function CountDownBox(props) {
    const [count, setCount] = useState(10)
    const [count2, setCount2] = useState(10)

    useEffect(() => {
        console.log('useEffect');
    }, [count])

    const countUp = () => {
        setCount(count + 1)
    }

    const countDown = () => {
        setCount(count - 1)
    }

    console.log('re-render');

    return (
        <div style={{
            width: 200,
            height: 200,
            // background: 'red',
            marginBottom: 10,
            background: props.color,
            fontSize: 50,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {count}
            <button onClick={countUp}>Up</button>
            <button onClick={countDown}>Down</button>
        </div>
    )
}

export default CountDownBox