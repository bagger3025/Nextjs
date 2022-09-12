import {useState} from 'react';

export default function IndexPage() {
  const [counter, setCounter] = useState(0);
  
    return <div>
      <h1>
        HI! {counter}
      </h1>
      <button onClick={()=>setCounter(prev => prev + 1)}>+</button>
    </div>
}
