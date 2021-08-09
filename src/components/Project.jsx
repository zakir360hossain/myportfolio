import React, { useContext } from 'react';
import styled from "styled-components";
import Container from './Container';

const Project = () => {
  let cards = [1, 2, 4, 4, 5, 6, 6]
  let colors = ["#05526F", "#128DE5", "#A7026A", "#FEC11F", "#FA8404", '#2CA82B'];
  const renderCard = (card, _)=>{
    return (
        <Article colors={colors} className="article">
          <h3 className="category">Code</h3>
          <h2 className="title">Title of the project</h2>
          <p className="excerpt">a little detail would be nice</p>
        </Article>
    );
  }
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {cards.map(renderCard)}
      </Grid>
    </Wrapper>
  );
};

export default Project;

export const Wrapper = styled.div`
  padding: 2rem 0;
`;



export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Article = styled.div`
    background: #e7eaf1;
    margin: 0 0 20px;
    width: 15vw;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(#000, 0.2);
    cursor: pointer;
    transition: 0.3s ease;

  .article:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(white, 0.2), 0 4px 8px rgba(white, 0.2);
  }

  .article:active {
    box-shadow: none;
    transform-origin: center;
    transform: scale(0.98);
  }
  .category {
    display: inline-block;
    background: ${props => props.colors[Math.floor(Math.random() * props.colors.length)]};
    padding: 8px 10px;
    margin: 0 0 10px;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.075rem;
    text-transform: uppercase;
  }
  .excerpt {
    color: #666;
    line-height: 1.5rem;
    font-size: 0.875rem;
  }
  .title {
    margin: 0 0 10px;
    color: #444;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.75rem;
  }
`;

