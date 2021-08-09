import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";

const NavbarLinks = () => {

  return (
    <Wrapper>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      
    </Wrapper>
  )

};

export default NavbarLinks;

export const Wrapper = styled.div`
  a {
    color: #000;
    margin: 5px;
    text-decoration: none;
  }
`;

