import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchBooks extends Component {
  state = {
    query: '',
    searchResultBooks: [],
  }

  handleUpdateInput = (value) => {
    this.setState({query: value.trim()});
    BooksAPI.search(value.trim())
      .then(books => {
        if(Array.isArray(books)) {
          this.setState({searchResultBooks: books});
        } else {
          this.setState({searchResultBooks: []});
        }
      })
  }    

  render() {
    return (
      <div className="search-books">
        <SearchBar 
          query={this.state.query} 
          onUpdateInput={this.handleUpdateInput} 
        />
        <SearchResults 
          books={this.state.searchResultBooks}
          onUpdateShelf={this.props.onUpdateShelf}
        />
      </div>
    )
  }
}

export default SearchBooks;