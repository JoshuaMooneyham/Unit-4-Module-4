import './App.css';
import { useState } from 'react';


function App() {

  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  
  function handleSubmit(e) {
    alert(`Hello ${firstName} ${lastName}, nice to meet you!`);
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label id='first'>
        First Name:{' '}
        <textarea
          value={firstName}
          onChange={(e) => {
            console.log(e);
            setFirstName(e.target.value);
          }} />
      </label>
      <label id='last'>
        Last Name:{' '}
        <textarea
          value={lastName}
          onChange={(e) => {
            console.log(e);
            setLastName(e.target.value);
          }} />
      </label>
      <button type='submit'>Greett</button>
    </form>
  );
}

export default App;