import React from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

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
    const mergedText = text.replace(/ /g, '+')
    this.setState({
      isLoading: true
    })
    fetch(`https://itunes.apple.com/search?term=${mergedText}&entity=song`)
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
      .catch((err) => {
        console.log(err)
      })
      .then(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center">Tunes Search</h1>
          <p className="lead text-center">Search for a song.</p>
          <div className="container">
            <SearchForm onSearch={this.search} />
            { this.state.isLoading?
              `Loading...`:
              `${this.state.results.length} results found`
            }
          </div>
        </div>

        <div className="container">
          <ul className="media-list">
            {this.state.results.map((item, index) => {
              return <SearchResult key={index} item={item} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchApp;