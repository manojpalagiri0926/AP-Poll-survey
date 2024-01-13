import React, { useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import '../Styles/Addsach.css';
import { Layout, Select, Button, Input, Form, Space } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlusSquareOutlined, DownOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Option } = Select;

function Mandalsnew() {
  const [formData, setFormData] = useState({
    Constituency_name: 'Chandragiri',
    Mandals_name: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/postmandal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout style={{ background: '#F5F5F5' }}>
      <Header
        style={{
          background: '#fff',
          textAlign: 'left',
          padding: '5px',
          border: '3px solid #dedddd',
          boxShadow: '5px #dedddd',
          color: 'blue',
        }}
      >
        <Space>
          <PlusSquareOutlined style={{ fontSize: '14px' }} />
          <h5>Mandals New</h5>
        </Space>
      </Header>
      <Content class="container-fluid">
        <div className="ml-3 mx-auto">
          <Form className="container lg-5 row justify-content-center ">
            
            <Form.Item
              name={'Constituency_name'}
              label="Constituency"
              rules={[{ required: true }]}
              className="col-xs-6 col-sm-7 text-left mt-4"
            >
              <Select
                defaultValue="Chandragiri"
                style={{ marginLeft: '2.7vw', width: '25vw' }}
              >
                <Option value="Chandragiri" disabled>
                  Chandragiri
                </Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Mandal Name"
              name="Mandals_name"
              rules={[{ required: true }]}
              className="col-xs-7 col-sm-7"
            >
              <Input
                name="Mandals_name"
                style={{ marginLeft: '2.2vw', width: '25vw' }}
                onChange={handleInputChange}
              />
            </Form.Item>
            <div className="submit d-flex justify-content-center mt-4">
              <Button type="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
}

export default Mandalsnew;
