import React from 'react';
import { Content } from 'antd/es/layout/layout';
import '../Styles/Addsach.css'
import { Layout, Select, Button, Input ,Form,Space} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlusSquareOutlined } from '@ant-design/icons';

const { Header} = Layout;
const { Option } = Select;

function Partsnew() {
  return (
    
      <Layout style={{ background: '#F5F5F5'}}>
        
        <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'blue' }}>
        <Space>
          <PlusSquareOutlined style={{ fontSize: '14px' }} />
          <h5>Add Parts</h5>
        </Space>

        </Header>
      <Content class='container-fluid'> 
        <div className='ml-3 mx-auto'>
          <Form className='container lg-5 row justify-content-center '>
          <h3 className="text-center mt-4"> PartNumber-New</h3>
            <Form.Item
              name={"constituency"}
              label="Constituency"
              rules={[{ required: true }]}
              className='col-xs-6 col-sm-7 text-left mt-4'>
              <Select defaultValue="" style={{marginLeft:'2.7vw',width:'25vw'}} >
                <Option value="" disabled >Chandragiri</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={"mandalName"}
              label="Mandal Name"
              rules={[{ required: true }]}
              className='col-xs-7 col-sm-7'>
              <Select placeholder="Select mandal" style={{marginLeft:'2.3vw',width:'25vw'}}>
                <Option value="mandal1">Mandal 1</Option>
                <Option value="mandal2">Mandal 2</Option>
                <Option value="mandal1">Mandal 3</Option>
                <Option value="mandal2">Mandal 4</Option>
                <Option value="mandal1">Mandal 5</Option>
                <Option value="mandal2">Mandal 6</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={"division name"}
              label="Division Name"
              rules={[{ required: true }]}
              className='col-xs-7 col-sm-7'>
              <Select placeholder="Select division" style={{marginLeft:'2.2vw',width:'25vw'}}>
                <Option value="mandal1">Mandal 1</Option>
                <Option value="mandal2">Mandal 2</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={"sachivalayam name"}
              label="Sachivalayam Name"
              rules={[{ required: true }]}
              className='col-xs-7 col-sm-7'>
              <Select placeholder="Select sachivalayam" style={{width:'25vw'}}>
                <Option value="mandal1">sachivalayam 1</Option>
                <Option value="mandal2">sachivalayam2</Option>
              </Select>
              </Form.Item>

              <Form.Item
                label="PartNo"
                name="PartNo"
                rules={[{ required: true }]}
                className='col-xs-7 col-sm-7'>
                <Input style={{marginLeft:'5.3vw',width:'25vw'}}  />
              </Form.Item>

              <Form.Item
                label="Male"
                name="Male"
                rules={[{ required: true }]}
                className='col-xs-7 col-sm-7'>
                <Input style={{marginLeft:'6.1vw',width:'25vw'}} />
              </Form.Item>

              <Form.Item
                label="Female"
                name="Female"
                rules={[{ required: true }]}
                className='col-xs-7 col-sm-7'>
                <Input style={{marginLeft:'5.2vw',width:'25vw'}}/>
              </Form.Item>

              <Form.Item
                label="3rd Gender"
                name="3rd Gender"
                rules={[{ required: true }]}
                className='col-xs-7 col-sm-7'>
                <Input style={{marginLeft:'3.5vw',width:'25vw'}}/>
              </Form.Item>

              <Form.Item
                label="Total voters"
                name="totalVoters"
                rules={[{ required: true}]}
                className='col-xs-5 col-sm-7'>
                <Input style={{marginLeft:'3.5vw',width:'25vw'}} />
              </Form.Item>
            <div className='submit d-flex justify-content-center mt-4'>
              <Button  type="primary" id='btn' >
                Submit
              </Button>
              </div>
          </Form>
        </div> 
      </Content>
      </Layout>
   
  );
}

export default Partsnew;