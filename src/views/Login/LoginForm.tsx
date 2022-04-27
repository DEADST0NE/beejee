import { Form, Input, Button } from 'antd';
import { LoginOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import { useLogin } from '../../hooks';

const LoginForm = () => {
  const { loading, login } = useLogin();
  return (
    <Form
      name="login"
      className="login-form"
      layout="vertical"
      requiredMark={false}
      initialValues={{}}
      onFinish={(data) => login({ data })}
    >
      <Form.Item
        name="login"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой login',
          },
        ]}
      >
        <Input
          size="large"
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Login"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой пароль',
          },
        ]}
      >
        <Input.Password
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item className="submit-content">
        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          loading={loading}
          icon={<LoginOutlined />}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
