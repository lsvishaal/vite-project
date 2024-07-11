import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const addValue = () => {
        setCounter(counter + 1);
    };

    return (
        // Use Tailwind CSS classes for flexbox, centering items vertically and horizontally, and full viewport height
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Counter: {counter}</h1>
            <button className="btn btn-activew" onClick={addValue}>Increment</button>
            <h1>React Course with Gopu: {counter}</h1>
            <h2>Counter Value: {counter}</h2>
            <button onClick={addValue}>Count</button>
        </div>
    );
}

export { Counter };