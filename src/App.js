import logo from './logo.svg';
import './App.css';
import './pages/login';
import './pages/counter';
import Counter from './pages/counter';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
