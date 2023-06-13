import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-vs3pz4zkv2ksyprw.us.auth0.com"
    clientId="rx34yyy7WEyrcUFv2FCqjf76IJ4GVgHb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);

