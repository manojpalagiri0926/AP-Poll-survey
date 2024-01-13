import React, { useEffect, useState } from 'react';
import { Layout, Form, Table, Button, Select, message ,Checkbox,Row,Col,Space} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../Styles/Sachivalayam.css'; 

const { Content,Header } = Layout;
const { Option } = Select;

function VVmapping() {
    const [dataSource, setDataSource] = useState([
        {
            mandalName: "district1",
            divisionName: "mandal1",
            sachivalayamName: "panchayat1",
            partnumber: "101",
          },
          {
            mandalName: "district2",
            divisionName: "mandal2",
            sachivalayamName: "panchayat2",
            partnumber: "102",
          },
          {
            mandalName: "district3",
            divisionName: "mandal3",
            sachivalayamName: "panchayat3",
            partnumber: "103",
          },
      ]);
    
      const columns = [
        {
            title: "Voter ID",
            dataIndex: "Voter ID",
            key: "voterid",
            
          },
          {
            title: "Voter Name",
            dataIndex: "Voter Name",
            key: "votername",
          },
          {
            title: "Father Name",
            dataIndex: "Father Name",
            key: "fathername",
          },
          {
            title: "Cell#",
            dataIndex: "Cell#",
            key: "cell#",
          },
          {
            title: "Check Box",
            dataIndex: "Check Box",
            key: "checkbox",
            render: (text, record) => <Checkbox defaultChecked={text} />
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
          <h5>Voter & Volunteer Mapping</h5>
        </Space>

</Header>
          <Content className='container-fluid'>
          <h3 style={{textAlign:'center'}}>Voter And Volunteer Mapping</h3>
          <div className='Sachivalayam'>     
             <Form layout='inline'>
                <Row gutter={[16, 16]}>
                 <Col xs={24} sm={24} md={12} lg={8}>
                    <Form.Item name={'constituency'} label='Constituency'>
                      <Select defaultValue='' style={{ width: '100%' }}>
                        <Option value='' disabled>
                          Chandragiri
                        </Option>
                      </Select>
                    </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8}>
    
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
                    <Col xs={24} sm={24} md={12} lg={8}>
                    <Form.Item name={'division'} label='Division' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '100%' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>
                        
                      </Select>
                    </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8}>
    
                    <Form.Item name={'sachivalaym'} label='Sachivalayam' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '100%' }}>
                        <Option value='' disabled hidden>
                          All
                        </Option>
                        
                      </Select>
                    </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8}>
    
                    <Form.Item name={'partnumber'} label='PartNumber' style={{ maxWidth: '500px' }}>
                      <Select defaultValue='' style={{ width: '100%' }}>
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
            <Form.Item name='Select Volunteer'  rules={[{ required: true }]} style={{ position:'relative',top: '2vh', marginLeft:'6vw'}}>
                <Select defaultValue='' style={{ width: '20%' }}>
                  <Option value='' disabled hidden>
                          Select Volunteer
                        </Option>
                    
                  </Select><br/>
                  <Button  type="primary" style={{marginTop:'1vh',marginLeft:'4.8vw'}}>Assign Volunteer</Button>
                </Form.Item>
             <Form.Item name='Select Gruhasarathulu'  rules={[{ required: true }]} style={{ position:'relative',top: '3vh', marginLeft:'6vw'}}>
                <Select defaultValue='' style={{ width: '20%' }}>
                <Option value='' disabled hidden>
                          Select Gruhasarathulu
                        </Option>
                  </Select><br/>
                  <Button  type="primary" style={{marginTop:'1vh',marginLeft:'2.5vw'}}>Assign Gruhasarathulu</Button>  
                </Form.Item>
          </Content>
        </Layout>
      );
    };

export default VVmapping;