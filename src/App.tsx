import './App.css';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import HomePage from './screens/HomePage';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const theme = createTheme({
    palette: {
      // type: "dark"
    }
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Container maxWidth='xl'>
          <HomePage />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
