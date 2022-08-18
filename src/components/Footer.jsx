import React from 'react';
import { Layout } from 'antd';
import { GITHUB_URL } from '@constants/constant';
const { Footer } = Layout;

const RootFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <p>
        <a href={GITHUB_URL}> QingWheel </a>
        @Copyright 2022
      </p>
      <p>
        For learning use only; It shall not be used for commercial purposes
        without permission!
      </p>
    </Footer>
  );
};

export default RootFooter;
