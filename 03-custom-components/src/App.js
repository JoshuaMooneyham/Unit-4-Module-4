// import './App.css';

function NewButton(props) {
  return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: "solid 1px black",
    width: '200px',
    height: '75px',
    backgroundColor: props.color,
    color: props.color ? 'white' : 'black',
    cursor: 'pointer'
  }} onClick={e => alert(props.children + ' clicked!')}>
    {props.children}
  </div>
)}

function App() {
  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#151515'
      }}>
        <NewButton color={'red'}>
          Button 1
        </NewButton>
        <br></br>
        <NewButton color={'blue'}>
          Button 2
        </NewButton>
        <br></br>
        <NewButton color={'green'}>
          Button 3
        </NewButton>
    </div>
  )
}

export default App;
