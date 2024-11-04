import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API;

  // Set the background color based on mode
  useEffect(() => {
    applyBodyBackground(mode);
  }, [mode]);

  const applyBodyBackground = (mode) => {
    document.body.style.backgroundColor = mode === 'light' ? '#ffffff' : '#212529';
    document.body.style.color = mode === 'light' ? 'black' : 'white';
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <LoadingBar color="#f11946" progress={progress} />
      
      <div className="container my-3" style={{ display: 'flex' }}>
        <Routes>
          <Route
            path="/"
            exact
            element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={12} country="us" headline="HDC - Top General Headlines" mode={mode} category="general" />}
          />
          <Route
            path="/business"
            element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={12} country="us" headline="HDC - Top Business Headlines" mode={mode} category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={12} country="us" headline="HDC - Top Entertainment Headlines" mode={mode} category="entertainment" />}
          />
          <Route
            path="/health"
            element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={12} country="us" headline="HDC - Top Health Headlines" mode={mode} category="health" />}
          />
          <Route
            path="/science"
            element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={12} country="us" headline="HDC - Top Science Headlines" mode={mode} category="science" />}
          />
          <Route
            path="/sports"
            element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={12} country="us" headline="HDC - Top Sports Headlines" mode={mode} category="sports" />}
          />
          <Route
            path="/technology"
            element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={12} country="us" headline="HDC - Top Technology Headlines" mode={mode} category="technology" />}
          />
          <Route
            path="*"
            element={<div style={{ paddingTop: '40px', textAlign: 'center' }}>404 Not Found. Please click <b>General</b> for the main news page.</div>}
          />
        </Routes>
      </div>

      {/* Footer at the bottom of the page */}
      <Footer />
    </Router>
  );
};

export default App;
