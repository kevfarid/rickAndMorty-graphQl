import React from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import Status from './Status';

export default function Card({ image, name, status, origin, species }) {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Body>
        <Status status={status}>{status}</Status>
        <Brand type="warning">{species}</Brand>
        <Name>{name}</Name>
        <Origin>Origin: {origin.name}</Origin>
      </Body>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 300px;
  background-color: ${(props) => props.theme.colors.neutral.grey2};
  border-radius: 0.5rem;
`;

const Body = styled.div`
  padding: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const Name = styled.h2`
  margin: 0;
  margin-top: 0.75rem;
`;

const Origin = styled.p`
  margin: 0;
`;
