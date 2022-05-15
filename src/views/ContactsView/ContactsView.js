import { Container } from './ContactsView.styled';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/ContactFilter';
import ContactList from '../../components/ContactList';
import { useState } from 'react';

export default function ContactsView() {
  const [filter, setFilter] = useState('');
  const handlerFilterName = e => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handlerFilterName} />
      <ContactList filter={filter} />
    </Container>
  );
}
