import {useState} from "react";
function Timer() {
    let [count,updateCount]=useState(0);
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={
            ()=>updateCount(++count)
        }>clickhere</button>
        </>
    )
}
export default Timer;