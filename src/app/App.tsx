import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import appTheme from './AppTheme';
import MainPage from '../main/MainPage';

const App = () => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme} >
        <CssBaseline />

          <MainPage />

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
