import React from 'react';
import SearchForm from './SearchForm';

class SearchApp extends React.Component {
  constructor() {
    super();

    this.search = this.search.bind(this)
  }

  search(text) {
    console.log(text)
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center">Tunes Search</h1>
          <p className="lead text-center">Search for a song.</p>
          <SearchForm onSearch={this.search} />
        </div>

        <ul className="media-list">
          
        </ul>
      </div>
    )
  }
}

export default SearchApp;