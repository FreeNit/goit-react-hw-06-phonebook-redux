import { nanoid } from 'nanoid';

export const addContact = evt => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    },
  };
};

export const removeContact = contactID => {
  return {
    type: 'contacts/removeContact',
    payload: { id: contactID },
  };
};

export const setNewFilterValue = evt => {
  return {
    type: 'filter/newFilter',
    payload: { filter: evt.target.value },
  };
};
