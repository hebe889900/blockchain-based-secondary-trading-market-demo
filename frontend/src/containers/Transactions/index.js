import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { Layout, Card, Tag, Avatar, Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: []
    };
  }

  async componentDidMount() {
    console.log('mounted');
    await this.fetchGoods();
    this.setState({
      name: this.context.router.route.location.state.name
    });
  }

  handleBack = () => {
    this.context.router.history.push('/products');
  };

  goToHistory = () => {
    this.context.router.history.push('/history');
  };

  fetchGoods = () => {
    const self = this;
    fetch('http://192.168.43.164:1028?func=getall', {
      mode: 'cors',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        self.setState({
          list: data.ans
        });
        console.log(self.state.list);
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  render() {
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
              <span className="ml-2">{this.state.name} 交易详情</span>
            </div>
          </Header>
          <Card title="进行中的交易" className="mt-2">
            {this.state.list.filter(l => l.state === 1).map(m => (
              <Tag
                className="mb-2"
                style={{
                  marginLeft: '10%',
                  height: '40px',
                  width: '80%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                交易id: {m.id}
              </Tag>
            ))}
          </Card>
          <Card title="完成的交易" className="mt-2">
            {this.state.list
              .filter(l => l.state === 2 || l.state === 3)
              .map(m => (
                <Tag
                  className="mb-2"
                  style={{
                    marginLeft: '10%',
                    height: '40px',
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onClick={this.goToHistory}>
                  交易id: {m.id}
                </Tag>
              ))}
          </Card>
        </Layout>
      </div>
    );
  }
}

Transactions.contextTypes = {
  router: PropTypes.object
};

export default Transactions;
