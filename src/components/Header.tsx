import React from 'react';
import { Box, Typography, Button, styled, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material';
import backGround from '../images/background/bg-11.jpg';
import Centered from './Centered';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh', 
  padding: theme.spacing(3),
//   backgroundImage: backGround,
  backgroundColor: theme.palette.info.main, 
}));

const Heading = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2rem', 
  color: '#FFFFFF', 
  textAlign: 'center',
  marginBottom: '0.5rem',
});

const Subtitle = styled(Typography)({
  color: '#FFFFFF', 
  marginBottom: '2rem', 
});

const DonateButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
  },
}));

const ArrowButton = styled(Button)({
  minWidth: 'auto',
  padding: 0,
  '& svg': {
    fontSize: '2.5rem', 
    color: '#FFFFFF', 
  },
});

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <center> 
        <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.primary.main }}>
          HELPING HANDS FOUNDATION
        </Typography>
        </center>
        <Heading variant="h1">
          SPONSOR A CHILD
        </Heading>
        <Subtitle>
          How can I help support a child to join high school? <br/> <center> Start here. </center>
        </Subtitle>
        <center>
        <DonateButton variant="outlined" size="large">
          DONATE NOW
        </DonateButton>
        </center>
      </Box>
      <ArrowButton aria-label="next">
        {/* <ArrowForwardIosNewIcon /> */}
      </ArrowButton>
    </Container>
  );
};

export default Header;
