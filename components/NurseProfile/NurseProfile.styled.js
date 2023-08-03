import styled from "styled-components";
import Link from "next/link";

export const StyledNurseProfil = styled.div`
  display: grid;
  grid-template-columns: 4.8rem 1fr auto;
  align-items: center;
  column-gap: 1.6rem;
  padding: 1.2rem;
  border-radius: 7px;
  background-color: #fafafc;
  transition: 0.5s;

  &:hover {
    background-color: #fff4e6;
  }

  img {
    border-radius: 50%;
    width: 100%;
  }
`;

export const DeleteButtonStyled = styled(Link)`
background-color: #fafafc;
color: #000;
padding: 0.8rem 1.2rem;
margin: 5px 15px 5px 30px;
width: 100px;
border: none;
border-radius: 5px;
text-decoration:none;
cursor: pointer;
transition: 0.3s;
align-items: center;
justify-content:center;
  &:hover {
    background-color: #EF8059;
  }
}
`;

export const GoBackLinkStyled = styled(Link)`
background-color: #fafafc;
color: #000;
padding: 0.6rem 1.2rem;
margin: 5px 15px 5px 30px;
width: 100px;
border: none;
text-decoration:none;
border-radius: 5px;
cursor: pointer;
transition: 0.3s;
align-items: center;
justify-content:center;
  &:hover {
    background-color: #6FC6FF;
  }
}`;

export const UpdateButtonStyled = styled(Link)`
background-color: #fafafc;
color: #000;
padding: 0.8rem 1.2rem;
margin: 5px 15px 5px 30px;
width: 100px;
border: none;
border-radius: 5px;
cursor: pointer;
transition: 0.3s;
text-decoration:none;
align-items: center;
justify-content:center;
  &:hover {
    background-color: #48e68b;
  }
}`;