import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { Card, Input, Icon, Avatar } from 'antd';

import LogoIcon from '../../images/logo.png';
import TitleIcon from '../../images/title.png';
import UserIcon from '../../images/user.png';

const Meta = Card.Meta;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor,
      products: [],
      kw: ''
    };
  }
  handleSearch(evt) {
    console.log(evt);
    const kw = evt.target.value;
    const key = evt.key;
    if (key === 'Enter') {
      this.setState({
        kw: kw.toLowerCase(),
        products: this.state.products.filter(m =>
          m.name.toLowerCase().includes(kw)
        )
      });
    }
  }
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
          products: data.ans.filter(p => p.state === 0)
        });
        console.log(self.state.list);
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  componentDidMount() {
    this.fetchGoods();
  }

  goToLogin = () => this.context.router.history.push('/');

  goToProductDetail(id) {
    this.context.router.history.push('/product-detail', { id });
  }

  render() {
    return (
      <div className="products">
        <div className="search-bar row">
          <div
            className="col-auto"
            style={{ borderRight: '1px solid grey' }}
            onClick={this.goToLogin}>
            <img
              src={LogoIcon}
              style={{ width: '50px', height: '60px', marginRight: '1rem' }}
            />
            <img src={TitleIcon} />
          </div>
          <div className="col-9">
            <Input
              placeholder="在EtheShop中搜索"
              prefix={
                <Icon type="search" style={{ color: 'rgba(0,0,0,.5)' }} />
              }
              onKeyDown={evt => this.handleSearch(evt)}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: '5rem' }}>
          {this.state.products.map(m => (
            <div className="col-4" key={m.name}>
              <Card
                className="product-card justify-content-center"
                onClick={() => this.goToProductDetail(m.id)}>
                <Meta
                  avatar={<Avatar src={m.images && m.images[1]} />}
                  title={'商品id:' + m.id}
                  description={'¥ ' + m.price}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Products.contextTypes = {
  router: PropTypes.object
};

export default Products;
