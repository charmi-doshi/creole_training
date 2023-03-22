import React, { useEffect, useRef, useState } from "react";

function Hooks() {
    const [value,setValue] = useState("")
    const letters = useRef(0);
    
    useEffect(()=>{
        letters.current = letters.current + 1
    })
    const [counter, setCounter] = useState(0);
    function useCustomHook(){
      
        function resetCounter(){
            setCounter(counter + 1);
        }
        useEffect(()=>{
            console.log("The button is clicked"+{counter}+"times")
        },[counter])

        return resetCounter;
    }

   
  return (
    <>
      <h1>Hooks</h1>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useRef</li>
        <li>useMemo</li>
      </ul>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <h4>Render count:{letters.current}</h4>
      <h2>Custom hook</h2>
      <button onClick={useCustomHook(0,"button")}>Counter</button>
      {counter}
    </>
  );
}

export default Hooks;
