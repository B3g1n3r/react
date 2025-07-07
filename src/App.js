import logo from './logo.svg';
import './App.css';
import'./pages/login';
import React,{useState} from 'react';
import './pages/counter';
import Counter from './pages/counter';

function App() {
  var [count , setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
