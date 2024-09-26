import React, { useState } from 'react'; // Import React
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    };

    return (
      <>
        <Router>
          <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
          {/* <Alert alert="This Is Alert"/> */}
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze Below" mode={mode} />} />
          </Routes>
        </Router>
      </>
    );
}

export default App;
