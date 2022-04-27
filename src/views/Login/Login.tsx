import { Button } from 'antd';

import LoginForm from './LoginForm';

import './Login.scss';

const Login = () => (
  <div className="login">
    <div className="login-wrapper">
      <div className="login-left">
        <div className="login-left-content">
          <div className="login-left-header">
            <span>TODO</span>
          </div>
          <div className="login-left-body">
            <div className="login-left-title-wrapper">
              <span className="login-left-title">
                <span>Авторизация</span>
              </span>
            </div>
            <LoginForm />
            <div className="navigation-link">
              <Button type="text" href="/">
                Главная страница
              </Button>
            </div>
          </div>
          <div className="login-left-footer">© 2022 Ruslan</div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
