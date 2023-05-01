import { FilterWrapper, SubHeader, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setNewFilterValue } from 'redux/actions';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filterVal = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setNewFilterValue(evt));
  };

  return (
    <FilterWrapper>
      <SubHeader>Find contacts by name</SubHeader>
      <FilterInput
        type="text"
        name="filter"
        value={filterVal}
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FilterWrapper>
  );
};
