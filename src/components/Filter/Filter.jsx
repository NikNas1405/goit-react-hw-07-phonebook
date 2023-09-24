import { useDispatch, useSelector } from 'react-redux';

import { TextFilter, InputFilter, ContactFilterDiv } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setFilters } from '../../redux/filters/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  return (
    <ContactFilterDiv>
      <TextFilter> Find contacts by name </TextFilter>
      <InputFilter
        type="text"
        value={filters}
        onChange={evt => dispatch(setFilters(evt.target.value))}
      />
    </ContactFilterDiv>
  );
};
