import styled from 'styled-components';

export const FormHomePageStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400;
  height: auto;
  align-items: center;
  margin-bottom: 15px;
`;

export const LabelHomePageStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15;
  width: 450;
`;
export const InputHomePageStyled = styled.input`
  display: block;
  padding: 5px;
  border: 2px solid black;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 15;
`;

export const SignBtn = styled.button`
  font-weight: 500;
  font-size: 40;
  text-align: center;
  margin-bottom: 25px;
  border-radius: 10px;
  color: black;
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
