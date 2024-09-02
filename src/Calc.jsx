import {useState} from "react";
import Keyboard from "./Keyboard";

function Calc(){
    let [input,setInput]=useState("")
    function handleClick(value){
        setInput(input+value);
    }
    function calculate(value){
        let ouputVal=eval(input)
        setInput(ouputVal)
    }
    function handleClear(){
        setInput("");
    }
    return(
        <>
        <center>
            <div className="conatiner">
        <h1>Calculator App</h1>
       
        <input type="text" className="output" value={input} readOnly ></input>
       
        <div className="Keyboard">
        <Keyboard handleClick={handleClick} calculate={calculate} handleClear={handleClear}/>
        </div>
        </div>
        </center>
        </>
    )
}

export default Calc;