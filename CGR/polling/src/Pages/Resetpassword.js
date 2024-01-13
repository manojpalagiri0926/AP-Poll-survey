import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigation } from 'react-router-dom';

const ResetPasswordForm = ({ onReset, onLogin, onUpdatePassword }) => {
  const onFinish = async (values) => {
    const { oldPassword, newPassword, confirmPassword } = values;

    if (newPassword !== confirmPassword) {
      console.log('New password and confirm password do not match.');
      return;
    }

    // Pass the new password to the parent component
    onUpdatePassword(oldPassword, newPassword);
    onReset();
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Old Password" name="oldPassword" rules={[{ required: true, message: 'Please enter your old password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="New Password" name="newPassword" rules={[{ required: true, message: 'Please enter your new password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirm Password" name="confirmPassword" dependencies={['newPassword']} rules={[
        { required: true, message: 'Please confirm your new password!' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('newPassword') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords do not match!'));
          },
        }),
      ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Reset Password
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="link" onClick={onLogin}>
          Back to Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPasswordForm;
