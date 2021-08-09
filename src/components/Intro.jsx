import React, { useContext } from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";
import overlayIllustration from "../assets/illustrations/overlay.svg";
import {Button} from 'react-bootstrap'

import  Header from './Header';
import Container  from "./Container";
import dev from '../assets/illustrations/dev.svg';

const Intro = () => {
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details >
          <h1>Hi There!</h1>
          <h4>I’m John and I’m a JAMStack engineer!</h4>
          <Button>
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
export default Intro;

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
