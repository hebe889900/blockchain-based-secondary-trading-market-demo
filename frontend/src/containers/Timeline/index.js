import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { Timeline, Card, Tag, Avatar, Layout, Button } from 'antd';

import MockData from '../../mock/transactions';

const Header = Layout.Header;

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleBack = () => {
    this.context.router.history.push('/products');
  };

  render() {
    const title = (
      <div style={{ width: '50%', marginLeft: '20%' }}>
        <span className="float-left">
          买家:
          <Avatar
            style={{
              backgroundColor: 'green',
              verticalAlign: 'middle',
              marginLeft: '0.5rem'
            }}
            size="large">
            Me
          </Avatar>
        </span>
        <span className="float-right">
          卖家:
          <Avatar
            style={{
              backgroundColor: 'blue',
              verticalAlign: 'middle',
              marginLeft: '0.5rem'
            }}
            size="large">
            Wang
          </Avatar>
        </span>
      </div>
    );
    return (
      <div className="transactions">
        <Layout>
          <Header
            className="row p-0 ml-0 mr-0"
            style={{ backgroundColor: 'white' }}>
            <div className="col-5">
              <Button
                type="primary"
                shape="circle"
                icon="arrow-left"
                size="large"
                onClick={this.handleBack}
              />
            </div>
            <div className="col-6">
              <span className="ml-2"> 交易历史</span>
            </div>
          </Header>
          <Card title={title} className="mt-2">
            <div className="row">
              <div className="col-4" />
              <Timeline>
                <Timeline.Item>
                  <Tag>2018/04/04</Tag>
                  <Tag>¥ 99</Tag>
                  <span className="d-block">开始交易</span>
                </Timeline.Item>
                <Timeline.Item>
                  <Tag>2018/04/05</Tag>
                  <Tag>¥ 109</Tag>
                  <span className="d-block">更改金额</span>
                </Timeline.Item>
                <Timeline.Item>
                  <Tag>2018/04/10</Tag>
                  <Tag>¥ 119</Tag>
                  <span className="d-block">确认收货</span>
                </Timeline.Item>
                <Timeline.Item>
                  <Tag>2018/04/14</Tag>
                  <Tag>¥ 109</Tag>
                  <span className="d-block">交易结束</span>
                </Timeline.Item>
              </Timeline>
            </div>
          </Card>
        </Layout>
      </div>
    );
  }
}

History.contextTypes = {
  router: PropTypes.object
};

export default History;
