import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'src/redux/app/store';
import App from './App';
import 'focus-visible/dist/focus-visible'; // for keyboard users

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
