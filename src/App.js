// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Mode: 'light', // State to track light/dark mode
    };
  }

  // Method to apply background color to the body based on the mode
  applyBodyBackground = (mode) => {
    document.body.style.backgroundColor = mode === 'light' ? '#ffffff' : '#212529'; // Light: white, Dark: dark gray
    document.body.style.color = mode === 'light' ? 'black' : 'white'; // Adjust text color for readability
  };

  toggleMode = () => {
    const newMode = this.state.Mode === 'light' ? 'dark' : 'light';
    this.setState({ Mode: newMode }, () => {
      this.applyBodyBackground(newMode); // Apply background after state update
    });
  };

  componentDidMount() {
    // Set the initial background color when the app loads
    this.applyBodyBackground(this.state.Mode);
  }

  render() {
    return (
      <Router>
        <NavBar Mode={this.state.Mode} toggleMode={this.toggleMode} />
          <LoadingBar 
          color ="#f111946"
          progress={10}/>
          
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <News
                  key="general"
                  pageSize={12}
                  country="us"
                  headline="Top General Headlines"
                  Mode={this.state.Mode}
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              exact
              element={
                <News
                  key="business"
                  pageSize={12}
                  country="us"
                  headline="Top Business Headlines"
                  Mode={this.state.Mode}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              exact
              element={
                <News
                  key="entertainment"
                  pageSize={12}
                  country="us"
                  headline="Top Entertainment Headlines"
                  Mode={this.state.Mode}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              exact
              element={
                <News
                  key="health"
                  pageSize={12}
                  country="us"
                  headline="Top Health Headlines"
                  Mode={this.state.Mode}
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              exact
              element={
                <News
                  key="science"
                  pageSize={12}
                  country="us"
                  headline="Top Science Headlines"
                  Mode={this.state.Mode}
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              exact
              element={
                <News
                  key="sports"
                  pageSize={12}
                  country="us"
                  headline="Top Sports Headlines"
                  Mode={this.state.Mode}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              exact
              element={
                <News
                  key="technology"
                  pageSize={12}
                  country="us"
                  headline="Top Technology Headlines"
                  Mode={this.state.Mode}
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
