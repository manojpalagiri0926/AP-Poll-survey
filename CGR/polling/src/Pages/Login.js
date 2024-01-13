import React, { useState } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import ReCAPTCHA from "react-google-recaptcha";
import ResetPasswordForm from './Resetpassword';
import '../Styles/Login.css'
import { Link } from 'react-router-dom';


const { Title } = Typography;

const LoginPage = ({ onLogin, onResetPassword }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [pass, setPass] = useState('');

  const updatePassword = async (oldPassword, newPassword) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (oldPassword === '12345') { 
      setPass(newPassword);
      console.log('Password updated successfully.');
    } else {
      throw new Error('Incorrect old password.');
    }
  };

  const onFinish = async (values) => {
    if (!recaptchaValue) {
      setError('Please complete the reCAPTCHA verification.');
      return;
    }

    if (values.username === 'FRIDAY' && values.password === pass) {
      onLogin();
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setError(null);
  };

  const handleResetPasswordClick = () => {
    setIsResettingPassword(true);
  };

  const handleBackToLogin = () => {
    setIsResettingPassword(false);
  };

  const handleResetPassword = async (values) => {
    try {
      await updatePassword(values.oldPassword, values.newPassword);
      onResetPassword();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg" >
    <div style={{
      maxWidth: 400,
      margin: '10% 0 0 25%',
      padding: 24,
      boxShadow: '4px 10px 10px 10px rgba(5, 856, 054, 0.2)',
      borderRadius: 10,
    }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        {isResettingPassword ? 'Reset Password' : 'Login Page'}
      </Title>
      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 16 }} />}
      {isResettingPassword ? (
        <ResetPasswordForm onReset={handleBackToLogin} onResetPassword={handleResetPassword} onUpdatePassword={updatePassword} />
      ) : (
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input size="large" placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            {/*<ReCAPTCHA
              sitekey="6LeP4x4pAAAAAEO5TRdZc7yfTJEBl4cdvWCE7jus"
              onChange={handleRecaptchaChange}
      />*/}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              <Link to ='/'>Login</Link>
            </Button>
          </Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Button type="link">
              Reset Password
            </Button>
          </div>
        </Form>
      )}
    </div>
    </div>
  );
};

export default LoginPage;
