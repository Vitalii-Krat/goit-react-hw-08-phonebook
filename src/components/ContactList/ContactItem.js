import { ContactsListBtn, ContactsListItem } from './ContactList.styled';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from '../../redux/contactsAPI';
import PropTypes from 'prop-types';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const ContactItem = ({ contact }) => {
  const { isUninitialized } = useGetContactsQuery();

  const [deleteContact, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  return (
    <ContactsListItem>
      {contact.name}: {contact.number}
      <ContactsListBtn
        disabled={isUninitialized}
        onClick={() => deleteContact(contact.id)}
      >
        {isDeleting ? 'Deleting' : <RiDeleteBack2Fill />}
      </ContactsListBtn>
    </ContactsListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
