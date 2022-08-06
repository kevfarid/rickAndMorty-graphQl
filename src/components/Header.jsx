import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export default function Header() {
  return (
    <Container>
      <span>Rick And Morty</span>
      <Nav>
        <Link to="/">Characters</Link>
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

const Link = styled(LinkRouter)(() => ({
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Nav = styled.nav(() => {});
