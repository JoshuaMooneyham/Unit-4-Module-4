import './App.css';


function App() {
  return (
    <ul>
      {['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'].map(element => <li>{element}</li>)}
    </ul>
  )
}

export default App;
