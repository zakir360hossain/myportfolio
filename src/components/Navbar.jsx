import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Container from './Container';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Link to="/">
        John Doe
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


