import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';

import { selectVisibleContacts } from 'redux/selectors';

import {
  ContactListStyled,
  ContactListItem,
  ContactListItemText,
  ContactListItemButton,
} from './ContactList.styled.js';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactListStyled>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListItemText>
            {name}: {number}
          </ContactListItemText>
          <ContactListItemButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactListItemButton>
        </ContactListItem>
      ))}
    </ContactListStyled>
  );
};
