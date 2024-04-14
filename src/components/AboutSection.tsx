import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import causeImage from '../images/resource/cause-7.jpg';
import styled from '@mui/material/styles/styled';
  
  const LinkButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    marginTop: '25px',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }));
  
const AboutSection = () => {
  return (
    <Paper sx={{
        position: 'relative',
        paddingY: '40px',
        paddingX: '0',
        marginBottom: '80px'
    }}  elevation={0}>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', marginBottom: '30px' }}>
                        <Typography variant="h1" sx={{
                            position: 'relative',
                            marginBottom: '25px',
                            fontSize: '36px',
                            fontFamily: 'Prata, serif',
                            lineHeight: '50px',
                        }}>
                            Be part of a change you want to see in the world
                        </Typography>
                        <Typography variant="h4" sx={{
                            fontSize: '18px',
                            color: '#18BEC2', // Replace with the --theme-color variable's value
                            lineHeight: '28px',
                            marginBottom: '20px',
                        }}>
                            “Generosity consists not of the sum given, but the manner in which it is bestowed.”
                        </Typography>
                        <Typography paragraph sx={{ position: 'relative'  }}>
                            Driven by the high entry costs of joining high school, we at helping hands are helping change the education situation in Kenya.
                        </Typography>
                        <Box sx={{ '.link-btn': { position: 'relative'} }}>
                            
                            <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="start">
                                    <LinkButton variant="contained" endIcon={<ArrowForwardIos />} sx={{ marginRight: 2 }}>
                                        Our Mission
                                    </LinkButton>
                                    <Typography sx={{ marginTop: '25px' } }>
                                        Empower and Transform Through Education.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="start">
                                    <Button variant="contained" color="secondary" sx={{marginTop: '25px'}} endIcon={<ArrowForwardIos />} >
                                        Our Vision
                                    </Button>
                                    <Typography sx={{ marginTop: '25px' } }>
                                        A World Where Education Knows No Boundaries.
                                    </Typography>
                                </Grid>
                            </Grid>

                            <LinkButton variant="contained">
                            More About Us
                            </LinkButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', marginBottom: '30px' }}>
                        <img src={causeImage} alt="Play video" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Paper>
  );
};

export default AboutSection;



