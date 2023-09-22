import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'utills/getAPI';
import { GlobalStyle, Container, SubTitle } from './GlobalStyle';
import Loader from './Loader/Loader';

export const App = () => {
  const totalContacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && totalContacts && (
        <SubTitle>
          {totalContacts.length} contacts are in the Phonebook
        </SubTitle>
      )}
      <ContactList />

      <ToastContainer />
      <GlobalStyle />
    </Container>
  );
};
