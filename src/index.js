import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import 'modern-normalize/modern-normalize.css';
import s from './components/App.module.css';

ReactDOM.render(
  <React.StrictMode>
    <App className={s.App} />
  </React.StrictMode>,
  document.getElementById('root'),
);
