import React, {Component} from 'react';

class Book extends Component {
  handleUpdateShelf = (e) => {
    this.props.onUpdateShelf(this.props.book, e.target.value);
  }

  render() {
    const {book} = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {
              book.imageLinks 
              ? (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>)
              : (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '' }}>No Content</div>)
            }
            
            <div className="book-shelf-changer">
              <select onChange={this.handleUpdateShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {
              book.authors ? book.authors.map(author => (
                <div key={author}>{author}</div>
              )) : ''
            }
          </div>
        </div>
      </li>
    )
  }
}

export default Book;