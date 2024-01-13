import React, { useEffect, useState } from 'react';
import { Layout, Form, Table, Button, Select, message ,Checkbox,Row,Col,Space} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import '../Styles/Sachivalayam.css'; 

const { Content,Header } = Layout;
const { Option } = Select;

function Usermapping() {
  const [dataSource, setDataSource] = useState([
    {
        username: 'mark',
        designation: '',
        reportingmanager: '',
    },
    {
        username: 'john',
        designation: '',
        reportingmanager: '',
    },
    {
        username: 'adam',
        designation: '',
        reportingmanager: '',
    },
  ]);

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
    },
    {
      title: 'Reporting Manager',
      dataIndex: 'reportingmanager',
      key: 'reportingmanager',
    },
    {
      key: 'edit',
      title: 'Edit',
      
    },
    {
      key: 'checkbox',
      title: 'Checkbox',
      render: () => <Checkbox style={{marginLeft:'4vw'}}/>,
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

  return (
    <Layout style={{ background: '#F5F5F5' }}>
       <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'blue' }}>
<Space>
        {/*}  <PlusSquareOutlined style={{ fontSize: '20px' }} />*/}
          <h5>User Mapping</h5>
        </Space>

</Header>
      <Content className='container-fluid'>
        <div className='Usermapping'>
        <Form layout='inline'>
                <Row gutter={[16, 16]}>
                 <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'mandal'} label='Mandal Convenor'>
                      <Select defaultValue='' style={{ width: '80%' }}>
                        <Option value='' disabled>
                          Chandragiri
                        </Option>
                      </Select>
                    </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'pro'} label='PRO' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '66%', marginLeft:'3.4vw' }}>
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

                    <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'apro'} label='APRO' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '66%',marginLeft:'2.5vw' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>
                        
                      </Select>
                    </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'booths'} label='Booth Incharge' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '80%' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>
                      </Select>
                    </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'volunteer'} label='Volunteer' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '64%', marginLeft:'3.4vw' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>
                      </Select>
                    </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'constituency'} label='Constituency' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '80%' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>
                      </Select>
                    </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'mandalcity'} label='Mandal/City' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '77%' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>
                      </Select>
                    </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'sachivalaym'} label='Sachivalyam' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '74%', marginLeft:'1.2vw' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>
                      </Select>
                    </Form.Item>
                    </Col>
                    
                    <Col xs={24} sm={24} md={8} lg={6}>
                    <Form.Item name={'partnumber'} label='PartNumber' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '68%', marginLeft:'2.4vw' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>                      
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
              scroll={{ x: '100%'}}
              style={{ borderColor: 'blue', position:'relative', top:'5vh', width:'60vw' }}
              className='custom-table'
              components={{
                header: {
                  cell: (props) => <th style={{ backgroundColor: '#113857', color: 'white' }}>{props.children}</th>,
                  
                },
              }}
            />
            <Form.Item name='Selectdesignation'  rules={[{ required: true }]} style={{ position:'relative',top: '2vh', marginLeft:'6vw'}}>
                <Select defaultValue='' style={{ width: '20%' }}>
                  <Option value='' disabled hidden>
                          Select Designation
                        </Option>
                    
                  </Select><br/>
                  <Button  type="primary" style={{marginTop:'1vh',marginLeft:'3.5vw'}}>Assign Designation</Button>
                </Form.Item>
             <Form.Item name='Selectreportingmanager'  rules={[{ required: true }]} style={{ position:'relative',top: '3vh', marginLeft:'6vw'}}>
                <Select defaultValue='' style={{ width: '20%' }}>
                <Option value='' disabled hidden>
                          Select Reporting Manager
                        </Option>
                  </Select><br/>
                  <Button  type="primary" style={{marginTop:'1vh',marginLeft:'2.5vw'}}>Assign Reporting Manager</Button>  
                </Form.Item>
          </Content>
        </Layout>
      );
    };

export default Usermapping;