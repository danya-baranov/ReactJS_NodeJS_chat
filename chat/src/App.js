import React, { Component } from 'react';
import { Auth } from 'pages'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Auth />
      </Router>
    );
  }
}

export default App;
