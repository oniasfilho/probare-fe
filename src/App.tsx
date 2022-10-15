import React, { useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import './App.css';

const App = () => {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "/script.js";
    script.async = true;

    document.body.appendChild(script);
  }, [])

  return (
    <div className="App">
      <LoginScreen />
    </div>
  );
}

export default App;
