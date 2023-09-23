import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search name..."
      />
    </div>
  );
};
