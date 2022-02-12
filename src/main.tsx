import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'src/redux/app/store';
import App from './App';
import 'focus-visible/dist/focus-visible'; // for keyboard users

const rootElement = document.getElementById('root');

const AppComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(<AppComponent />, rootElement);
} else {
  ReactDOM.render(<AppComponent />, rootElement);
}
