import React, { useEffect, useState } from 'react';
import { Layout, Form, Table, Button, Select, message ,Checkbox,Row,Col} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../Styles/Surveyreport.css'; 

const { Content } = Layout;
const { Option } = Select;

function Surveyreport() {
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
            title: "Constituency Name",
            dataIndex: "constituency name",
            key: "constituency name",
            
          },
          {
            title: "YCP No of Votes",
            dataIndex: "ycp no of votes",
            key: "ycp no of votes",
          },
          {
            title: "YCP Votes %",
            dataIndex: "ycp votes %",
            key: "ycp votes %",
          },
          {
            title: " TDP No of votes",
            dataIndex: "ycp votes %",
            key: "ycp votes %",
          },
          {
            title: "TDP Votes %",
            dataIndex: "tdp votes %",
            key: "tdp votes %",
          },
          {
            title: " JSP No of votes",
            dataIndex: "jsp votes %",
            key: "jsp votes %",
          },
          {
            title: "JSP Votes %",
            dataIndex: "jsp votes %",
            key: "jsp votes %",
          },
          {
            title: " BJP No of votes",
            dataIndex: "bjp votes %",
            key: "bjp votes %",
          },
          {
            title: "BJP Votes %",
            dataIndex: "bjp votes %",
            key: "bjp votes %",
          },
          {
            title: " Others No of votes",
            dataIndex: "others votes %",
            key: "others votes %",
          },
          {
            title: "Others Votes %",
            dataIndex: "others votes %",
            key: "others votes %",
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
        <Content className='container-fluid'>
          <h3 style={{ textAlign: 'center' }}>SURVEY REPORT</h3>
          <div className='Sachivalayam'>
            <Form layout='inline'>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6} lg={6}>
                  <Form.Item name={'constituency'} label='Constituency'>
                    <Select defaultValue='' style={{ width: '100%' }}>
                      <Option value='' disabled>
                        Chandragiri
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                  <Form.Item name={'mandal'} label='Mandal' style={{ maxWidth: '500px' }}>
                    <Select defaultValue='' style={{ width: '80%' }}>
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
                <Col xs={24} sm={12} md={6} lg={6}>
                  <Form.Item name={'division'} label='Division' style={{ maxWidth: '500px' }}>
                    <Select defaultValue='' style={{ width: '100%' }}>
                      <Option value='' disabled hidden>
                        All
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                  <Form.Item name={'sachivalaym'} label='Sachivalayam' style={{ maxWidth: '500px' }}>
                    <Select defaultValue='' style={{ width: '100%' }}>
                      <Option value='' disabled hidden>
                        All
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                {/* Next row */}
                <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item name={'partnumber'} label='Part Number'>
                <Select defaultValue='' style={{ width: '100%' }}>
                  <Option value='' disabled hidden>
                    All
                  </Option>
                </Select>
              </Form.Item>
            </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item name={'selectuser'} label='Select User' style={{ maxWidth: '500px' }}>
                <Select defaultValue='' style={{ width: '100%' }}>
                  <Option value='' disabled hidden>
                    All
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item name={'selectnextleveluser'} label='Select Next Level User' style={{ maxWidth: '500px' }}>
                <Select defaultValue='' style={{ width: '130%' }}>
                  <Option value='' disabled hidden>
                    All
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              {/* Place Search button here */}
              <Form.Item>
                <Button type="primary" style={{ marginTop: '0vh', marginLeft: '7vw' }}>Search</Button>
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
            style={{ borderColor: 'blue', position: 'relative', top: '5vh', width: '100vw' }}
            className='custom-table'
            components={{
              header: {
                cell: (props) => <th style={{ backgroundColor: '#113857', color: 'white' }}>{props.children}</th>,
              },
            }}
          />
        </Content>
      );
    }
    
    export default Surveyreport;