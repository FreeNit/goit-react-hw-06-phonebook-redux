import { useDispatch } from 'react-redux';
import { ListOfContacts, ListItem, ListItemButton } from './ContactList.styled';
import { removeContact } from 'redux/actions';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    : null;

  const dispatch = useDispatch();

  const handleClick = contactID => {
    dispatch(removeContact(contactID));
  };

  return (
    visibleContacts && (
      <div>
        <ListOfContacts>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ListItem key={id}>
                {name}: {number}{' '}
                <ListItemButton
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  Delete
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListOfContacts>
      </div>
    )
  );
};
