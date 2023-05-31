import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Description } from './components/Description'
import { Counter } from './components/Counter'

function App() {
  return (
   <>
    <Header/>
    <Description/>
    <Counter/>
   </>
  );
}

export default App;

{/* <div className="App">
<header className="App-header">
  <Header/>
  <Description/>
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
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
</div> */}