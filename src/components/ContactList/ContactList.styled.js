import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  /* display: flex;
  flex-direction: column;
  gap: 4px; */
  margin-top: 20px;
  /* align-items: center; */
  color: #fff;
  font-weight: 500;
  font-size: 18px;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #cdf7d6;
  color: #008080;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactListItemText = styled.span`
  color: #008080;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  margin: 0;
`;

export const ContactListItemButton = styled.button`
  /* text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  width: 100px;
  cursor: pointer;
  color: #008080;
  background-color: #cdf7d6;
  border: none; */

  margin-left: 30px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  transition: transform 250ms ease;

  &:is(:focus, :hover) {
    /* color: #1c1694;
    background-color: #5cff7c; */
    transform: scale(1.1);
  }
`;
