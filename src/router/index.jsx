import React from 'react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import { HashRouter } from 'react-router-dom';
import RootLayout from './RootLayout';

export default function App(props) {
  return (
    <HashRouter>
      <ConfigProvider locale={zh_CN}>
        <RootLayout {...props} />
      </ConfigProvider>
    </HashRouter>
  );
}
