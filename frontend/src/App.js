// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { SnackbarProvider } from 'notistack'

// ----------------------------------------------------------------------

export default function App() {
  return (
    <SnackbarProvider maxSnack={5}>
      <ThemeProvider>
        <ScrollToTop />
        <StyledChart />
        <Router />
      </ThemeProvider>
    </SnackbarProvider>
  );
}
