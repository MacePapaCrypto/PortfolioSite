import React, { useState, useMemo, createRef } from 'react';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme, Container, Switch, Toolbar, Avatar } from '@mui/material';
import { FormGroup, FormControlLabel, Box, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Heading from './components/Heading';
import Experience from './components/Experience';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import skullyTemp from './images/DALLE_2022-08-22_11.38.08.png';
import Projects from './components/Projects';

function App() {

  const [currentThemeMode, setCurrentThemeMode] = useState<'light' | 'dark'>('dark');
  
  const handleChange = () => {
    theme.palette.mode === 'light' ? theme.palette.mode = 'dark' : theme.palette.mode = 'light';
    setCurrentThemeMode((currentThemeMode) => (currentThemeMode === 'light' ? 'dark' : 'light'));
  }

  const pages = ['Experience', 'Projects'];

  const experienceRef = createRef<HTMLDivElement>();
  const projectRef = createRef<HTMLDivElement>();
  const homeRef = createRef<HTMLDivElement>();

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: [
            'Lora',
            'serif'
          ].join(','),
        },
        palette: {
          primary: {
            main: "#b838e2"
          },
          mode: currentThemeMode,
        },
      }),
    [currentThemeMode],
  );

  const handlNavClick = (page: any) => {
    if(page === 'Experience' && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
    else if(page === 'Projects' && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleHomeClick = () => {
    if(homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container sx={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        maxWidth: "1600px"
      }}>
        <AppBar position="sticky" sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          backgroundImage: "transparent",
          background: "transparent",
          boxShadow: "none"
        }}>
          <Container sx={{alignItems: "center"}}>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent: "left", alignItems: "center" }}>
                <Avatar 
                  alt="Mace Logo"
                  src={skullyTemp}
                  sx={{
                    width: {sm: 40, md: 56},
                    height: {sm: 40, md: 56},
                    marginRight: "1rem"
                  }}
                  onClick={handleHomeClick}
                />
                <FormGroup sx={{
                  alignItems: "center"
                }}>
                  <FormControlLabel 
                    control={<Switch onChange={handleChange}/>}
                    label={currentThemeMode === 'light' ? <LightModeTwoToneIcon color='primary' sx={{display: "block"}}/> : <DarkModeTwoToneIcon color='primary' sx={{display: "block"}}/> }
                  />
                </FormGroup>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent: "right" }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    color="primary"
                    sx={{ my: 2, display: 'block' }}
                    onClick={() => handlNavClick(page)}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Heading ref={homeRef}/>
        <Experience ref={experienceRef}/>
        <Projects ref={projectRef}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
