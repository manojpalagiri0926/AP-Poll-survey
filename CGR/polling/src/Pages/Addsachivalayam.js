import React, { useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import '../Styles/Sachivalayam.css';
import { Layout, Select, Button, Input, Form,Space } from 'antd';
import axios from 'axios';
import { PlusSquareOutlined,DownOutlined } from '@ant-design/icons';


const { Header } = Layout;
const { Option } = Select;

function SachivalayamNew() {
  const [voters, setVoters] = useState([]);
  const [filteredVoters, setFilteredVoters] = useState([]);
  const [filters, setFilters] = useState({
    mandals_name: '',
    division_name: '',
    sachivalayamName: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getdivision');
        console.log('Fetched data:', response.data);
        setVoters(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = voters.filter((voter) => {
      return (
        (filters.mandals_name === '' || voter.mandals_name.includes(filters.mandals_name)) &&
        (filters.division_name === '' || voter.division_name.includes(filters.division_name))
      );
    });

    setFilteredVoters(filteredData);
  }, [voters, filters]);

  const getDropdownOptions = (data, key) => {
    const uniqueOptions = [...new Set(data.map((item) => item[key]))];
    return ['', ...uniqueOptions];
  };

  const handleFilterChange = (name, value) => {
    console.log(`Selected ${name}: ${value}`);
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };


  
  const handleSubmit = async (formValues, event) => {
    try {
      const postData = {
        Sachivalayam: formValues.sachivalayamName,
        division_name: formValues.divisionName,
        mandals_name: formValues.mandalName,
        Constituency: 'Chandragiri', 
      };

      const response = await axios.post('http://127.0.0.1:8000/api/postsachivalayam/', postData);
      console.log('Form submitted successfully:', response.data);
  
      setFilters({
        mandals_name: '',
        division_name: '',
        sachivalayamName: '',
      });
  

      alert('Form submitted successfully');

      window.location.reload();
  

      event.preventDefault();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display error message if submission fails
      alert('Error submitting form. Please try again.');
    }
  };
  
  
  

  return (
    <Layout style={{ background: '#F5F5F5'}}>
    <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'#113857' }}>
<Space>
      <PlusSquareOutlined style={{ fontSize: '20px' }} />
      <h3>Add Sachivalayam</h3>
    </Space>

</Header>
    <Content style={{ background: '#fff', border: '5px solid #ddd', top: '10vh', width: '60%', margin: '10% 10% 0% 15%', padding: '0% 0% 0% 5%' }}>
      
      <Form className='container' onFinish={(formValues, event) => handleSubmit(formValues, event)}>
  {/* ... rest of the form */}
        <Form.Item name="constituency" label="Constituency">
          <Select defaultValue="Chandragiri" className='selectStyle' showSearch>
            <Option value="Chandragiri">Chandragiri</Option>
          </Select>
        </Form.Item>
        <Form.Item name="mandalName" label="Mandal Name">
          <Select
            className='selectStyle'
            value={filters.mandals_name}
            onChange={(value) => handleFilterChange('mandals_name', value)}
          >
            <Option value="">Select mandal_name</Option>
            {getDropdownOptions(voters, 'mandals_name').map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="divisionName" label="Division Name">
          <Select
            className='selectStyle'
            value={filters.division_name}
            onChange={(value) => handleFilterChange('division_name', value)}
          >
            <Option value="">Select division_name</Option>
            {getDropdownOptions(voters, 'division_name').map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="sachivalayamName" label="Sachivalayam Name">
          <Input className='input' onChange={(event) => handleFilterChange('sachivalayamName', event.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
            
          </Button>
        </Form.Item>
      </Form>
    </Content>
    </Layout>
  );
}

export default SachivalayamNew;