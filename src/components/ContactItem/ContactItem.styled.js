import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  /* gap: 20px; */
  align-items: center;
`;

export const Text = styled.p`
  color: #444444;
  text-align: center;
  padding: 5px;
`;

export const SpanText = styled.span`
  font-weight: 500;
  padding-left: 15px;
`;
export const DeleteBtn = styled.button`
  position: absolute;
  font-size: 14px;
  border: none;
  outline: none;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-left: 380px;
  width: 60px;

  &:hover {
    background-color: teal;
    outline: teal;
    color: #ffffff;
  }
`;
