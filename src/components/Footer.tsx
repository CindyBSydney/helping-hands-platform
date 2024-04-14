import React from 'react';
import { Box, Grid, Typography, TextField, Button, Link, styled, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
//import SkypeIcon from '@mui/icons-material/Skype';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import theme from '../theme/theme';

const Footer = styled(Box)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: theme.palette.secondary.main, 
  padding: theme.spacing(6, 2),
  '& a': {
    color: '#FFFFFF',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const FooterHeading = styled(Typography)({
  color: '#18BEC2', 
  marginBottom: '20px',
});

const FooterLink = styled(Link)({
  display: 'block',
  marginBottom: '10px',
});

const CopyRightBox = styled(Box)({
  borderTop: '2px solid #FFFFFF', 
  paddingTop: '20px',
  marginTop: '20px',
  textAlign: 'center',
});

const SocialMediaIcon = styled(Button)({
  color: '#FFFFFF',
  marginLeft: '10px',
});

const FooterSection: React.FC = () => {
  return (
    <Footer>
      <Grid container spacing={2}>
        {/* Contact */}
        <Grid item xs={12} sm={3}>
          <FooterHeading variant="h6">Contact</FooterHeading>
          <Typography sx={{marginBottom: '10px'}} >Nairobi, Kenya.</Typography>
          <Typography sx={{marginBottom: '10px'}}>support@helpinghands.com</Typography>
          <Typography sx={{marginBottom: '10px'}}>+254 723 445 678</Typography>
        </Grid>

        {/* About */}
        <Grid item xs={12} sm={3}>
          <FooterHeading variant="h6">About</FooterHeading>
          <FooterLink href="#">Charity</FooterLink>
          <FooterLink href="#">Donors</FooterLink>
          <FooterLink href="#">Upcoming Events</FooterLink>
          <FooterLink href="#">Causes</FooterLink>
        </Grid>

        {/* Quick Link */}
        <Grid item xs={12} sm={3}>
          <FooterHeading variant="h6">Quick Link</FooterHeading>
          <FooterLink href="#">Private Policies</FooterLink>
          <FooterLink href="#">Donate Now</FooterLink>
          <FooterLink href="#">Become a Donor</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={3}>
          <FooterHeading variant="h6">Newsletter</FooterHeading>
          <Typography>Subscribe to us and get latest news & upcoming events.</Typography>
          <TextField
            variant="standard"
            placeholder="Email Address..."
            InputProps={{
              style: { color: '#FFFFFF' }, 
            }}
            sx={{ my: 2, color: '#FFFFFF'}}
          />
          <Button variant="contained" color="primary" endIcon={<ArrowUpwardIcon />}>
            SUBSCRIBE TO US
          </Button>
        </Grid>
      </Grid>

      <CopyRightBox>
        <Typography variant="body2">
          © 2024. All Rights Reserved by Helping Hands. Designed By Helping Hands.
        </Typography>
        <Box mt={2}>
          <SocialMediaIcon>
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <TwitterIcon />
          </SocialMediaIcon>
          {/* <SocialMediaIcon>
            <SkypeIcon />
          </SocialMediaIcon> */}
          {/* <SocialMediaIcon>
            <ArrowUpwardIcon />
          </SocialMediaIcon> */}
        </Box>
      </CopyRightBox>
    </Footer>
  );
};

export default FooterSection;
