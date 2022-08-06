import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default function Characters({ list }) {
  return (
    <Container>
      {list?.map((item) => (
        <Card key={`${item.id}-${item.name}`} {...item} />
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;
