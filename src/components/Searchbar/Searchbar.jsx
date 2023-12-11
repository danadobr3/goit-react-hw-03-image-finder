import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import csssearchbar from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [inputData, setInputData] = useState('');

  const onChangeInput = e => {
    setInputData(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputData);
    setInputData('');
  };

  return (
    <header className={csssearchbar.Searchbar}>
      <form className={csssearchbar.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={csssearchbar.SearchForm_button}>
          <Icon icon="mdi:magnify" width="28" height="28" />
          <span className={csssearchbar.SearchForm_button_label}>Search</span>
        </button>
        <input
          className={csssearchbar.SearchForm_input}
          name="inputData"
          value={inputData}
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
