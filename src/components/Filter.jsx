import PropTypes from 'prop-types';
import { FilterContainer } from './Phonebook.styled';
import { useSelector } from 'react-redux';

export default function Filter({ onChange }) {
  const filterValue = useSelector(
    state => state.filter.value,
  );
  return (
    <FilterContainer>
      Find contact by name
      <input
        // value={filterValue}
        onChange={onChange}
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
