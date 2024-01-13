import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form, Layout, Row, Col, Input, Select, message,Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content,Header } = Layout;
const { Option } = Select;

const Users = () => {
  const [dataSource, setDataSource] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMandal, setSelectedMandal] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    phone_number: '',
    Designation_name: '',
  });

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const [mandalSachavalayams, setMandalSachavalayams] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    fetchData();
  }, [fetchTrigger]);

  useEffect(() => {
    if (selectedMandal) {
      const sachavalayams = records
        .filter((user) => user.Mandal === selectedMandal)
        .map((user) => user.sachivalayam);
      setMandalSachavalayams([...new Set(sachavalayams)]);
    } else {
      setMandalSachavalayams([]);
    }
  }, [selectedMandal, records]);

  useEffect(() => {
    const filteredData = dataSource.filter((user) => {
      const nameFilter = user.name.toLowerCase().includes(filters.name.toLowerCase());
      const phoneFilter = user.phone_number.includes(filters.phone_number);
      const designationFilter =
        filters.Designation_name === '' ||
        (user.Designation_name && user.Designation_name.includes(filters.Designation_name));

      return nameFilter && phoneFilter && designationFilter;
    });

    setFilteredUsers(filteredData);
  }, [dataSource, filters]);

  const fetchData = async (page = 1, pageSize = 10) => {
    try {
      setLoading(true);
      const response = await axios.get('http://127.0.0.1:8000/api/get/', {
        params: {
          page,
          pageSize,
        },
      });
      setRecords(response.data);
      setDataSource(response.data);
      setPagination((prevPagination) => ({
        ...prevPagination,
        current: page,
        total: response.data.total,
      }));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/get/${id}`);
      setRecords((prevRecords) => prevRecords.filter((record) => record.Voter_ID !== id));
      message.success('User deleted successfully');
    } catch (error) {
      console.log(error);
      message.error('Error deleting user');
    }
  };

  const columns = [
    {
      title: 'Serial No',
      dataIndex: 'serial',
      key: 'serial',
      render: (text, record, index) => (filteredUsers.indexOf(record)+1),
},
    {
      title: 'User Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Designation type',
      dataIndex: 'Designation_name',
      key: 'Designation_name',
    },
    {
      key: 'actions',
      title: 'Edit',
      render: (record) => <EditOutlined style={{ color: 'blue', marginLeft: 12 }} />,
    },
    {
      key: 'actions',
      title: 'Delete',
      render: (record) => (
        <DeleteOutlined
          onClick={() => handleDelete(record.Voter_ID)}
          style={{ color: 'blue', marginLeft: 12 }}
        />
      ),
    },
  ];

  const getDropdownOptions = (data, key) => {
    const uniqueOptions = Array.isArray(data) ? ['', ...new Set(data.map((item) => item[key]))] : [''];
    return uniqueOptions;
  };

  const handleFilterChange = (value, name) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };
  const handleTableChange = (pagination, filters, sorter) => {
    const { current, pageSize } = pagination;
    fetchData(current, pageSize);
  };

  return (
    <div className='users-list'>
      <Layout>
      <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'2px solid #dedddd',boxShadow:'5px #dedddd', color:'blue' }}>
      <Space>
              {/*}  <PlusSquareOutlined style={{ fontSize: '20px' }} />*/}
                <h4>Users</h4>
              </Space>
      
      </Header>   
        <Content style={{ maxWidth: '168vh', maxHeight: '1200vh', width: '100%', margin: '3% 0% 0% 3%', padding: '0%' }}>
          <div style={{ background: 'white', padding: 24, minHeight: 580 }}>
            <h3 style={{ textAlign: 'center' }}>USERLIST</h3>
            <div className='container'>
              <Form layout='inline'>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} md={8} lg={6}>
                    <Form.Item label={`Constituency: ${selectedMandal}`}>
                      <Input className='Constituencyselect' value='Chandragiri' disabled />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={6}>
                    <Form.Item
                      name={'Username'}
                      label='Username'
                      style={{ maxWidth: '500px' }}
                    >
                      <Input
                        className='form-select p-0 col-md-12 bg-white rounded'
                        value={filters.name}
                        onChange={(e) => handleFilterChange(e.target.value, 'name')}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={6}>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={6}>
                    <Form.Item
                      name={'Designation'}
                      label='Designation'
                      style={{ maxWidth: '500px' }}
                    >
                      <Select
                        className='selectStyle'
                        value={filters.Designation_name}
                        onChange={(value) => handleFilterChange(value, 'Designation_name')}
                      >
                        <Option value="">Select Designation</Option>
                        {getDropdownOptions(filteredUsers, 'Designation_name').map((option, index) => (
                          <Option key={index} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={6}>
                    <Form.Item label='Phone Number'>
                      <Input
                        className='UserNameselect'
                        value={filters.phone_number}
                        onChange={(e) => handleFilterChange(e.target.value, 'phone_number')}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginLeft: 900, marginRight: 650 }}></div>
              </Form>
            </div>
            <Table
              dataSource={filteredUsers}
              columns={columns}
              bordered
              pagination={pagination}
              onChange={handleTableChange} 
              style={{ borderColor: 'blue', marginTop: 30, overflow: 'scroll' }}
              className='custom-table'
              components={{
                header: {
                  cell: (props) => <th style={{ backgroundColor: '#113857', color: 'white' }}>{props.children}</th>,
                },
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginLeft: 600, marginRight: 750 }}>
              <Button type='primary'><Link to = '/adduser'>Add</Link></Button>
              <Button type='primary'>Upload</Button>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Users;