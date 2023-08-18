import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <Item>
      <span>{name}</span>
      <span> {number}</span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};