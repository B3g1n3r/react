import  { useState} from "react";

const Counter = () => {
    var [count, setCount] = useState(0);
    return(
        <div>
              <p>This is the Count {count} </p>
        <button onClick={()=>setCount(count+1)} >Increase</button>
        <button onClick={()=>(setCount(count-1))}>Decrease</button>
        <button onClick={()=>(setCount(count = 0))}>Reset</button>
        </div>
    );
};

export default Counter;