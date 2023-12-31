import styled, { keyframes } from "styled-components";
import Image from "next/image";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const NavBurger = styled.nav`
  position: fixed;
  bottom: 10px;
  left: 40%;
  transform: translateX(-40%);

  @media (max-width: 768px) {
    left: 2%;
    transform: translateX(-10%);
  }
`;

export const Burger = styled.button`
  position: fixed;
  bottom: 10px;
  left: 2%;
  width: 3.5rem;
  height: 3.5rem;
  z-index: 1001;
  align-items: center;
  background-color: #70d2a9;
  border: 5px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const NavContainer = styled.div`
  position: fixed;
  bottom: 12px;
  left: ${({ open }) => (open ? "20px" : "-300px")};
  background-color: #70d2a9;
  border-radius: 18px;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 315px;
  height: 50px;
  padding: 10px;
  align-items: center;
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-in-out forwards;
  margin-left: 10px;
`;

export const NavItem = styled.div`
  display: flex;
  color: white;
  margin-left: 20px;
  width: 50px;
`;

export const NavLinkText = styled.span`
  display: inline;
  color: white;
  font-size: 12px;
  background: rgba(250, 255, 0, 0.29)
  text-align: center;
  text-decoration-line: none;  
`;

export const ProfileImage = styled(Image)`
  border-radius: 99.5px;
  border: 2px solid white;
`;
export const ProfileContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 55px;
  background: #fafafc;
  z-index: 1000;
`;

export const WelcomeName = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const Welcome = styled.p`
  color: #838aa3;
  margin-left: 5px;
`;

export const ProfileName = styled.p`
  color: #414247;
`;
export const SVGSeach = styled.svg`
  width: 18.735px;
  height: 18.667px;
  cursor: pointer;
`;

export const LogOutButton = styled.button`
  background-color: #fafafc;
  border: 1px solid #f0f0f0;
  border-radius: 100%;
  cursor: pointer;
`;

export const NurseNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fafafc;
  border: 3px solid white;
`;

export const NurseImage = styled(Image)`
  border-radius: 50%;
  margin-right: 10px;
`;

export const NurseName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
