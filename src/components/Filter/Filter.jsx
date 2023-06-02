import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => onFilter(e.target.value)}
      />
    </label>
  );
};

Filter.propTypes = { onFilter: PropTypes.func };
