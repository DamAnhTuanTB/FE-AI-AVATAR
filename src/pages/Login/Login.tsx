import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import styles from './Login.module.scss';
import { selectAuthUser } from '@/store/slices/authSlice';

export default function Login() {
  const dispatch = useAppDispatch();
  const { isLogging } = useAppSelector(selectAuthUser);

  const onFinish = (values: any) => {};

  return (
    <div className={styles.loginFormWrapper}>
      <Form
        name="normal_login"
        className={styles.loginForm}
        onFinish={onFinish}
      >
        <h1 className={styles.signUp}>Sign in</h1>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input your email!',
            },
          ]}
          normalize={(value) => value.trim()}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Spin tip="Login..." spinning={isLogging}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Spin>
        </Form.Item>
      </Form>
    </div>
  );
}
