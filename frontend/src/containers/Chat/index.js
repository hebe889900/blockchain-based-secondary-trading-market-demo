import React from 'react';
import PropTypes from 'prop-types';
import { Button, notification } from 'antd';

import './style.css';

import { Timeline, Card, Tag, Avatar, Layout, Modal, InputNumber } from 'antd';

import MockData from '../../mock/transactions';

const Header = Layout.Header;

const openNotification = id => {
  notification.success({
    message: '确认成功，请查看交易中的订单',
    description: '订单交易id 为' + id
  });
};

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      visible: false
    };
  }

  handleBack = () => {
    this.context.router.history.push('/products');
  };

  goToTrans = () => {
    this.context.router.history.push('/transactions', { name: 'wang' });
  };

  hideModal = () => {
    this.setState({
      visible: false
    });
  };

  handleConfirm = () => {
    const tb = 1000000000000000000;
    const id = this.state.id;
    fetch(
      `http://192.168.43.164:1028?func=buy&a1=3&a2=${id}&a3=100000000000000`
    ).then(async rsp => {
      const data = await rsp.json();

      openNotification(data.ans);
    });
  };

  componentDidMount() {
    console.log(this.context.router.route.location.state.id);
    this.setState({
      id: this.context.router.route.location.state.id
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <div className="chat">
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
              <span className="ml-2">
                {' '}
                与商品id: {this.state.id} 提供者 沟通中...
              </span>
            </div>
          </Header>
          <Card className="mt-2">
            <div style={{ textAlign: 'right' }}>
              <Tag color="#108ee9">您好， 我想询问下</Tag>
              <Avatar
                style={{
                  backgroundColor: 'blue',
                  verticalAlign: 'middle',
                  marginLeft: '0.2rem'
                }}>
                Me
              </Avatar>
            </div>
            <div>
              <Avatar
                style={{
                  backgroundColor: 'green',
                  verticalAlign: 'middle',
                  marginRight: '0.3rem'
                }}
                onClick={this.goToTrans}>
                Wang
              </Avatar>
              <Tag>您好， 我觉得100差不多了</Tag>
            </div>
            <div style={{ textAlign: 'center', color: 'lightgrey' }}>
              <Tag style={{ color: 'lightgrey', borderRadius: '20px' }}>
                卖家已将价格修改为¥ 100，可能会解锁部分代币或支付更多代币
              </Tag>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Tag color="#108ee9">我还是觉得不划算</Tag>
              <Avatar
                style={{
                  backgroundColor: 'blue',
                  verticalAlign: 'middle',
                  marginLeft: '0.2rem'
                }}>
                Me
              </Avatar>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Tag color="#108ee9">麻烦您在修改一下</Tag>
              <Avatar
                style={{
                  backgroundColor: 'blue',
                  verticalAlign: 'middle',
                  marginLeft: '0.2rem'
                }}>
                Me
              </Avatar>
            </div>
            <div>
              <Avatar
                style={{
                  backgroundColor: 'green',
                  verticalAlign: 'middle',
                  marginRight: '0.3rem'
                }}
                onClick={this.goToTrans}>
                Wang
              </Avatar>
              <Tag>那我再改低一点</Tag>
            </div>
            <div style={{ textAlign: 'center', color: 'lightgrey' }}>
              <Tag style={{ color: 'lightgrey', borderRadius: '20px' }}>
                卖家已将价格修改为¥ 100，可能会解锁部分代币或支付更多代币
              </Tag>
            </div>
          </Card>
          <div class="input-group mt-1">
            <div class="input-group-prepend" style={{ paddingRight: '5px' }}>
              <button
                class="btn btn-primary btn-sm"
                type="button"
                onClick={this.handleConfirm}
                style={{
                  borderTopLeftRadius: '15px',
                  borderBottomLeftRadius: '15px',
                  marginRight: '2px'
                }}>
                确认交易
              </button>
              <button
                class="btn btn-primary btn-sm"
                type="button"
                onClick={this.showModal}
                style={{
                  borderTopRightRadius: '15px',
                  borderBottomRightRadius: '15px',
                  marginRight: '2px'
                }}>
                修改价格
              </button>
            </div>
            <input
              style={{
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '15px',
                marginRight: '2px'
              }}
              type="text"
              class="form-control"
              placeholder="请输入文字"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary btn-sm"
                type="button"
                style={{
                  borderTopRightRadius: '15px',
                  borderBottomRightRadius: '15px'
                }}>
                发送
              </button>
            </div>
          </div>
          <Modal
            title="修改价格"
            visible={this.state.visible}
            onOk={this.hideModal}
            onCancel={this.hideModal}
            okText="确认"
            cancelText="取消">
            <p>请输入修改后的价格</p>
            <InputNumber min={1} max={1000} defaultValue={100} />
          </Modal>
        </Layout>
      </div>
    );
  }
}

Chat.contextTypes = {
  router: PropTypes.object
};

export default Chat;
