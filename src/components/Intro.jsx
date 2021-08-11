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
        <Details>
          <h1>Hi There!</h1>
          <h2>
            I’m Zakir and I’m a software <br />
            and web developer and forseeable data scientist!
          </h2>
          <h3>Please welcome to contact me if I could be at your service</h3>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I am Zakir and I am a developer!" />
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
  }

  h4 {
    margin-bottom: 2.5rem;
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
