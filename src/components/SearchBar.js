import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      searchTerm: ''
    }

    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    this.props.searchFor(this.state.searchTerm, 1);
    event.preventDefault();
  }

  handleEnter(event) {
    if(event.keyCode === 13) {
      this.props.searchFor(this.state.searchTerm, 1);
      event.preventDefault();
    }
  }

  render() {
    return (
      <form className="SearchForm">
        <input className="SearchTextInput" placeholder="Find Gifs" 
          type="text" name="searchInput" onKeyPress={this.handleEnter} 
          onChange={this.handleChange} />
        <input className="SearchSubmit" type="submit" 
          onClick={this.handleSubmit} value="Submit" />
      </form>
    );
  }
}

export default SearchBar;