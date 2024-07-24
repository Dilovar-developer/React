import React from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container } from 'react-bootstrap';

const HomePage = ({ content }) => {
  return (
    <Container className="">
      <CarouselBox />
      <h1>{content.header}</h1>
      <p>{content.text}</p>
    </Container>
  );
};

export default HomePage;
