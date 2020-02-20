import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }

    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="input-group input-group-lg">
          <input className="form-control" type="text" onChange={this.updateText} value={this.state.text} />
          <span className="input-group-btn">
            <input className="btn btn-default" type="button" value="Search" />
          </span>
        </form>
      </div>
    )
  }
}

export default SearchForm;