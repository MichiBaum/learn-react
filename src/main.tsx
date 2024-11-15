import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import App from './App.tsx'

import './index.css'
import 'primereact/resources/themes/lara-dark-amber/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
// import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

const primeconfig= {
    ripple: true,
    cssTransition: true,
    locale: 'en'
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <PrimeReactProvider value={primeconfig}>
          <App />
      </PrimeReactProvider>
  </StrictMode>,
)
