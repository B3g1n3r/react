import  { useState} from "react";
import './login.css'

const Counter = () => {
    var [count, setCount] = useState(0);
    var [text , setText] = useState('');
    console.log(count);
    return(
        <div className="counterClass">
              <p>This is the Count {count} </p>
        <input size={80} value={text} onChange={(value) => setText(value.target.value)}>
        </input>
        <br></br>
        <button onClick={()=>setCount(count+1)} >Increase</button>
        <br></br>
        <button onClick={()=>(setCount(count-1))}>Decrease</button>
        <br></br>
        <button onClick={()=>(setCount(count = 0))}>Reset</button>
        </div>
    );
};

export default Counter;