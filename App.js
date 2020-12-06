import logo from './logo.svg';
import './App.css';

const number = 5;
const areYouReady = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'blue',
          fontSize: 14 + 40,
          lineHeight: .3
        }}>
          Hello anybody!
        </p>
        <p>
          {'Your number = ' + number}
        </p>
        <p>
          {areYouReady && "I'm ready!"}
          {undefined}
          {null}
          {false}
        </p>
        <p>
          {(number <= 5) ? "The number is fine" : "I'll choose another number"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
