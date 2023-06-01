import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

