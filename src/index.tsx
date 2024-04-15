import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter } from 'react-router-dom';
import App from './components/app/App';
import './styles/index.scss';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
    </Provider>
  
);

