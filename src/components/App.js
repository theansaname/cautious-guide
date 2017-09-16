import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Giphy from '../clients/giphyClient';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Trending">
          </div>
        </div>
        <div className="App-RecentSearches">
        </div>
        <div className="App-SearchResults">
          
        </div>
      </div>
    );
  }
}

export default App;
