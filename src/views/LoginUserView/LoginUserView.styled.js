import styled from 'styled-components';

export const FormUserViewStyled = styled.form`
  max-width: 620;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LabelUserViewStyled = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputUserViewStyled = styled.input`
  display: block;
  padding: 5px;
  border: 2px solid blue;
  border-radius: 6px;
  width: 100%;
`;

export const LoginBtn = styled.button`
  font-weight: 500;
  font-size: 40;
  text-align: center;
  margin-bottom: 25px;
  padding: 5px;
  background-color: yellow;
  transform: scale(1);
  transition: transform 250ms linear;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transform: scale(1.09);
    cursor: pointer;
  }
`;
