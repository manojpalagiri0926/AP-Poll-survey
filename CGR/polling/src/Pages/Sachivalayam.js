import React, { useState,useEffect } from 'react';
import { Table, Button, Form, Select, Layout, Modal,Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import '../Styles/Sachivalayam.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const { Content,Header } = Layout;
const { Option } = Select;

const Sachivalayam = () => {
  const [dataSource, setDataSource] = useState([]);
  const [rowCount, setRowCount] = useState(dataSource.length);
  const [filteredSachivalayam, setFilteredSachivalayam] = useState([]);
  const [filters, setFilters] = useState({
    mandals_name: '',
    division_name: '',
  });

  const columns = [
    {
      title: 'Serial No',
      dataIndex: 'serial',
      key: 'serial',
      render: (text, record, index) => (filteredSachivalayam.indexOf(record)+1),
},
    { title: 'MandalName', dataIndex: 'mandals_name', key: 'mandals_name' },
    { title: 'DivisionName', dataIndex: 'division_name', key: 'division_name' },
    { title: 'SachivalayamName', dataIndex: 'Sachivalayam_name', key: 'Sachivalayam_name' },
    {
      key: 'edit',
      title: 'Edit',
      render: (record) => (
        <>
          <EditOutlined style={{ color: 'blue', marginLeft: 12 }} />
        </>
      ),
    },
    {
      key: 'delete',
      title: 'Delete',
      render: (record) => (
        <>
          <DeleteOutlined
            style={{ color: 'blue', marginLeft: 12 }}
            onClick={() => showDeleteConfirm(record.Sachivalayam_id)}
          />
        </>
      ),
    },
  ];

  const handleAddRow = () => {
    const newRow = {
      key: (rowCount + 1).toString(),
      
      mandals_name: 'New Mandal',
      division_name: 'New Division',
      Sachivalayam_name: 'New Sachivalayam',
    };
    setDataSource([...dataSource, newRow]);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getsachivalayam/');
      setDataSource(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = dataSource.filter((Sachivalayam) => {
      return (
        (filters.mandals_name === '' || Sachivalayam.mandals_name.includes(filters.mandals_name)) &&
        (filters.division_name === '' || Sachivalayam.division_name.includes(filters.division_name))
      );
    });

    setFilteredSachivalayam(filteredData);
  }, [dataSource, filters]);

  const getDropdownOptions = (data, key) => {
    const uniqueOptions = Array.isArray(data) ? ['', ...new Set(data.map((item) => item[key]))] : [''];
    return uniqueOptions;
  };

  const handleFilterChange = (value, name) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

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
      await axios.delete(`http://localhost:8000/api/deletesachivalayam/${id}`);
      // Refresh the page
      setDataSource((prevData) => prevData.filter((record) => record.Sachivalayam_id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    
      <Layout style={{ background: '#F5F5F5' }}>
        <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'blue' }}>
        <Space>
          {/*<PlusSquareOutlined style={{ fontSize: '20px' }} />*/}
          <h5>Sachivalayam </h5>
        </Space>

        </Header>
        <Content class='container-fluid' style={{ margin: '16px' }}>
         
            <div className='Sachivalayam'>
              <Form layout='inline'>
                <Form.Item name={'constituency'} label='Constituency'>
                  <Select defaultValue='' style={{ width: '100%' }}>
                    <Option value='' disabled>
                      Chandragiri
                    </Option>
                  </Select>
                </Form.Item>

                <Form.Item name={'mandal'} label='Mandal' style={{ maxWidth: '500px' }}>
                  <Select
                    value={filters.mandals_name}
                    onChange={(value) => handleFilterChange(value, 'mandals_name')}
                    style={{ width: 200 }}
                  >
                    {getDropdownOptions(filteredSachivalayam, 'mandals_name').map((option, index) => (
                      <Option key={index} value={option} style={{ color: 'black' }}>
                        {option === '' ? 'Select Mandal' : option}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item name={'division'} label='Division' style={{ maxWidth: '500px' }}>
                  <Select
                    value={filters.division_name}
                    onChange={(value) => handleFilterChange(value, 'division_name')}
                    style={{ width: 200 }}
                  >
                    {getDropdownOptions(filteredSachivalayam, 'division_name').map((option, index) => (
                      <Option key={index} value={option}>
                        <span style={{ color: 'black' }}>{option === '' ? 'Select Division' : option}</span>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>


              </Form>
            </div>
            <Table
                dataSource={filteredSachivalayam}
                columns={columns}
                bordered
                style={{ borderColor: 'blue', marginTop: 20 }}
                className='custom-table'
                components={{
                  header: {
                    cell: (props) => <th style={{ backgroundColor: '#113875', color: 'white' }}>{props.children}</th>,
                  },
                }}
              />
            <div className='btn'>
              <Button type='primary' onClick={handleAddRow}>
                <Link to = 'Addsach' >Add</Link>
              </Button>
              <Button type='primary' className='upload-btn'>Upload</Button>
            </div>
         
        </Content>
      </Layout>
   
  );
};

export default Sachivalayam;