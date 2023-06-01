import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopHeader from './components/Header';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ShowAlertComponent from './components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  // const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.title = "Your Custom Title"
      // showAlert('Dark Mode Enabled','success', 'show')
    } else {
      setMode('light')
      // showAlert('Light Mode Enabled','success', 'show')
    }
  }

  // const showAlert = (message, type, className) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //     class: className
  //   })
  // }
  return (
    <div style={{backgroundColor: mode === 'dark' ? '#8a8484' : 'white', height: '100vh'}}>
      <TopHeader name="Text-Utils" mode={mode} toggleMode={toggleMode}/>
      {/* <ShowAlertComponent alert={alert}/> */}
      <Router>
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter text to Analyze" mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
