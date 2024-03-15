import './App.css';

function App() {
  const Test = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

  function List({ls}) {
    return (
      ls.map(item => <h1>{item}</h1>)
    )
  }

  return (
    <List ls={Test}></List>
  );
}

export default App;
