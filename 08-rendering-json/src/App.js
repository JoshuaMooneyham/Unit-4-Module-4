import './App.css';

function App() {
  const testJSON = [{
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#"
    }]

  function RenderJokes({obj}) {
    return (
      obj.map(element => {
      <div key={element.id}>
        <h1>{element.setup}</h1>
        <h2>{element.punchline}</h2>
      </div>
        })
  )}
  
  return (
    <RenderJokes obj={testJSON}/>
  );
}

export default App;
