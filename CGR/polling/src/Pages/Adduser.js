import React, { useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import '../Styles/Sachivalayam.css'; // Make sure to create this CSS file
import { PlusSquareOutlined } from '@ant-design/icons';

import { Layout, Select, Button, Input, Form ,Space} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Header } = Layout;
const { Option } = Select;

function UserReg() {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    designation: '',
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/post/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registration successful');
      } else {
        console.error('Error submitting user registration');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  
  return (
    <Layout style={{ background: '#F5F5F5' }}>
      <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #fedddd', color:'blue' }}>
        <Space>
          <PlusSquareOutlined style={{ fontSize: '20px' }} />
          <h5>Add User</h5>
        </Space>

        </Header>
      <Content className='container-fluid container-center'>
        <div className='ml-3 mx-auto'>
          <Form className='container lg-5 row justify-content-center'>
            <h3 className="text-center mt-4">User Registration</h3>
            <Form.Item
              label="User Name"
              name="userName"
              rules={[{ required: true }]}
              className='col-xs-7 col-sm-7'>
              <Input className='selectstyle' />
            </Form.Item>

            <Form.Item
              label="Phone No"
              name="phoneNumber"
              rules={[{ required: true }]}
              className='col-xs-7 col-sm-7'>
              <Input className='selectstyle' />
            </Form.Item>

            <Form.Item
              name="designation"
              label="Designation"
              rules={[{ required: true }]}
              className='col-xs-7 col-sm-7'>
              <Select defaultValue="" className='selectstyle'>
                <Option value="" disabled></Option>
              </Select>
            </Form.Item>

            <div className='submit d-flex justify-content-center mt-4'>
              <Button type="primary" id='btn'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
}

export default UserReg;