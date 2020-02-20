import React from 'react';
import SearchForm from './SearchForm';

class SearchApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center">Tunes Search</h1>
          <p className="lead text-center">Search for a song.</p>
          <SearchForm />
        </div>

        <ul className="media-list">
          
        </ul>
      </div>
    )
  }
}

export default SearchApp;