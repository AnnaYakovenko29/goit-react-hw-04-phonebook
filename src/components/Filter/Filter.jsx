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
        onChange={onFilter}
      />
    </label>
  );
};
export default Filter;

Filter.propTypes = { onFilter: PropTypes.func };
