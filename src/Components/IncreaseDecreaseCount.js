import React, { useState } from 'react'

function IncreaseDecreaseCount() {

const [count, setCount] = useState(0);

let increaseFunc = () => {
    setCount((c) => c + 1);
}
let decreasrFunc = () => setCount((c) => c-1);
let resetFunc = () => setCount(0);



  return (
    <div>
        <div style={{background: 'rgb(187, 185, 185)'}}>
            <h1>{count}</h1>
        </div>
        
        <button onClick={increaseFunc} >Increase</button>
        <button onClick={decreasrFunc} >Decrease</button>
        <button onClick={resetFunc} >Reset</button>
    </div>
  )
}

export default IncreaseDecreaseCount