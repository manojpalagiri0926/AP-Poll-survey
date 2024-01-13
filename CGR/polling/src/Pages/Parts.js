import React, { useEffect, useState } from 'react';
import { Layout, Form, Table, Button, Select, message,Col,Row ,Space} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../Styles/Sachivalayam.css'; 
import { Link } from 'react-router-dom';

const { Content ,Header} = Layout;
const { Option } = Select;

function Part() {
  const [dataSource, setDataSource] = useState([]);
  const [filteredParts, setFilteredParts] = useState([]);


  const [ Loading,setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  useEffect(() => {
    fetchData();
  }, [pagination]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://127.0.0.1:8000/api/getpart/', {
        params: {
          page: pagination.current,
          pageSize: pagination.pageSize,
        },
      });
      setDataSource(response.data);
      setPagination((prev) => ({
        ...prev,
        total: response.total,
      }));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://127.0.0.1:8000/delete/${id}');
      setDataSource((prevRecords) => prevRecords.filter((record) => record.Voter_ID !== id));
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
      render: (text, record, index) => index+1,
},
    {
      title: "MandalName",
      dataIndex: "mandals_name",
      key: "mandals_name",
    },
    {
      title: "DivisionName",
      dataIndex: "division_name",
      key: "division_name",
    },
    {
      title: "S-Name",
      dataIndex: "Sachivalayam_name",
      key: "Sachivalayam_name",
    },
    {
      title: "Part NO",
      dataIndex: "Part_number",
      key: "Part_number",
    },
    {
      title: "Male Votes",
      dataIndex: "Male",
      key: "Male",
    },
    {
      title: "Female Votes",
      dataIndex: "Female",
      key: "Female",
    },
    {
      title: "3rd Gender Votes",
      dataIndex: "TG",
      key: "TG",
    },
    {
      title: "Total Voter",
      dataIndex: "Total",
      key: "Totals",
    },
    {
      key: "actions",
      title: "Edit",
      render: (record) => <EditOutlined style={{ color: "blue", marginLeft: 12 }} />,
    },
    {
      key: "actions",
      title: "Delete",
      render: (record) => <DeleteOutlined style={{ color: "blue", marginLeft: 12 }} />,
    },
  ];

  const handleAddRow = () => {
    const newRow = {
      mandalName: 'New Mandal',
      divisionName: 'New Division',
      sachivalayamName: 'New Sachivalayam',
    };
    setDataSource([...dataSource, newRow]);
  };

  const onDeleteRow = (record) => {
    setDataSource((prev) => prev.filter((student) => student.id !== record.id));
  };

  return (
    <Layout style={{ background: '#F5F5F5' }}>
      <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'blue' }}>
        <Space>
          {/*<PlusSquareOutlined style={{ fontSize: '20px' }} />*/}
          <h5>Parts </h5>
        </Space>

        </Header>
      <Content className='container-fluid'>

        <div className='Sachivalayam'>     
         <Form layout='inline'>
         <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={6} lg={6}>
                <Form.Item name={'constituency'} label='Constituency'>
                  <Select defaultValue='' style={{ width: '100%' }}>
                    <Option value='' disabled>
                      Chandragiri
                    </Option>
                  </Select>
                </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6}>
                <Form.Item name={'mandal'} label='Mandal' style={{ maxWidth: '500px' }}>
                  <Select defaultValue='' style={{ width: '100%' }}>
                    <Option value='' disabled hidden>
                      All
                    </Option>
                    <Option value='admin'>Yerravaripalem</Option>
                    <Option value='admin'>Chinnagottigallu</Option>
                    <Option value='admin'>Palaka</Option>
                    <Option value='admin'>Chandragiri</Option>
                    <Option value='admin'>Ramachandrapuram</Option>
                    <Option value='admin'>Tirupati Rural</Option>
                  </Select>
                </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6}>
                <Form.Item name={'division'} label='Division' style={{ maxWidth: '500px' }}>
                  <Select defaultValue='' style={{ width: '100%' }}>
                    <Option value='' disabled hidden>
                      All
                    </Option>
                    <Option value='admin'>Chinnagottigallu</Option>
                    <Option value='admin'>Palaka</Option>
                    <Option value='admin'>Chandragiri</Option>
                  </Select>
                </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6}>
                <Form.Item name={'sachivalaym'} label='Sachivalayam' style={{ maxWidth: '500px' }}>
                  <Select defaultValue='' style={{ width: '100%' }}>
                    <Option value='' disabled hidden>
                      All
                    </Option>
                    <Option value='admin'>Chinnagottigallu</Option>
                    <Option value='admin'>Palaka</Option>
                    <Option value='admin'>Chandragiri</Option>
                  </Select>
                </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6}>
                <Form.Item name={'partnumber'} label='PartNumber' style={{ maxWidth: '500px' }}>
                  <Select defaultValue='' style={{ width: '100%' }}>
                    <Option value='' disabled hidden>
                      All
                    </Option>
                    <Option value='admin'>1</Option>
                    <Option value='admin'>2</Option>
                    <Option value='admin'>3</Option>
                  </Select>
                </Form.Item>
                </Col>
                </Row>
              </Form>
        </div>
            <Table
              dataSource={dataSource}
              columns={columns}
              bordered
              scroll={{ x: '100%' }}
              style={{ borderColor: 'blue', marginTop: 20 }}
              className='custom-table'
              components={{
                header: {
                  cell: (props) => <th style={{ backgroundColor: '#113857', color: 'white' }}>{props.children}</th>,
                },
              }}
            />
             <div className='btn'>
              <Button type='primary' onClick={handleAddRow}>
                <Link to = 'partsnew/'>Add</Link> 
              </Button>
              <Button type='primary'>Update</Button>
            </div>
         
   
    
    </Content>
  </Layout>
  );
};

export default Part;