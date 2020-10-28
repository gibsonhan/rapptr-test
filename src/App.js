import React, { useState } from 'react'
import './App.css';
import Landing from './screen/Landing';
import Main from './screen/Main';

function App() {
  const [screen, setScreen] = useState('landing')

  const display = {
    'landing': <Landing setScreen={setScreen} />,
    'main': <Main setScreen={setScreen} />
  }

  return (
    display[screen]
  );
}

export default App;
