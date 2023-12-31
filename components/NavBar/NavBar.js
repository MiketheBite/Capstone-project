import NavHomeIcon from "@/utilities/Icons/NavHomeIcon";
import NavProfileIcon from "@/utilities/Icons/NavProfileIcon";
import NavTeamIcon from "@/utilities/Icons/NavTeamIcon";
import Link from "next/link";
import { useState } from "react";
import {
  NavContainer,
  NavItem,
  NavLinkText,
  Burger,
  NavBurger,
} from "../Layout/Layout.styled";

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  function handleLinkClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
    setOpen(false);
  }

  return (
    <NavBurger>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      {open && (
        <NavContainer open={open}>
          <Link href="/dashboard">
            <NavItem
              isActive={activeIndex === 0}
              onClick={() => handleLinkClick(0)}
            >
              {activeIndex === 0 ? (
                <NavLinkText>Home</NavLinkText>
              ) : (
                <NavHomeIcon />
              )}{" "}
            </NavItem>
          </Link>
          <Link href="/nurses/new-nurse">
            <NavItem
              isActive={activeIndex === 1}
              onClick={() => handleLinkClick(1)}
            >
              {activeIndex === 1 ? (
                <NavLinkText>Add Nurse</NavLinkText>
              ) : (
                <NavProfileIcon />
              )}{" "}
            </NavItem>
          </Link>
          <Link href="/nurseteam">
            <NavItem
              isActive={activeIndex === 2}
              onClick={() => handleLinkClick(2)}
            >
              {activeIndex === 2 ? (
                <NavLinkText>Team</NavLinkText>
              ) : (
                <NavTeamIcon />
              )}{" "}
            </NavItem>
          </Link>
        </NavContainer>
      )}{" "}
    </NavBurger>
  );
}
