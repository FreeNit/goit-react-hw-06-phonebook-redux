import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import {
  FormWrapper,
  PhonebookForm,
  FormLabel,
  FormInput,
  AddContactBtn,
} from './ContactForm.styled';
import { addContact } from 'redux/actions';

const checkUserAvailability = (contacts, userName) => {
  return contacts.find(contact => contact.name === userName);
};

export const ContactForm = ({ NotificationManager }) => {
  // -> Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // -> Отримуємо список контаків
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const userName = evt.target.elements.name.value;
    // -> Перевіряємо чи ім'я користувача уже є присутнє у списку
    const isUserAvailable = checkUserAvailability(contacts, userName);

    if (isUserAvailable) {
      NotificationManager.warning(`${userName} is already in contacts`);
      return;
    }

    // -> Викликаємо генератор екшену та передаємо ідентифікатор завдання
    // -> Відправляємо результат - екшен перемикання статусу завдання
    dispatch(addContact(evt));
    evt.target.reset();
  };

  return (
    <FormWrapper>
      <PhonebookForm onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            // value={name}
            // onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            // value={number}
            // onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </PhonebookForm>
    </FormWrapper>
  );
};
