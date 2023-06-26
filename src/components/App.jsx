import { Container, SectionName } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterValue,
  updateFilter,
} from 'redux/filterSlice';
import {
  addContact,
  getContacts,
  removeContact,
} from 'redux/contactSlice';

const App = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

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
    dispatch(updateFilter(evt.target.value));
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
