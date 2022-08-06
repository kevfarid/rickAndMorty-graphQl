import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import Brand from './Brand';

const colors = {
  alive: 'success',
  dead: 'error',
  unknown: 'unknown',
};

const Status = styled(Brand)(({ status, theme }) => ({
  backgroundColor: theme.colors.alerts[colors[status.toLowerCase()]],
}));

export default Status;
