import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <h1>React App</h1>
    </Container>
  );
}

const Container = styled.header(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: '#fff',
}));
