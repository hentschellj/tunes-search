import React from 'react';

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <li className="media">
          <a href={props.item.trackViewUrl} target="_blank">
            <div className="media-left">
              <img src={props.item.artworkUrl60} />
            </div>

            <div className="media-body">
              <h4 className="media-heading">{props.item.trackName}</h4>
              <em>{props.item.artistName}</em>
              <span className="badge pullRight">{props.item.currency} {props.item.trackPrice}</span>
            </div>
          </a>
        </li>
      </div>
    )
  }
}

export default SearchResult;