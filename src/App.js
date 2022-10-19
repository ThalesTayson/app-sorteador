import './App.css';
import Sortear from './sortear';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sorteio de números</h1>
      </header>
      <div>
        <Sortear/>
      </div>
      <footer>
        <p>Campo Grande - MS, {Date.now}</p>
        <p>Thales Vargas</p>
      </footer>
    </div>
  );
}

export default App;
