import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

import { useGetContactsQuery } from '../../redux/contactsAPI';
import authSelectors from 'redux/authUser/authUserSelector';
import { useSelector } from 'react-redux';

const ContactList = ({ filter }) => {
  const {
    data: contacts,
    isFetching,
    refetch,
    isError,
  } = useGetContactsQuery();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const showContacts =
    contacts && !isFetching && !isError && isLoggedIn && refetch;

  function filterVisibleContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <>
      {showContacts && (
        <ul>
          {filterVisibleContacts().map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};
