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
      recentSearches: [],
      searchResults: undefined,
    };

    this.replaySearch = this.replaySearch.bind(this);
    this.loadSearchedGifs = this.loadSearchedGifs.bind(this);
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

  addTermToRecentSearches(searchTerm) {
    let updateRecentSearches = this.state.recentSearches.slice();
    if (updateRecentSearches.indexOf(searchTerm) === -1) {
      updateRecentSearches.push(searchTerm);
      this.setState({
        recentSearches: updateRecentSearches
      });  
    }
  }

  loadSearchedGifs(searchTerm, pageNumber)
  {
    this.addTermToRecentSearches(searchTerm);
    
    const mySelf = this;
    performSearch(searchTerm, pageNumber, function(results) {
      mySelf.setState({searchResults: results});
    })
  }

  replaySearch(item) {
    this.loadSearchedGifs(item, 1);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Top 25 - Trending</p>
          <div className="App-Trending">
            <ViewGrid value={this.state.trendingGifs} />
          </div>
        </div>
        <div id="searchContainer" className="App-SearchContainer">
          <div className="App-RecentSearches">
            <p>Recently Searched</p>
            <ul>
              {this.state.recentSearches.map((recentItem) => 
                <li 
                  key={recentItem.toString()}
                  onClick={this.replaySearch.bind(this, recentItem)}
                >{recentItem}
                </li>
              )} 
            </ul>
          </div>
          <div className="App-SearchView">
            <div className="App-SearchBar">
              <SearchBar searchFor={this.loadSearchedGifs} />
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
