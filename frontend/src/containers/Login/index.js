import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { Card, Input, Icon, Button } from 'antd';

import LogoIcon from '../../images/logo.png';
import TitleIcon from '../../images/title.png';
import UserIcon from '../../images/user.png';
import SideIcon from '../../images/achitecture.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor
    };
  }
  handleLogIn = () => {
    console.log(this.context.router.push);
    this.context.router.history.push('/products');
  };
  render() {
    return (
      <div className="row">
        <div className="col-7">
          <div className="col-12">
            <img
              src={LogoIcon}
              style={{ width: '50px', height: '60px', marginRight: '0.5rem' }}
            />
            <img src={TitleIcon} />
          </div>
          <div
            className="col-12"
            style={{ textAlign: 'center', paddingTop: '4rem' }}>
            <img src={SideIcon} />
          </div>
        </div>
        <div className="col-1" />
        <div className="login-section col-4">
          <Card className="login-box">
            <div className="col-12 user-icon-wrapper">
              <img className="user-icon" src={UserIcon} />
            </div>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              placeholder="账号"
            />
            <Input
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              placeholder="密码"
            />
            <Button type="primary" size="large" onClick={this.handleLogIn}>
              登录
            </Button>
            <div className="col-12 mb-5 mt-1">
              <a className="float-left" style={{ fontSize: '15px' }}>
                立即注册
              </a>
              <a className="float-right" style={{ fontSize: '15px' }}>
                忘记密码
              </a>
            </div>

            <div class="col-12" style={{ textAlign: 'center' }}>
              <img
                src={LogoIcon}
                style={{ width: '85px', height: '81px', opacity: '0.1' }}
              />
              <p>E t h e S h o p</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object
};

export default Login;
