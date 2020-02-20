import React from 'react';
import SearchForm from './SearchForm';

class SearchApp extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      results: []
    }

    this.search = this.search.bind(this)
  }

  search(text) {
    fetch(`https://itunes.apple.com/search?term=${text}&entity=song`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then((json) => {
        console.log(json)
        this.setState({
          results: json.results
        })
      })
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