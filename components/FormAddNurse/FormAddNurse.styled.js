import styled from "styled-components";

export const HeaderStyled = styled.h1`
  text-align: center;
`;

export const FormContainer = styled.form`
  background-color: #fcfafb;
  max-width: 400px;
  padding: 40px 60px;
  border-radius: 10px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 4px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CancelButtonStyled = styled.button`
  background-color: #fcbc7f;
  color: #000;
  padding: 0.8rem 1.2rem;
  margin-top: 15px;
  margin-bottom: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ef8059;
  }
`;

export const AddButtonStyled = styled.button`
  background-color: #4aeca9;
  color: #000;
  padding: 0.8rem 1.2rem;
  margin-top: 15px;
  margin-bottom: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #8cfc9d;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 80px;
`;
