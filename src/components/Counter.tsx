import { useState } from 'react';
import './Counter.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((n) => n + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
}
