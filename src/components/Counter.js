import React, {useState, useEffect} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    // componentDidMount
    useEffect(() => {
        console.log("component mounted")

        // componentWillUnmount
        // this callback function will run when the component unmounts
        // this is a clean up function
        return () => {
            console.log("component unmounted")
        }
    }, [] )
    // this will only call the callback once
    // doesn't update based on prevState
    
    // componentDidUpdate
    useEffect(() => {
        console.log("count updated")
    }, [count])
    // this is passing in the count as a dependency 
    // it is passing in the count and checking if it has changed and if so it will run the callback function otherwise it won't run
    // only runs the callback if the dependency changes

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>{count}</button>
        </div>
    )
}
