import styled from 'styled-components';

export const ContactFilterDiv = styled.div`
  text-align: center;
`;

export const TextFilter = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #008080;
  margin: 0;
`;

export const InputFilter = styled.input`
  /* border-radius: 5px;
  padding: 4px 8px; */

  display: block;
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    border: 2px solid #008080;
  }

  &:focus {
    border: 2px solid #008080;
    outline: none;
    color: #008080;
  }
`;
