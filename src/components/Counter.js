import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    // componentDidMount
    useEffect(() => {
        console.log("component mounted")

        // componentWillUnmount
        return () => {
            console.log("component unmounted")
        }
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log("count updated")
    }, [count])

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>{count}</button>
        </div>
    )
}
