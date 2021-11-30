import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'src/redux/app/store';
import App from './App';
import 'focus-visible/dist/focus-visible'; // for keyboard users
import { initFacebookSdk } from './utils/functions/initFbSdk';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: any;
  }
}

initFacebookSdk().then(startApp);

function startApp() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
