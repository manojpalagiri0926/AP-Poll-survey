import React, { useState, useEffect } from 'react';
import { Content } from 'antd/es/layout/layout';

import { Layout, Select, Button, Input ,Form,Space} from 'antd';
import { PlusSquareOutlined ,DownOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
const { Header } = Layout;
const { Option } = Select;


const VoterSurvey = () => {
  const [formData, setFormData] = useState({
    voterId: '',
    mobile: '',
    residentialAddress: '',
    surveyPlus: '',
    issue: '',
    reason: '',
  });

  const [partyOptions, setPartyOptions] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    // Fetch party options from the API
    const fetchPartyOptions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/getparty/');
        if (response.ok) {
          const data = await response.json();
          setPartyOptions(data); // Assuming the API returns an array of objects with a 'name' property
        } else {
          console.error('Failed to fetch party options');
        }
      } catch (error) {
        console.error('Error fetching party options:', error);
      }
    };

    fetchPartyOptions();
  }, []); // Empty dependency array ensures the effect runs once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/post_tiket/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Survey submitted successfully!');
        setShowSuccessPopup(true);

        // Refresh the page after a delay (e.g., 2 seconds)
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error('Failed to submit survey');
      }
    } catch (error) {
      console.error('Error during survey submission:', error);
    }
  };

  return (
<Layout style={{ background: '#F5F5F5'}}>
    <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'#113857' }}>

      <h3>Voter Survey</h3>
  

</Header>
  <Content class='container-fluid'> 
  
    <div className='ml-3 mx-auto'>
      <Form className='container lg-5 row justify-content-center '>
      
        <Form.Item
          name={"voterId"} 
          label="VOTER ID"
          rules={[{ required: true }]}
          value={formData.voterId}
          onChange={handleChange}
          className='col-xs-6 col-sm-7 text-left mt-4'>
          <Input />
        </Form.Item>

        <Form.Item
          name={"mobile"}
          label="MOBILE NUMBER"
          rules={[{ required: true }]}
          value={formData.mobile}
          onChange={handleChange}
          className='col-12 col-md-7'>
           <Input type="number" />
        </Form.Item>

        <Form.Item  
          name={"residentialAddress"}
          label="RESIDENTIAL ADDRESS"
          rules={[{ required: true }]}
          value={formData.residentialAddress}
          onChange={handleChange}
          className='col-12 col-md-7'>
          <Input />
        </Form.Item>

        <Form.Item
          name={"surveyPlus"}
          label="SURVEY PULSE"
          value={formData.surveyPlus}
          onChange={handleChange}
          rules={[{ required: true }]}
          className='col-12 col-md-7'>
           <Select >
              <Option value="select option">Select option</Option>
              {partyOptions.map((party) => (
                  <Option key={party.name} value={party.name}>
                    {party.name}
                  </Option>
                ))}
            </Select>
            </Form.Item>

        <Form.Item
          name={"issue"}
          label="ISSUE"
          rules={[{ required: true }]}
          value={formData.issue}
          onChange={handleChange}
          className='col-xs-7 col-sm-7'>
          <Input />
        </Form.Item> 

        <Form.Item
          name={"reason"}
          label="REASON"
          rules={[{ required: true }]}
          value={formData.reason}
          onChange={handleChange}
          className='col-12 col-md-7'>
          <Input />
        </Form.Item>

        <div className='submit d-flex justify-content-center mt-4'>
          <Button  type="primary" onClick={handleSubmit} >
            Submit
          </Button>
          </div>
      </Form>
    </div>
    {showSuccessPopup && (
        <div className="popup">
          <p>Data submitted successfully!</p>
        </div>
      )}
   
    
  </Content>
  </Layout>
  );
};

export default VoterSurvey;