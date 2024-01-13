import React, { useState, useEffect } from 'react';
import { Table, Input, Select,Checkbox ,Space,Layout} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




const { Option } = Select;
const { Header } = Layout;

function Tickets() {
  const [voters, setVoters] = useState([]);
  const [filteredVoters, setFilteredVoters] = useState([]);
  const [filters, setFilters] = useState({
    Mandal: '',
    Voter_ID: '',
    Sachivalayam: '',
    Division:'',
    Part_No: '',
    Part_Serial_No: '',
    ageFrom: '',
    ageTo: '',
    gender: '', // Added gender filter
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getvoters/');
        if (Array.isArray(response.data)) {
          setVoters(response.data);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const ageInRange = (voter) => {
    return (
      (filters.ageFrom === '' || voter.age >= parseInt(filters.ageFrom, 10)) &&
      (filters.ageTo === '' || voter.age <= parseInt(filters.ageTo, 10))
    );
  };

  const handleGenderFilter = (gender) => {
    setFilters((prevFilters) => ({ ...prevFilters, gender }));
  };

  useEffect(() => {
    const filteredData = voters.filter((voter) => {
      return (
        (filters.Mandal === '' || voter.mandals_name === filters.Mandal) &&
        (filters.Division === '' || voter.division_name === filters.Division) &&
        (filters.Voter_ID === '' || voter.Voter_ID.includes(filters.Voter_ID)) &&
        (filters.Sachivalayam === '' || voter.Sachivalayam_name === filters.Sachivalayam) &&
        (filters.Part_No === '' || (typeof voter.Part_No === 'number' && voter.Part_No === parseInt(filters.Part_No, 10))) &&
        (filters.Part_Serial_No === '' || voter.Part_Serial_No === filters.Part_Serial_No) &&
        ageInRange(voter) &&
        (filters.gender === '' || voter.Gender.trim() === filters.gender.trim())
      );
    });

    setFilteredVoters(filteredData);
  }, [voters, filters]);

  const getDropdownOptions = (data, key) => {
    const uniqueOptions = Array.isArray(data) ? ['', ...new Set(data.map((item) => item[key]))] : [''];
    return uniqueOptions;
  };

  const handleFilterChange = (value, name) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };


  const handleUpdate = (record) => {
    // update FuncTion butTon
    console.log('Update record:', record);
  };
  const columns = [
      { title: 'Ticket ID', dataIndex: 'ticketid', key: 'ticketid' },
    { title: 'Voter ID', dataIndex: 'Voter_ID', key: 'Voter_ID' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Father/Husband Name', dataIndex: 'Father_or_husband_Name', key: 'Father_or_husband_Name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Gender', dataIndex: 'Gender', key: 'Gender' },
    { title: 'Mobile Number', dataIndex: 'phonenumber', key: 'phonenumber' },
    { title: 'House Number', dataIndex: 'House_Number', key: 'House_Number'},
    { title: 'Part No', dataIndex: 'Part_No', key: 'Part_No' },
    { title: 'Sachivalayam', dataIndex: 'Sachivalayam_name', key: 'Sachivalayam_name' },
    { title: 'Division', dataIndex: 'division_name', key: 'division_name' },
    { title: 'Mandal', dataIndex: 'mandals_name', key: 'mandals_name' },
    { title: 'Issue', dataIndex: 'issue', key: 'issue' },
    { title: 'Status', dataIndex: 'status', key: 'status' },

    
  ];

  const totalVoterCount = filteredVoters.length;
  const maleCount = filteredVoters.filter((voter) => voter.Gender === ' Male').length;
  const femaleCount = filteredVoters.filter((voter) => voter.Gender === ' Female').length;
  
  return (
    <>
    <Header style={{ background: '#fff', textAlign: 'left', padding: '5px', border: '2px solid #dedddd', boxShadow: '5px #dedddd', color: 'blue' }}>
        <Space>
          <h4>Tickets</h4>
        </Space>
      </Header>

    
      <div className='container-fluid ml-3'>
        <div className='row '>
          <div className='col-md-8 ml-4'>
            <div className='row mt-5'>
              <div className='col-md-6'>
                <label className='font-weight-bold'>
                  Tickets &nbsp;&nbsp;&nbsp; 
                  <label id='tickets-top-count' className='text-white font-weight-bold rounded border pl-3 pr-3'>
                    {filteredVoters.length}
                  </label>
                </label>
              </div>
              <div id='ticket-list-badge'>
                <hr className='custom-hr' />
              </div>
            </div>
            <div  className="shadow-lg p-1 mb-3 bg-white rounded overflow-auto h-95">
            <Table  
              dataSource={filteredVoters}
              columns={columns}
              bordered
              rowSelection={{
                type: 'checkbox',
                
              }}
            />

</div>
          </div>

          <div className="shadow-lg p-3 col-md-3  bg-white rounded h-55" style={{marginTop:"3rem" ,width:"28rem"}}>
            <div className="row mt-5">
                <div className='col-md-6 col-sm-7 font-weight-bold mb-3'>
                    <FontAwesomeIcon id="filter-icon" icon={faFilter} /><label id="ticket-list-filterby font-weight-bold">Filter by</label>
                </div>
                <div className='col-md-3 font-weight-bold mb- ml-3 '>
                  
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                
                <input
              type="string"
              placeholder="Voter Id"
              className="form-control me-1 p-0 col-md-1 bg-white rounded"
              value={filters.Voter_ID}
              onChange={(e) => handleFilterChange(e.target.value, 'Voter_ID')}
            />
            </div>
                <div className='row'>   
                    <div className='col-md-3'>
                      
                    </div> 
                    <div className='col-md-3'>
                        
                    </div>
                    <div className='col-md-3'>
                      
                    </div>
                    <div className='col-md-3'>
                      
                    </div>
                </div>
                <div className="row mt-5 px-1" style={{marginLeft:"0.2rem"}}>
                  <div className="col-md-6">
                  
                  <label className='font-weight-bold' id="filterbox-mandal">Mandal:</label>
                  <Select
                  className="form-select p-0 col-md-12 bg-white rounded"
                  value={filters.Mandal}
                  onChange={(value) => handleFilterChange(value, 'Mandal')}
                >
                  {getDropdownOptions(voters, 'mandals_name').map((option, index) => (
                    <Option key={index} value={option}>
                      {option === '' ? 'Select Mandal' : option}
                    </Option>
                  ))}
                </Select>
        </div>
        <div className="col-md-6">
          <label className='font-weight-bold' id="filterbox-division">Division:</label>
          <Select
            className="form-select p-0 col-md-12 bg-white rounded"
            value={filters.Division}
            onChange={(value) => handleFilterChange(value, 'Division')}
          >
            {getDropdownOptions(voters, 'division_name').map((option, index) => (
              <Option key={index} value={option}>
                {option === '' ? 'Select Division' : option}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="row mt-3 px-1" style={{marginLeft:"0.3rem"}}>
        <div className="col-md-6">
          <label className="fs-6">Sachivalayam:</label>
          <Select
            className="form-select p-0 col-md-12 bg-white rounded"
            value={filters.Sachivalayam}
            onChange={(value) => handleFilterChange(value, 'Sachivalayam')}
          >
            {getDropdownOptions(voters, 'Sachivalayam_name').map((option, index) => (
              <Option key={index} value={option}>
                {option === '' ? 'Select Sachivalayam' : option}
              </Option>
            ))}
          </Select>
        </div>
        <div className="col-md-6">
          <label className='font-weight-bold' id="filterbox-Partno">Part_No:</label>
          <Select
            className="form-select p-0 col-md-12 bg-white rounded"
            value={filters.Part_No}
            onChange={(value) => handleFilterChange(value, 'Part_No')}
          >
            {getDropdownOptions(voters, 'Part_No').map((option, index) => (
              <Option key={index} value={option}>
                {option === '' ? 'Select Part_No' : option}
              </Option>
            ))}
          </Select>
                  </div>
                </div>
                <div className="row mt-3 px-1" style={{marginLeft:"0.3rem"}}>
                  <div className="col-md-6">
                
                    <label className='font-weight-bold' id="filterbox-Volunteer">Volunteer</label>
              <Select
              showSearch
              className="form-select p-0 col-md-12 bg-white rounded"
              placeholder="Select Part_Serial_No"
              >
            </Select>
                  </div>
                  <div className="col-md-6">
                    <label className='font-weight-bold' id="filterbox-issue">Gender
                    </label>

              <Select
                className="form-select p-0 col-md-12 bg-white rounded"
                value={filters.gender}
                onChange={(value) => handleFilterChange(value, 'gender')}
              >
                <Option value="">Select gender</Option>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
                  </div>


                  <div className="row m-4">
            <div className="col-md-5">
              <label className="fs-5 px-0">Age Range:</label>
              <div className="d-flex">
                <input
                  type="number"
                  placeholder="From"
                  className="form-control me-1 p-0 col-md-1 bg-white rounded"
                  value={filters.ageFrom}
                  onChange={(e) => handleFilterChange(e.target.value, 'ageFrom')}
                />&nbsp;&nbsp;&nbsp;
                <input
                  type="number"
                  placeholder="To"
                  className="form-control p-0 col-md-6 bg-white rounded"
                  value={filters.ageTo}
                  onChange={(e) => handleFilterChange(e.target.value, 'ageTo')}
                />
              </div>
            </div>
                </div>

          
                <div className='row'>
                    <div className="col-md-1">
                    
                        </div>
                        <div className="col-md-10">
                            <h5 className="filterbox-chandragiri p-2 font-weight-bold font-size-small mt-2 border " id="filterbox-totaltickets-count" style={{ background: 'linear-gradient(90deg, #113857 80%, #808080 20%)', color: 'white', borderRadius: '10px' }}>Total Tickets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totalVoterCount}</h5>
                            <label></label>
                        </div>
                        <div className="col-md-6">                
                        </div>
                </div> 
                <div className='row'>
                    <div className="col-md-12">
                    
                    </div>
                    <div className="col-md-12">
                    <h5 className="filterbox-chandragiri p-2 font-weight-bold font-size-small mt-2 border w-50" style={{  color: 'green', borderRadius: '10px', marginLeft:"5rem" }}>{maleCount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male</h5>
                    <label></label>
                
                    </div> 
                    </div>
                    <div className="col-md-12">               
                        
                </div>
                <div className='row'>
                    <div className="col-md-12">
                    
                    </div>
                    <div className="col-md-12">
                        
                         <h5 className="filterbox-chandragiri p-2 font-weight-bold font-size-small mt-2 border w-50" style={{  color: 'orange', borderRadius: '10px',marginLeft:"5rem" }}>{femaleCount} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Female</h5>
                    
                    </div> 
                    
                </div>
                
                    
                </div>

          
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Tickets;


