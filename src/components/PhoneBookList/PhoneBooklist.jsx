import PhoneBookListItem from '../PhoneBookListItem/PhoneBookListItem';
import PropTypes from 'prop-types';
import { List } from './PhoneBookList.styles';

const PhoneBookList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhoneBookListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};

PhoneBookList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

export default PhoneBookList;
