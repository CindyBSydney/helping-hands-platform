import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Theme from './theme/theme';
//import Box from '@mui/material/Box';
import Centered from './components/Centered';
//import TheButton from './components/TheButton';
import Contact from './pages/Contact';
import Alert from '@mui/material/Alert';


//Landing page
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
  // <Theme>
  //   {/* 
  //   <Box
  //       sx={{ 
  //         display: 'flex', //flexbox
  //         justifyContent: 'center', //vertical 
  //         alignItems: 'center', //horizontal
  //         height: '100vh',
  //       }} 
  //   >
  //   */}
  //   <Centered>
  //     <Button 
  //       variant="contained"
  //       sx={{ 
  //         marginTop: 2, //8px is the default value of the margin-top
  //         backgroundColor: 'red',
  //       }}
  //       >
  //         Hello world
  //     </Button>
  //   </Centered>
  //   {/*</Box>*/}

  //   {/* 
  //   <TheButton> 
  //     Hello world 
  //   </TheButton>
  //   */}


  //   <Contact />
  // </Theme>

  <Theme>
      <Navbar />
      <Header />
      <AboutSection />
      <Form />
      <Footer />

  </Theme>


  );
}

export default App;
