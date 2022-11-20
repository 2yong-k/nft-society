import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../../common/Container';
import Hero from './components/Hero';
import useReload from '../hooks/useReload';

function Home() {
  const theme = useTheme();
  useReload();

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
