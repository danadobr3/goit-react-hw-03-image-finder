import React, { Component } from 'react';

import csssearchbar from './Searchbar.module.css';


class Searchbar extends Component {
  state = {
    inputData: '',
  };
  onChangeInput = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputData);
    this.setState({ inputData: '' });
  };

  render() {
    const { inputData } = this.state.inputData;
    return (
      <header className={csssearchbar.Searchbar}>
        <form className={csssearchbar.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={csssearchbar.SearchForm_button}>
            <span className={csssearchbar.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={csssearchbar.SearchForm_input}
            name="inputData"
            value={inputData}
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
