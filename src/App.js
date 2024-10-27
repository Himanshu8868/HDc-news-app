import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  
 apikey=process.env.REACT_APP_NEWS_API
 


  constructor() {
    super();
    this.state = {
      Mode: 'light', // State to track light/dark mode
      progress: 0,   // Initial progress state
    };
  }

  applyBodyBackground = (mode) => {
    document.body.style.backgroundColor = mode === 'light' ? '#ffffff' : '#212529';
    document.body.style.color = mode === 'light' ? 'black' : 'white';
  };

  toggleMode = () => {
    const newMode = this.state.Mode === 'light' ? 'dark' : 'light';
    this.setState({ Mode: newMode }, () => {
      this.applyBodyBackground(newMode);
    });
  };

  componentDidMount() {
    console.log("API Key:", this.apikey); // Debug: Check API key
    this.applyBodyBackground(this.state.Mode);
  }

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <Router>
        <NavBar Mode={this.state.Mode} toggleMode={this.toggleMode} />
        <LoadingBar color='#f11946' progress={this.state.progress} />

        <div className="container my-3">
          <Routes>
            <Route path="/" exact element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={12} country="us" headline="Top General Headlines" Mode={this.state.Mode} category="general" />} />

            <Route path="/business" exact element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={12} country="us" headline="Top Business Headlines" Mode={this.state.Mode} category="business" />} />

            <Route path="/entertainment" exact element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={12} country="us" headline="Top Entertainment Headlines" Mode={this.state.Mode} category="entertainment" />} />

            <Route path="/health" exact element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={12} country="us" headline="Top Health Headlines" Mode={this.state.Mode} category="health" />} />

            <Route path="/science" exact element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={12} country="us" headline="Top Science Headlines" Mode={this.state.Mode} category="science" />} />

            <Route path="/sports" exact element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={12} country="us" headline="Top Sports Headlines" Mode={this.state.Mode} category="sports" />} />
            
            <Route path="/technology" exact element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={12} country="us" headline="Top Technology Headlines" Mode={this.state.Mode} category="technology" />} />
            <Route path="*" element={<div>404 Not Found or Click <b>Home tab</b> to Resolve it</div>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
