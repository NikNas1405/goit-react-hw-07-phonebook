import { useDispatch, useSelector } from 'react-redux';
import { CiTrash } from 'react-icons/ci';

import { deleteContact } from 'operations/getAPI.js';
import { selectVisibleContacts } from 'redux/selectors';

import {
  ContactListStyled,
  ContactListItem,
  ContactListItemText,
  ContactListItemButton,
  Wrapper,
} from './ContactList.styled.js';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Wrapper>
      <ContactListStyled>
        {visibleContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id}>
            <ContactListItemText>
              {name}: {phone}
            </ContactListItemText>
            <ContactListItemButton onClick={() => dispatch(deleteContact(id))}>
              <CiTrash />
            </ContactListItemButton>
          </ContactListItem>
        ))}
      </ContactListStyled>
    </Wrapper>
  );
};
