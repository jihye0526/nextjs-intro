import { useState } from "react";

export default function Home(){
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Hello {counter}</h1>
            <button onClick={() => setCounter(counter+1)}>+</button>
        </>
    );
}