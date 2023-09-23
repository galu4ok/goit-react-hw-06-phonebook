import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Wrapper, Text, SpanText, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <Wrapper>
      <Text>
        {name}:<SpanText>{number}</SpanText>
      </Text>
      <DeleteBtn type="button" onClick={onDelete}>
        Delete
      </DeleteBtn>
    </Wrapper>
  );
};
