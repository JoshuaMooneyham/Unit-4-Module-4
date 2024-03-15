import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <button onClick={() => setCount(count+1)}
      style={{transform: 'scale(20)'}}>
        {count}
      </button>
    </div>
  )
}

export default App;
