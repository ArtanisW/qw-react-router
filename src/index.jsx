import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './router';
import '../asset/css/app.less';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
// 用于Webapck HMR
if (module.hot) {
  module.hot.accept('./router', () => {
    const NextApp = require('./router').default;
    root.render(<NextApp />);
  });
}
// 用于mock更新
if (process.env.NODE_ENV === 'dev') {
  try {
    import('../mock');
  } catch (error) {
    console.log('mock compile error');
  }
}
