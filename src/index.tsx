import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Web3Provider } from '@chainsafe/web3-context';
import { ONBOARD_CONFIG } from './services/wallet/onboard';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider {...ONBOARD_CONFIG}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
