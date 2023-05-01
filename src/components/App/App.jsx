import { useSelector } from 'react-redux';

import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { TitleMain, TitleContacts } from './App.styled';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <TitleMain>Phonebook</TitleMain>
        <ContactForm NotificationManager={NotificationManager} />
      </div>
      {contacts.length > 0 && (
        <div>
          <TitleContacts>Contacts</TitleContacts>
          <Filter />
          <ContactList />
        </div>
      )}

      <NotificationContainer />
      <GlobalStyle />
    </div>
  );
};
