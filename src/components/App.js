import React, { Component } from 'react';
import './App.css';

import {performSearch, performTrending} from '../clients/giphyClient';

import SearchBar from './SearchBar';
import ViewGrid from './ViewGrid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trendingGifs: undefined,
      recentSearches:  [1,2,3,4,5],
      searchResults: undefined,
    };
  }

  componentDidMount() {
    this.loadTrendingGifs();    
  }

  componentWillReceiveProps() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs()
  {
    const mySelf = this;
    performTrending(function(results) {
      mySelf.setState({trendingGifs: results});
    });
  }

  loadSearchedGifs(searchTerm, pageNumber)
  {
    const mySelf = this;
    performSearch(searchTerm, pageNumber, function(results) {
      mySelf.setState({searchResults: results});
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Trending">
            <p>Top 25 - Trending</p>
            <ViewGrid value={this.state.trendingGifs} />
          </div>
        </div>
        <div id="searchContainer">
          <div className="App-RecentSearches">
            <ul>
              {this.state.recentSearches.map((recentItem) => <li key={recentItem.toString()}>{recentItem}</li>)}
            </ul>
          </div>
          <div className="App-SearchView">
            <div className="App-SearchBar">
              <SearchBar />
            </div>
            <div className="App-SearchResults">
              <ViewGrid value={this.state.searchResults} />
            </div>
            {/* <div> Paginate Component </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
