import React, { useEffect } from 'react';
import logo from '../../../asset/img/logo.svg';
import styles from './index.less';

const Home = () => {
  useEffect(() => {
    console.log('use Effect');
  }, []);

  return (
    <div className={styles['page-container']}>
      <div className={styles['img-container']}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p>
        Qing Wheel
        <br />
        Lightweight React Scaffold
      </p>
    </div>
  );
};

export default Home;
