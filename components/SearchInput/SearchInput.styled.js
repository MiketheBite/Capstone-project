import styled from "styled-components";

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchInputStyled = styled.input`
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #d0cfce;
  outline: none;

  &:focus {
    border: 1px solid #008abf;
    transition: 0.35s ease;
    color: grey;

    &::placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
`;
export const FilterSelect = styled.select`
  width: 30%;
  border: 1px solid #d0cfce;
  border-radius: 5px;
`;
