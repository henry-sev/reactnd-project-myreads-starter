import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class ListBooks extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    )
  }
}

export default ListBooks;