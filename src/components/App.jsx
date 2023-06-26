import { useEffect } from 'react';
import { Container } from './Phonebook.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { SectionName } from './Phonebook.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/filterSlice';
import {
  addContact,
  removeContact,
} from 'redux/contactSlice';

const App = () => {
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   if (localStorage.getItem('contactList')) {
  //     return JSON.parse(
  //       localStorage.getItem('contactList'),
  //     );
  //   } else {
  //     return [];
  //   }
  // });

  const filterValue = useSelector(
    state => state.filter.value,
  );
  const contacts = useSelector(
    state => state.contacts.value,
  );

  useEffect(() => {
    contacts &&
      localStorage.setItem(
        'contactList',
        JSON.stringify(contacts),
      );
  }, [contacts]);

  const onSubmit = contact => {
    if (!contacts) {
      toast.success(
        `${contact.name} added to your contact list`,
      );
      dispatch(addContact(contact));
    }
    if (contacts.find(arr => arr.name === contact.name)) {
      toast.error(
        `${contact.name} is already in the contact list`,
      );

      return;
    }
    toast.success(
      `${contact.name} added to your contact list`,
    );
    dispatch(addContact(contact));
  };

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
    toast.success(`Successfully deleted from contact list`);
  };

  const handleChangeFilter = evt => {
    dispatch(update(evt.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filterValue.toLowerCase()),
    );
  };
  return (
    <Container>
      <Toaster />
      <SectionName>Phonebook</SectionName>
      <ContactForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      {contacts && <Filter onChange={handleChangeFilter} />}
      {contacts && (
        <ContactList
          contacts={getFilteredContacts()}
          onRemoveContact={handleRemoveContact}
        />
      )}
    </Container>
  );
};
export default App;
