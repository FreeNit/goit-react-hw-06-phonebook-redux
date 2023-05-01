const localContacts = localStorage.getItem('contacts');

const initialState = {
  contacts: localContacts ? JSON.parse(localContacts) : [],
  filter: '',
};

// -> Add contact to Local Storage
const updateAddToLocalStorage = contact => {
  const localContacts = JSON.parse(localStorage.getItem('contacts'));
  if (localContacts) {
    const newContacts = [...localContacts, contact];
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  } else {
    const newContacts = [contact];
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      updateAddToLocalStorage(action.payload);
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/removeContact':
      const contactsWithDeletedItem = state.contacts.filter(
        task => task.id !== action.payload.id
      );

      localStorage.removeItem('contacts');
      localStorage.setItem('contacts', JSON.stringify(contactsWithDeletedItem));

      return {
        ...state,
        contacts: contactsWithDeletedItem,
      };

    case 'filter/newFilter':
      return {
        ...state,
        filter: action.payload.filter,
      };

    default:
      return state;
  }
};
