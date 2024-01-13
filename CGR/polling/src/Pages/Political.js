import React, { useState, useEffect } from 'react';
import { Table, Layout, Form, Input, Button, Space, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Content, Header } = Layout;

const PoliticalParties = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getparty');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (formValues) => {
    try {
      const postData = {
        name: formValues.name,
      };

      await axios.post('http://127.0.0.1:8000/api/postparty/', postData);
      console.log('Form submitted successfully');

      // Optionally, you can update the local state to reflect the changes
      fetchData();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const columns = [
    {
      title: 'Serial No',
      dataIndex: 'serial',
      key: 'serial',
      render: (text, record, index) => index+1,
},
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Edit',
      render: () => (
        <Space>
          <EditOutlined className="edit-icon" style={{ color: 'blue' }} />
        </Space>
      ),
    },
    {
      key: '4',
      title: 'Delete',
      render: (record) => (
        <Space>
          <DeleteOutlined className="delete-icon" style={{ color: 'blue' }} onClick={() => showDeleteConfirm(record.parties_id)} />
        </Space>
      ),
    },
  ];

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      icon: <DeleteOutlined />,
      content: 'This action cannot be undone.',
      onOk: () => handleDelete(id),
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/deletepoliticalparty/${id}`);
      fetchData(); // Optionally fetch updated data after successful deletion
      alert('Data Successfully Deleted!!!');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <>
      <Layout style={{ background: '#F5F5F5' }}>
        <Header style={{ background: '#fff', textAlign: 'left', padding: '5px', border: '2px solid #dedddd', boxShadow: '5px #dedddd', color: 'blue' }}>
          <Space>
            <h5>Political Parties</h5>
          </Space>
        </Header>
        <Content class='container-fluid'>
          <div className='Politicalparties'>
            <div className='table'>
              <Table
                columns={columns}
                dataSource={data}
                bordered
                scroll={{ x: '100%' }}
                components={{
                  header: {
                    cell: (props) => <th style={{ backgroundColor: '#113857', color: 'white', textAlign: 'center' }}>{props.children}</th>,
                  },
                }}
              />
            </div>
            <div className='form'>
              <Form className='container' onFinish={handleSubmit}>
                <Form.Item name="name" label="Party Name">
                  <Input className='input' placeholder="Enter Party Name" style={{ width: '30%' }} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add New
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default PoliticalParties;