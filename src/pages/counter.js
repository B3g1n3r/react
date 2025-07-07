import React, {setState} from "react";

const Counter = () => {
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