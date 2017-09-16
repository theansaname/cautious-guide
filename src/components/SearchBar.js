import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        <form id='SearchForm'>
            <input type='text' />
            <input type='submit' />
        </form>
    );
  }
}

export default SearchBar;