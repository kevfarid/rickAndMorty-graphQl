import React from 'react';
import styled from 'styled-components';

const Brand = styled.span(({ theme, type }) => ({
  padding: '0.25rem 0.5rem',
  borderRadius: '1rem',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  margin: '0 0.2rem',
  backgroundColor: theme.colors.alerts[type],
}));

export default Brand;
