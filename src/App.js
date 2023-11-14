import { useState } from 'react';
import './index.css';

function App() {

  const [status, setStatus] = useState(true);

  function move(){
    setStatus(!status)
  }

  return (
    <div className="App" onClick={move}>
      <div className="container">
        <h1 className={status? "original": "first"}>A</h1>
        <h1 className={status? "original" : "second"}>B</h1>
      </div>
    </div>
  );
}

export default App;
