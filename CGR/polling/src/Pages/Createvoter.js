import React from 'react';
import { Form, Input, Select, Button, Space } from 'antd';
import { Layout } from 'antd';
import { PlusSquareOutlined, DownOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const { Content, Header } = Layout;
const { Option } = Select;

function CreateVoter() {

  //storing dynamic values into respected variables using useState hook
  const [name, setName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [partno, setPartNo] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);

  //Posting data using api call and passing values
  const onFinish = async () => {    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/postcreateuser/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: name,
          FathersOrHusbandsName: fathername,
          Gender: gender,
          Age: age,
          MobileNumber: phone,
          Address: address,
          partno: partno,
        }),
      });

      //if form submitted successfully then=>
      if (response.ok) {
        alert('Form submitted successfully');
        // To reset form after successful submission
        setName("");
        setFatherName("");
        setGender("");
        setAge(0);
        setPartNo("");
        setAddress("");
        setPhone(0);
        window.location.reload();
      } //if form fails to submit
       else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout style={{ background: '#F5F5F5' }}>
      <Header style={{ background: '#fff', textAlign: 'left', padding: '5px', border: '3px solid #dedddd', boxShadow: '5px #dedddd', color: 'blue' }}>
        <Space>
          <PlusSquareOutlined style={{ fontSize: '14px' }} />
          <h5>Request Voter</h5>
        </Space>
      </Header>
      <Content className='container-fluid'>

        <div className='CreateVoter'>

          <Form
            onFinish={onFinish}
            layout="vertical"
            style={{
              textAlign: 'center',
            }}
          >
            <div className="row mb-3">
              <div className="col-lg-4 mb-3">
                <Form.Item
                  name="fullName"
                  label="FULL NAME:"
                  rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                  <Input placeholder="Full Name" onChange={(e) => { setName(e.target.value) }} />
                </Form.Item>
              </div>
              <div className="col-lg-4 mb-3">
                <Form.Item
                  name="fatherName"
                  label="FATHER/HUSBAND NAME:"
                  rules={[{ required: true, message: 'Please input father/husband name!' }]}
                >
                  <Input placeholder="Father/Husband Name" onChange={(e) => { setFatherName(e.target.value) }} />
                </Form.Item>
              </div>
              <div className="col-lg-4 mb-3">
                <Form.Item
                  label="AGE"
                  name="age"
                  rules={[{ required: true, message: 'Please enter age' }]}
                >
                  <Input placeholder=" AGE" onChange={(e) => { setAge(e.target.value) }} />
                </Form.Item>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-4 mb-3">
                <Form.Item
                  name="gender"
                  label="GENDER:"
                  rules={[{ required: true, message: 'Please select your gender!' }]}
                >
                  <Select placeholder="Select Gender" onChange={(value) => { setGender(value) }} suffixIcon={<DownOutlined style={{ color: 'blue' }} />}>
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Third Gender">Third Gender</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-lg-4 mb-3">
                <Form.Item
                  name="partNo"
                  label="PART NO:"
                  rules={[{ required: true, message: 'Please input booth number!' }]}
                >
                  <Input type="number" placeholder="Part No" onChange={(e) => { setPartNo(e.target.value) }} />
                </Form.Item>
              </div>
              <div className="col-lg-4 mb-3">
                <Form.Item
                  name="address"
                  label="ADDRESS:"
                  rules={[{ required: true, message: 'Please input your address!' }]}
                >
                  <Input placeholder="Address" onChange={(e) => { setAddress(e.target.value) }} />
                </Form.Item>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-4 mb-3">
                <Form.Item
                  name="phoneNo"
                  label="PHONE NO:"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input type="number" placeholder="Phone No" onChange={(e) => { setPhone(e.target.value) }} />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>


        </div>

      </Content>
    </Layout>

  );
}

export default CreateVoter;