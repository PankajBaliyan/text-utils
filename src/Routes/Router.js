// Router.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../components/TextForm';
import About from '../components/About';
import TopHeader from '../components/Header';


const AppRouter = () => {
    const [mode, setMode] = useState('light')

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.title = "Your Custom Title"
        } else {
            setMode('light')
        }
    }
    return (
        <div style={{ backgroundColor: mode === 'dark' ? '#8a8484' : 'white', height: '100vh' }}>
            <Router>
                <TopHeader name="Text-Utils" mode={mode} toggleMode={toggleMode} />

                <Routes>
                    <Route path="/" element={<Home heading="Enter text to Analyze" mode={mode} />} />
                    <Route path="/about" element={<About mode={mode} />} />
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;

