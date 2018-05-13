import React, { PureComponent } from 'react';

class SearchForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this._submit = this._submit.bind(this);
    this._input = this._input.bind(this);
  }
  _input(e) {
    this.setState({ query: e.target.value });
  }
  _submit(e) {
    e.preventDefault();
    this.props.setWeather(this.state.query);
  }
  render() {
    return (

        <form className="search" onSubmit={this._submit}>
          <input placeholder="search for another location here" type="search" id="query" onInput={this._input} />
          <button>Go</button>
        </form>
     
    );
  }
}

export default SearchForm;
