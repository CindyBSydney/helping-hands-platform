import React from 'react';

//create a form using material ui
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

//create a styled component
const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

//create a styled component
const StyledTextField = styled(TextField)({
  marginBottom: 2,
});

//create a styled component
const StyledButton = styled(Button)({
  marginTop: 2,
});

const Contact = () => {
  return (
    <StyledBox>
      <form>
        <StyledTextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <StyledButton
          variant="contained"
          color="primary"
        >
          Send
        </StyledButton>
      </form>
    </StyledBox>
  );
};


export default Contact;
