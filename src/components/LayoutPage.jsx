import React from 'react';
import styled from 'styled-components';

export default function LayoutPage({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

const Container = styled.section`
  padding: 0 10%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin: 2rem 0;
`;
