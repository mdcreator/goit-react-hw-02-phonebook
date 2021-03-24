import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.contact} key={id}>
              <p>
                {name} : {number}
              </p>
              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
