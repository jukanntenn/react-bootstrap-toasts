import './index.scss';

import App from './App';
import { ToastsProvider as BootstrapToastsProvider } from 'react-bootstrap-toasts';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BootstrapToastsProvider
      toastContainerProps={{ position: 'top-end', className: 'p-2' }}
      limit={5}
    >
      <App />
    </BootstrapToastsProvider>
  </React.StrictMode>,
);
