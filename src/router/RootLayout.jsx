import React, { Suspense, lazy } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import Footer from '@components/Footer';
import Header from '@components/Header';

const { Content } = Layout;
// 懒加载
const Home = lazy(() => import('../pages/Home'));
const RequestTab = lazy(() => import('../pages/RequestTab'));
const RouterTab = lazy(() => import('../pages/RouterTab'));
// 全局加载动画
const GlobalLoading = () => {
  return (
    <div className="global-loading">
      <Spin />
    </div>
  );
};
export default function RootLayout() {
  const { pathname } = useLocation();
  // 需根据实际情况修改
  const rootPath = (pathname.match(/[\w\d]+/) || [])[0] || 'home';

  return (
    <Layout className="layout">
      <Header path={rootPath} />
      <Content
        style={{
          minHeight: 'calc(100vh - 156px)',
        }}
      >
        <div className="site-layout-content">
          <Routes>
            <Route
              path="/home"
              element={
                <Suspense fallback={<GlobalLoading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/request"
              element={
                <Suspense fallback={<GlobalLoading />}>
                  <RequestTab />
                </Suspense>
              }
            />
            <Route
              path="/router"
              element={
                <Suspense fallback={<GlobalLoading />}>
                  <RouterTab />
                </Suspense>
              }
            />
            <Route
              path="/"
              element={
                <Suspense fallback={<GlobalLoading />}>
                  <Home />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
