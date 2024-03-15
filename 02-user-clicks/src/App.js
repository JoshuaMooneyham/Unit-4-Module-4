import './App.css';

function App() {
  return (
    <button onClick={(e) => {
      console.log(e);
      alert('CLICK!', 1000);
    }}>Click Me!</button>
  )
}

export default App;
