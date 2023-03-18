import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Section from 'components/Section';
import Form from 'components/Form';
import Filter from 'components/Filter';
import List from 'components/List';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

import css from './app.module.scss';

export function Home() {
  const filteredContacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isBooks = Boolean(filteredContacts.length);

  return (
    <div className={css.div}>
      <Section title="Phonebook">
        <Form onSubmit={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        {isBooks ? (
          <List
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        ) : (
          <p className={css.message}>There are no contacts in the phonebook.</p>
        )}
      </Section>
    </div>
  );
}
