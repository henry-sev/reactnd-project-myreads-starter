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
        console.log('query:' + value);
        this.setState({searchResultBooks: books});
        console.log(books);
      })
  }    

  render() {
    return (
      <div className="search-books">
        <SearchBar 
          query={this.state.query} 
          onUpdateInput={this.handleUpdateInput} 
          onSearchBooks={this.searchBooks}
        />
        <SearchResults books={this.state.searchResultBooks} />
      </div>
    )
  }
}

export default SearchBooks;