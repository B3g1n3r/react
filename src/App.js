import './App.css';
import'./pages/login';
import {useState} from 'react';
import './pages/counter';
import Counter from './pages/counter';

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
