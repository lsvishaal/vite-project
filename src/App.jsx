import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)

    const addValue = () =>{
        setCounter(counter + 1)
    }
    return (
        <>
        <h1></h1>
        </>
    )
}