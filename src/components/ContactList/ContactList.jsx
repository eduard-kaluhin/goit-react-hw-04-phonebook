import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts
        .map(contact => {
          const { id } = contact;
          return (
            <ContactItem
              key={id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
