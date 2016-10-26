import React, { Component } from 'react'

var typingTimer;

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };

  }

  onInputChange(e) {
    this.setState({term: e.target.value});

    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      this.props.onSearchTermChange(this.state.term)
    }, 1000)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
          />
      </div>
    );
  }
}
