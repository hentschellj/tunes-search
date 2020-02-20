import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form className="input-group input-group-lg">
          <input type="text" className="form-control" />
          <span className="input-group-btn">
            <input className="btn btn-default" type="button" value="Search" />
          </span>
        </form>
      </div>
    )
  }
}

export default SearchForm;