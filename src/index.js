import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PopupProvider } from './Context/Context';
import { FirebaseProvider } from './firebase/firebase';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PopupProvider>
  <FirebaseProvider>
    <App />
    </FirebaseProvider>
    </PopupProvider>
);
