import React from 'react';

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
        </div>

        <ul className="media-list">
          
        </ul>
      </div>
    )
  }
}

export default SearchApp;