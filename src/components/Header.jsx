import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <span>Rick And Morty</span>
      <Nav>
        <Link href='/#'>Characters</Link>
      </Nav>
    </Container>
  );
}

const Container = styled.header(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: '#fff',
  padding: '1rem 0.5rem',
  display: 'flex',
  justifyContent: 'space-between',
}));

const Link = styled.a(() => {});

const Nav = styled.nav(() => {});
