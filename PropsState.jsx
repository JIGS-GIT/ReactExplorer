import { useState } from "react";
import React from "react";

function PropsState({ message }) {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h2>Props & State Example</h2>

                <h4>Welcome to {message}</h4>

                <p>Button clicked: {count} times</p>

                <button onClick={() => setCount(count + 1)}>
                    Click Me
                </button>
            </div>
        </>
    );
}

export default PropsState;
