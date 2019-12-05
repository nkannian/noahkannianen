import React from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">
        <ParticlesBg num={10} type="circle" bg={true} />
    </div>
  );
}

export default App;