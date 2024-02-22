import react, {useState} from "react";

export default function Counter(){
 
    const [count, setCount] = useState(0);
    const inc =()=>{
        setCount(count+1);
    }
    const dec =()=>{
        setCount(count-1);
    }
    
    return(<>
        <h1> Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={inc}>Increment</button>    
        <button onClick={dec}>Decrement</button>    
    </>);
}
