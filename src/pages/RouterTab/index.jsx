import React from 'react';
import { PageHeader, Row, Col, Card } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import styles from './index.less';

const RouterTab = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="React-Router v6"
        subTitle="Since v6, it has changed so much"
        onBack={handleBack}
      />
      <div className={styles['page-container']}>
        <Row>
          <Col span={8}>
            <Card
              title="Link Demo"
              extra={
                <a href="https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md">
                  Tutorial
                </a>
              }
              style={{ width: 300 }}
            >
              <div>Use {'<Link />'} component to other tab</div>
              <div>
                <Link to="/request">Request Tab</Link>
              </div>
              <div>
                <Link to="/">Home Tab</Link>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RouterTab;
