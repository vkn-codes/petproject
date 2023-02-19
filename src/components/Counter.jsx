import React, {useState} from 'react'

function Counter() 
{
    const [count, setCounter] = useState(0);
  return (
    <div className="card">
        <button onClick={() => setCounter((count) => count + 1)}>  + </button>
        <p>{count}</p>
        <button onClick={() => setCounter((count) => count - 1)}> - </button>
    </div>
  )
}

export default Counter