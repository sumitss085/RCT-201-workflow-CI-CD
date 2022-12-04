
import { useState } from 'react';

import './App.css';

function App() {

  const [Count,setCount]=useState(0)

  const HandleCount =(val)=>{
    
    setCount( (prev) => prev + val )

  }


  return (
    <div className="App">

      <div>
        <h1>Counter App</h1>
          <h3>Count - {Count}</h3>
          <div className='btn_div'>
          <button onClick={()=>HandleCount(4)}>INCREMENT</button>
          <button onClick={()=>HandleCount(-4)}>DECREMENT</button>
          </div>
          

      </div>

    </div>
  );
}

export default App;
