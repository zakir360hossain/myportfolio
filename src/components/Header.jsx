import React, { useState } from 'react';
import Navbar from './Navbar';

import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`;

