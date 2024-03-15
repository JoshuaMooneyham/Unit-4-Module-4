import './App.css';
import { useState, useEffect } from 'react';

function IndividualCard({user}) {
  return (
  <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={user.avatar} />
          </div>
          <div className='flip-card-back'>
            <p className='name'>{user.first_name} {user.last_name}</p>
            <p className='job'>{user.employment.title}</p>
            <p className='gender'>{user.gender}</p>
            <p className='dob'>{user.date_of_birth}</p>
            <p className='email'>{user.email}</p>
            <p className='phone'>{user.phone_number}</p>
          </div>
        </div>
      </div>
  )
}

function Cards() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(response => response.json())
        .then(data => setUsers(data));
  });


  return (
  <div className='app'>
    <div className='card-container'>
    {users.map(user => 
    <IndividualCard user={user}/>  
    )}</div>
    <button onClick={() => fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(response => response.json())
        .then(data => setUsers(data))}>New Batch</button>
  </div>
  )
}

function App() {

  return (
      <Cards/>
  );
}

export default App;
