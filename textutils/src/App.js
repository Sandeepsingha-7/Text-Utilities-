
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import About from './components/About.js';
import Alert from './components/Alert.js';

import React, { useState } from 'react';
import {
BrowserRouter as Router,
  Routes,
  Route
}
 from 'react-router-dom';




function App() {
  const [mode, setMode] = useState("dark");
  const [text, setText] = useState("Enable light mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)

  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode("light")
      setText("Enable dark mode")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled!", "success")

    }
    else {
      setMode("dark");
      setText("Enable light mode");
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode enabled!", "success")
    }
    
  }


  return (
    <Router>
    <div>
      <Navbar title="TEXT UTILITIES" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path='/' element={<Textform heading="Enter the text below to convert or analyse" mode={mode} showAlert={showAlert}/>}/>
        
          
          <Route path='/About' element={<About mode={mode} />}/>
          
          
        </Routes>
      </div>
    </div>
      </Router>
  );
}

export default App;
