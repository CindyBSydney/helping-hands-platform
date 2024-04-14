
import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography, styled, Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@mui/material';

type StatusType = 'typing' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  gender: string;
  email: string;
  subject: string;
  message: string;
}

const Form = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '110px 0 110px',
  background: '#f4f1ee',
  '& .MuiTextField-root': {
    width: '100%',
  },
  '& .MuiButton-root': {
    margin: '5px',
  },
}));

const DefaultFormArea = styled(Box)({
  background: '#fff',
  padding: '60px 40px 30px',
  borderRadius: '6px',
});

const StyledFormControl = styled(FormControl)({
  minWidth: 120,
  width: '100%',
});

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function VolunteerForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    gender: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<StatusType>('typing');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  if (status === 'success') {
    return <Typography variant="h1" color="success.main">Form submitted successfully!</Typography>;
  }



  {/*
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(formData);
      setStatus('success');
    } catch (err) {
      if (err instanceof Error) {
        setStatus('error');
        setError(error);
      }
    }
  }
  */}


  const canSubmit = formData.name && formData.email && formData.gender && status !== 'submitting';
  return (
    <Form>
      <Box className="auto-container">
      <Typography variant="h4" align="center" sx={{ marginBottom: '40px', color:'#008080' }}>
            Contact Us
        </Typography>
        <Grid container spacing={3} justifyContent="center">
        
          <Grid item xs={12} md={6}>
            <DefaultFormArea>
            <form> 
              {/*<form onSubmit={handleSubmit}>*/}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="Your Name*"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={status === 'submitting'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledFormControl>
                      <InputLabel id="gender-label">Gender*</InputLabel>
                      <Select
                        labelId="gender-label"
                        name="gender"
                        value={formData.gender}
                        //onChange={handleInputChange}
                        label="Gender*"
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </StyledFormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="Email*"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={status === 'submitting'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledFormControl>
                      <InputLabel id="subject-label">How did you hear about us</InputLabel>
                      <Select
                        labelId="subject-label"
                        name="subject"
                        value={formData.subject}
                        //onChange={handleInputChange}
                        label="How did you hear about us"
                      >
                        <MenuItem value="social_media">Social media</MenuItem>
                        <MenuItem value="other_means">Other means</MenuItem>
                      </Select>
                    </StyledFormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Any comments..."
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={status === 'submitting'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                    </SubmitButton>
                  </Grid>
                </Grid>
              </form>
            </DefaultFormArea>
          </Grid>
        </Grid>
      </Box>
    </Form>
  );

  async function submitForm(data: FormData): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!data.name || data.gender || !data.email) {
          reject(new Error('Please fill in all required fields.'));
        } else {
          resolve();
        }
      }, 1500);
    });
}
}


