import React,{useState, useMemo, useEffect} from "react";

const Usememo =  () => {
    const[number, setNumber] = useState(0)
    const[dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]) 

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark? "black" : "white",
            color: dark? "white" : "black"
        }
    },[dark])  

    useEffect(() => {
        console.log("Changed");
    },[themeStyles]) 

    return (
        <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}
const slowFunction = (num) => {
    console.log("Calling slow function");
    for(let i = 0; i < 1000000; i++){
        return num * 2;
    }
}
export default Usememo;