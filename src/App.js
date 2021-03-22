import { useState } from 'react';
import './App.css';
import Direction from './component/Direction/Direction';


function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <div className="App">
      <h3>Hello</h3>
      <input type="text" placeholder="starting From" conBlur={e => setOrigin(e.target.value)}/>
      <input type="text" placeholder="Going to" conBlur={e => setDestination(e.target.value)}/>
      <Direction origin={origin} destination={destination} />
    </div>
  );
}

export default App;
