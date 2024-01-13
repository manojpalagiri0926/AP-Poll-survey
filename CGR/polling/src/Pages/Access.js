import React from 'react';
import { Layout,Table, Checkbox, Button, Form, Row, Col,Space } from 'antd';
const { Content, Header } = Layout;

//import './AccessPermissions';

const AccessPermissions = () => {
  const data = [
    { 
    key: '0',
     id: 'ID0',
     userType: 'ADMIN',
     add: false,
     update: false,
     view: false, 
     delete: false, 
     reports: false 
    },
    { 
     key: '1',
     id: 'ID1', 
     userType: 'SUPER USER', 
     add: false, 
     update: false, 
     view: false, 
     delete: false, 
     reports: false 
   
    }, { 
    key: '2', 
    id: 'ID2',
    userType: 'CHIEF MINISTER',
    add: false, 
    update: false,
    view: false,
    delete: false, 
    reports: false 
  },
    { 
    key: '3', 
    id: 'ID3',
    userType: 'STATE LEADERS', 
    add: false, 
    update: false, 
    view: false, 
    delete: false, 
    reports: false 
  },
    { 
      key: '4',
     id: 'ID4',
     userType: 'CONSTITUENCY MLAs', 
     add: false, 
     update: false, 
     view: false, 
     delete: false, 
     reports: false 
    },
    { 
     key: '5',
     id: 'ID5', 
     userType: 'MANDAL CONVENER',
     add: false, 
     update: false, 
     view: false,
     delete: false,
     reports: false 
    },
    { key: '6',
     id: 'ID6', 
     userType: 'PRO', 
     add: false, 
     update: false, 
     view: false, 
     delete: false, 
     reports: false 
    },
    { 
      key: '7', 
      id: 'ID7', 
      userType: 'APRO', 
      add: false, 
      update: false, 
      view: false, 
      delete: false, 
      reports: false 
    },
    { 
    key: '8', 
    id: 'ID8', 
    userType: 'BOOTH INCHARGE', 
    add: false, 
    update: false, 
    view: false, 
    delete: false, 
    reports: false 
  },
    { 
    key: '9', 
    id: 'ID9', 
    userType: 'VOLENTEERS&GRUHA SARADHULU', 
    add: false, 
    update: false, 
    view: false, 
    delete: false, 
    reports: false 
  },
  ];

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'USER TYPE', dataIndex: 'userType', key: 'userType' },
    { title: 'ADD', dataIndex: 'add', key: 'add', render: (text, record) => <Checkbox defaultChecked={text} /> },
    { title: 'UPDATE', dataIndex: 'update', key: 'update', render: (text, record) => <Checkbox defaultChecked={text} /> },
    { title: 'VIEW', dataIndex: 'view', key: 'view', render: (text, record) => <Checkbox defaultChecked={text} /> },
    { title: 'DELETE', dataIndex: 'delete', key: 'delete', render: (text, record) => <Checkbox defaultChecked={text} /> },
    { title: 'REPORTS', dataIndex: 'reports', key: 'reports', render: (text, record) => <Checkbox defaultChecked={text} /> },
  ];

  return (
    <>
     <Layout style={{ background: '#F5F5F5' }}>
     <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'blue' }}>
<Space>
        {/*}  <PlusSquareOutlined style={{ fontSize: '20px' }} />*/}
          <h5>Access & Permissions</h5>
        </Space>

</Header>
      <Content className='container-fluid'>
      
      
      <Form>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={18} lg={16} xl={12}>
          <h4 style={{ textAlign: 'center' }}>ACCESS & PERMISSIONS</h4>
            <Table
              dataSource={data}
              columns={columns}
              bordered
              pagination={false}
              scroll={{ x: true }} // Enable horizontal scrolling
              components={{
                header: {
                  cell: (props) => <th style={{ backgroundColor: '#113857', color: 'white', textAlign: 'center' }}>{props.children}</th>,
                },
              }}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Button
            className="submit-btn"
            type="primary"
            htmlType="submit"
            style={{ marginTop: '1rem' }}
          >
            SUBMIT
          </Button>
        </Row>
      </Form>
    
    </Content>
  </Layout>
 </> 
  );
};

export default AccessPermissions;
