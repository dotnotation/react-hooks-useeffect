import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>{count}</button>
        </div>
    )
}
