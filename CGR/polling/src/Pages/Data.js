import React from 'react';
import { Layout, Table, Card, Input, Form } from 'antd';
// import 'antd/dist/antd.css';
const { Content, Sider } = Layout;

const dataSource = [
  {
    key: '1',
    name: 'John Doe',
    age: 25,
    address: '123 Street, City',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const Data = () => {
  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <Layout className="site-layout" style={{ flex: 1 }}>
        <Content style={{ margin: '16px', display: 'flex' }}>
        <Card style={{ width: 400, background: '#fff', marginBottom: '16px' ,marginRight:'5%',height:500}}>
        Side Div Content
      </Card>
          <Card style={{ width: 500, margin: '16px 16px 16px 0',height:500 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card style={{ width: 500, margin: '16px',height:700 }}>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} layout="vertical">
              <Form.Item label="PartNo">
                <Input />
              </Form.Item>
              <Form.Item label="PartName">
                <Input />
              </Form.Item>
              <Form.Item label="Male">
                <Input />
              </Form.Item>
              <Form.Item label="Female">
                <Input />
              </Form.Item>
              <Form.Item label="TG">
                <Input />
              </Form.Item>
              <Form.Item label="Total">
                <Input />
              </Form.Item>
              <Form.Item label="Data Start Line">
                <Input />
              </Form.Item>
              <Form.Item label="Data End Line">
                <Input />
              </Form.Item>
            </Form>
          </Card>
        </Content>

        <Table dataSource={dataSource} columns={columns} />
      </Layout>
    </Layout>
  );
};

export default Data;
