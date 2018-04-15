import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { Tag, Card, Input, Rate, Button } from 'antd';

import MockData from '../../mock/mockData';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: null,
      id: ''
    };
  }

  componentDidMount() {
    const id = this.context.router.route.location.state.id;
    const productDetail = MockData.find(p => p.id === 4);
    console.log(this.context.router.route.location.state.id);

    this.setState({
      id,
      productDetail
    });
  }

  goToTransactions = () => {
    this.context.router.history.push('/transactions', { name: 'wang' });
  };

  handleChat = () => {
    this.context.router.history.push('/chat', { id: this.state.id });
  };

  render() {
    return (
      <div className="row mr-0 ml-0">
        <div className="username col-3 p-0">
          <Card
            style={{
              height: '151px',
              boxShadow:
                '0 10px 10px 0 rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.19)'
            }}>
            <img
              style={{ height: '150px', width: '100%' }}
              src={
                this.state.productDetail && this.state.productDetail.images[0]
              }
            />
          </Card>
        </div>
        <div className="username col-8">
          <Rate defaultValue={3} />
          <span className="d-block mb-4">
            商品提供者{' '}
            <a className="text-primary" onClick={this.goToTransactions}>
              Wang
            </a>
          </span>
          <Button
            className="d-block"
            type="primary"
            onClick={this.handleChat}
            style={{ borderRadius: '15px', width: '200px' }}>
            Connect
          </Button>
        </div>
        <div className="col-12 mt-3 pl-0 pr-0">
          <Card
            title={this.state.productDetail && this.state.productDetail.name}
            style={{ height: 'auto' }}>
            <p>
              {this.state.productDetail && this.state.productDetail.description}
            </p>
          </Card>
        </div>
        <div className="row mr-0 ml-0 pl-0 pr-0">
          {this.state.productDetail &&
            this.state.productDetail.images.slice(1).map(i => (
              <div className="col-4 mt-3 pl-0 pr-0">
                {
                  <Card>
                    <img src={i} style={{ width: '100%', height: '250px' }} />
                  </Card>
                }
              </div>
            ))}
        </div>
      </div>
    );
  }
}

ProductDetail.contextTypes = {
  router: PropTypes.object
};

export default ProductDetail;
