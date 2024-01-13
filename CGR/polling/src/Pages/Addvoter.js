import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, Space, notification, DatePicker } from 'antd';
import axios from 'axios';
import { PlusSquareOutlined ,DownOutlined } from '@ant-design/icons';
import validator from 'validator';
import {Layout} from 'antd';
import './Sachivalayam';


const { Content, Header } = Layout;
const { Option } = Select;

const AddVoter = () => {
    
  const [village,setVillage] = useState("")
  const [partno,setPartNo] = useState(0)
  const [partserialno,setPartSerialNumber] = useState(0)
  const [voterID,setVoterID] = useState("")
  const [name, setName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [mobile, setMobile] = useState(0);
  const [address, setAddress] = useState("");

  const onFinish = async () => {    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/addvoter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Village: village,
          Part_No : partno,
          Part_Serial_No : partno,
          Voter_ID : voterID,
          name: name,
          Father_or_husband_Name : fathername,
          Gender: gender,
          age: age,
          Mobile: mobile,
          House_Number: address
        }),
      });
          //if form submitted successfully then=>
          if (response.ok) {
            alert('Form submitted successfully');
            // To reset form after successful submission
            setVillage("");
            setPartNo(0);
            setPartSerialNumber(0)
            setVoterID("")
            setName("");
            setFatherName("");
            setGender("");
            setAge(0);
            setMobile(0);
            setAddress("");
            
          } //if form fails to submit
           else {
            console.error('Error submitting form');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
        
      const [form] = Form.useForm();


  // Validation for Email
  const validateEmail = (rule, value) => {
    if (value && !validator.isEmail(value)) {
      return Promise.reject('Please enter a valid Email!');
    }
    return Promise.resolve();
  };

  // Validation for Phone Number
  const validatePhone = (rule, value) => {
    if (value && !validator.isMobilePhone(value)) {
      return Promise.reject('Please enter a valid Mobile Number!');
    }
    return Promise.resolve();
  };

  return (
    
     <Layout style={{ background: '#F5F5F5' }}>
    <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'#113857' }}>
    <Space>
          <PlusSquareOutlined style={{ fontSize: '15px' }} />
          <h5>Add Voter</h5>
        </Space>
</Header>
    <Content class='container-fluid'>
    <div className='AddVoter'>
  
    <Form 
     onFinish={onFinish} 
     layout="vertical"
     style={{ 
        textAlign:'center'
     }}>
    
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6}>
      <Form.Item label="VILLAGE" name="VILLAGE" rules={[{ required: true, message: 'Please enter Village Name' }]}>
            <Input onChange={(e)=> setVillage(e.target.value)} />
      </Form.Item>
      </Col>
       
       
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item
            label="PART NUMBER"
            name="PART NUMBER"
            rules={[{ required: true, message: 'Please enter part Number' }]}
          >
            <Input type="number" onChange={(e)=> setPartNo(e.target.value)}/>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item
            label="PART SERIAL NO"
            name="part serial no"
            rules={[{ required: true, message: 'Please enter part serial no' }]}
          >
            <Input type="number" onChange={(e)=> setPartSerialNumber(e.target.value)} />
          </Form.Item>
        </Col>
   
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item label="VOTER ID NO" name="VOTER ID NO" rules={[{ required: true, message: 'Please enter Voter Id No' }]}>
            <Input onChange={(e)=> setVoterID(e.target.value)} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item label="VOTER NAME" name="VOTER NAME" rules={[{ required: true, message: 'Please enter Voter Name' }]}>
          <Input onChange={(e)=> setName(e.target.value)} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
        <Form.Item label="FATHER/HUSBAND NAME" name="FATHER/HUSBAND NAME" rules={[{ required: true, message: 'Please enter father/husband name' }]}>
        <Input onChange={(e)=> setFatherName(e.target.value)} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
        <Form.Item label="GENDER" name="GENDER" rules={[{ required: true, message: 'Please select gender' }]}>
            
          <Select onChange={(value)=>setGender(value)}
          suffixIcon={<DownOutlined style={{ color: 'blue' }}/>} >
              <Option value="Male">MALE</Option>
              <Option value="Female">FEMALE</Option>
              <Option value="Third Gender">TRANSGENDER</Option>
             
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item
            label="AGE"
            name="age"
            rules={[{ required: true, message: 'Please enter Date of Birth' }]}
          >
           <Input 
           style={{ width: '100%' }} placeholder='AGE'onChange={(e)=> setAge(e.target.value)}/>
           
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item
            label="MOBILE NUMBER"
            name="MOBILE NUMBER"
            rules={[{ required: true, message: 'Please enter Mobile Number' }, { validator: validatePhone }]}
          >
          <Input type="number" onChange={(e)=> setMobile(e.target.value)} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item label="ADDRESS" name="ADDRESS" rules={[{ required: true, message: 'Please enter Voter address' }]}>
          <Input onChange={(e)=> setAddress(e.target.value)} />
          </Form.Item>
        </Col>
      
        </Row>
      <Row justify="center">

          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        
      </Row>
    </Form>
    </div>
    </Content>
    </Layout>
    
              
  );
};

export default AddVoter;