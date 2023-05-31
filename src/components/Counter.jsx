import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);  
 
  const increment = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Count count={count}/>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function Count(props) {
  return (
    <span>Click me {props.count}</span>
  );
}


