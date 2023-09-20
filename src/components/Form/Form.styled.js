import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px; */
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  /* padding: 4px;
  width: 300px; */
  display: block;
  margin: 0 auto 8px;
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;

export const Label = styled.label`
  /* font-weight: 600;
  font-size: 24px;
  color: #008080;
  margin: 12px 4px; */
  display: block;
  color: #008080;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
`;

export const StyledFormButton = styled.button`
  /* text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  width: 100px;
  cursor: pointer;
  color: #008080;
  background-color: #cdf7d6; */

  padding: 10px 20px;
  background-color: #008080;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms ease;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:is(:focus, :hover) {
    /* color: #1c1694;
    background-color: #5cff7c; */

    opacity: 1;
  }
`;
