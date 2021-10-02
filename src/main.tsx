import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/app/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
import { Fonts } from './components/molecules/Fonts';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Fonts/>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
