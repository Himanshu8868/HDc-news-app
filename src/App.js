import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API; // Ensure your API key is set in environment variables

  useEffect(() => {
    applyBodyBackground(mode);
  }, [mode]); // Update body background when mode changes

  const applyBodyBackground = (mode) => {
    document.body.style.backgroundColor = mode === 'light' ? '#ffffff' : '#212529';
    document.body.style.color = mode === 'light' ? 'black' : 'white';
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode); // Update mode state
  };

  return (
    <Router>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <LoadingBar color='#f11946' progress={progress} />

      <div className="container my-3">
        <Routes>
          <Route path="/" exact element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={12} country="us" headline="Top General Headlines" mode={mode} category="general" />} />

          <Route path="/business" exact element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={12} country="us" headline="Top Business Headlines" mode={mode} category="business" />} />

          <Route path="/entertainment" exact element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={12} country="us" headline="Top Entertainment Headlines" mode={mode} category="entertainment" />} />

          <Route path="/health" exact element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={12} country="us" headline="Top Health Headlines" mode={mode} category="health" />} />

          <Route path="/science" exact element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={12} country="us" headline="Top Science Headlines" mode={mode} category="science" />} />

          <Route path="/sports" exact element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={12} country="us" headline="Top Sports Headlines" mode={mode} category="sports" />} />

          <Route path="/technology" exact element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={12} country="us" headline="Top Technology Headlines" mode={mode} category="technology" />} />

          <Route path="*" element={<div>404 Not Found or Something going wrong CLICK <b>General</b> to Resolve it</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
