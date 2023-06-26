import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

import {
  ContactListContainer,
  ContactItem,
} from './ContactList.styled.jsx';

export default function ContactList({
  contacts,
  onRemoveContact,
}) {
  return (
    <ContactListContainer>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <Contact
            name={name}
            number={number}
            onDelete={() => onRemoveContact(id)}
          />
        </ContactItem>
      ))}
    </ContactListContainer>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
