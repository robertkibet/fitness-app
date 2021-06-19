import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="sensen.auth0.com"
      clientId="FAntJYrdC77WvrmEaJth2nzBCx9JPnIc"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    ,

  </React.StrictMode>,
  document.getElementById('root'),
);
