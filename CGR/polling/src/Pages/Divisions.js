import React, { useState,useEffect } from 'react';
import {message, Table, Button, Form, Select, Layout , Modal, Input,Space} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../Styles/Sachivalayam.css'

import { Link } from 'react-router-dom';

const { Content,Header } = Layout;
const { Option } = Select;

const Divisions = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingMandal, setEditingMandal] = useState(null);
  const [deletingMandal, setDeletingMandal] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [filteredDivisions, setFilteredDivisions] = useState([]);
  const [filters, setFilters] = useState({
    mandals_name: '',
  });
  const [selectedRecord, setSelectedRecord] = useState(null);


  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/getdivision/');
      const data = await response.json();
      setDataSource(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  

  const handleEditModalOk = async () => {
    try {
      // Make an axios PUT request to update the data on the server
      await axios.put(`http://127.0.0.1:8000/api/update/${editedRow.division_id}`, editedRow);

      // Update the view with the updated data
      const updatedDataSource = dataSource.map((item) =>
        item.division_id === editedRow.division_id ? editedRow : item
      );

      setDataSource(updatedDataSource);

      // Close the modal
      setEditModalVisible(false);

      // Optionally, show a success message
      message.success('Record updated successfully');
    } catch (error) {
      console.error('Update failed:', error);

      // Optionally, show an error message
      message.error('Update failed. Please try again.');
    }
  };

  const [editedRow, setEditedRow] = useState({});
  const [editedRowIndex, setEditedRowIndex] = useState(null);

  const columns = [
      
      {
        title: 'Serial No',
        dataIndex: 'serial',
        key: 'serial',
        render: (text, record, index) => (filteredDivisions.indexOf(record) + 1),
      },
    {
      title: 'MandalName',
      dataIndex: 'mandals_name',
      key: 'mandals_name',
    },
    {
      title: 'DivisionName',
      dataIndex: 'division_name',
      key: 'division_name',
    },
    {
        key: 'edit',
        title: 'Edit',
        render: (_, record, index) => (
          <EditOutlined
            onClick={() => handleEditModalOk(record, index)}
            style={{ color: 'blue', marginLeft: 12 }}
          />
        ),
      },
    {
      key: 'delete',
      title: 'Delete',
      render: (record) => <DeleteOutlined style={{ color: 'blue', marginLeft: 12 }} onClick={() => showDeleteConfirm(record.division_id)} />,
    },
  ];

  const handleEditClick1 = (record, index) => {
    setEditedRow({ ...record });
    setEditedRowIndex(index);
    setEditModalVisible(true);
    console.log(editedRow)
  }

  const handleEditModalCancel = () => {
    setEditModalVisible(false);
    console.log('Editing Canceled');
  };

  

  

  const handleAddRow = () => {
    const newRow = {
      mandalName: 'New Mandal',
      divisionName: 'New Division',
    };
    setDataSource([...dataSource, newRow]);
  };
  const handleEditOk = () => {
    const updatedDataSource = dataSource.map((item) =>
      item.key === editingMandal.key ? editingMandal : item
    );
    setDataSource(updatedDataSource);
    setEditingMandal(null);
    setEditModalVisible(false);
  };
  const handleDeleteOk = () => {
    const updatedDataSource = dataSource.filter(
      (item) => item.key !== deletingMandal.key
    );
    setDataSource(updatedDataSource);
    setDeletingMandal(null);
    setDeleteModalVisible(false);
  };

  const handleCancel = () => {
    setEditingMandal(null);
    setDeletingMandal(null);
    setEditModalVisible(false);
    setDeleteModalVisible(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleFilterChange = (value, key) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };
  useEffect(() => {
    const filteredData = dataSource.filter((division) => {
      return (
        (filters.mandals_name === '' || division.mandals_name.includes(filters.mandals_name))
      );
    });

    setFilteredDivisions(filteredData);
  }, [dataSource, filters]);

  const getDropdownOptions = (data, key) => {
    const options = [...new Set(data.map((item) => item[key]))];
    options.unshift('');
    return options;
  };

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      icon: <DeleteOutlined />,
      content: 'This action cannot be undone.',
      onOk: () => handleDelete(id),
    });
    console.log(id);
  }

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete(`http://localhost:8000/api/deletedivision/${id}`);
      console.log("Revanth")
      setDataSource((prevData) => prevData.filter((record) => record.division_id !== id));
      alert("Data Successfully Deleted!!!")
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };


  return (
    
      <Layout style={{ background: '#F5F5F5' }}>
        <Header style={{ background: '#fff', textAlign: 'left',padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'blue' }}>
<Space>
          
          <h5>Divisions</h5>
        </Space>

</Header>
        <Content class='container-fluid' >
         
            <div className='Sachivalayam'>
              <Form layout='inline'>
                <Form.Item name={'constituency'} label='Constituency'>
                  <Select defaultValue='' style={{ width: '100%' }}>
                    <Option value='' disabled>
                      Chandragiri
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item name={'mandal'} label='Mandal' style={{ maxWidth: '500px' }}>
                <Select
              value={filters.mandals_name}
              onChange={(value) => handleFilterChange(value, 'mandals_name')}
              style={{ width: 200 }}
            >
              {getDropdownOptions(filteredDivisions, 'mandals_name').map((option, index) => (
                <Option key={index} value={option}>
                  {option === '' ? 'Select mandals_name' : option}
                </Option>
              ))}
            </Select>
                </Form.Item>
              </Form>
            </div>
            <Table 
            dataSource={filteredDivisions} 
            columns={columns} 
            loading={loading}
            bordered
            scroll={{ x: '100%'}}    
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
                <Link to = 'adddiv/'>Add</Link> 
              </Button>
              <Button type='primary' className='upload-btn'>Upload</Button>
            </div>
            <Modal
                title='Edit Row'
                visible={editModalVisible}
                onOk={handleEditModalOk}
                onCancel={handleEditModalCancel}>
                <Form>
                    
                    <Form.Item label='Division Name'>
                    <Input
                        value={editedRow.divisionName}
                        onChange={(e) => setEditedRow({ ...editedRow, divisionName: e.target.value })}
                    />
                    </Form.Item>
                </Form>
        </Modal>
         </Content>
       </Layout>
   
   );
 };

 export default Divisions;