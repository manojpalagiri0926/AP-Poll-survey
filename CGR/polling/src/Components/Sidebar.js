import React from 'react';
import { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { Link, useLocation } from 'react-router-dom';


import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,HomeOutlined,Fan
} from '@ant-design/icons';
import partylogo from '../Assets/partylogo.jpg';
import '../Styles/Sidebar.css';
//import Voter from './../Pages/Vasu';


const { SubMenu } = Menu;


const Sidebar = () => {
        const location = useLocation();
        const [selectedKey, setSelectedKey] = useState('0')
        

     
        const handleMenuClick = (e) => {
          setSelectedKey(e.key);
        };

        const isItemSelected = (key) => {
          return key === selectedKey;
        };

       
  const menu = (
    <Menu theme="dark">
      <SubMenu key="sub1" icon={<UserOutlined />} title="User Management">
        <Menu.Item key="1">
          <Link to="userlist/">User List</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<FileOutlined />} title="Mandals">
        <Menu.Item key="2">
          <Link to="mandal/">Mandals</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<PieChartOutlined />} title="Divisions">
        <Menu.Item key="3">
          <Link to="divisions/">Divisions</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<TeamOutlined />} title="Sachivalayam">
      <Menu.Item key="4">
          <Link to="sachivalayam/">Sachivalayam</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" icon={<UserOutlined />} title="Part">
        <Menu.Item key="5">
          <Link to="part/">Part</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub6" icon={<UserOutlined />} title="Create Voter">
        <Menu.Item key="6">
          <Link to="createvoter/">Create Voter</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub7" icon={<UserOutlined />} title="Add Voter">
        <Menu.Item key="7">
          <Link to="addvoter/">Add Voter</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub8" icon={<UserOutlined />} title="Access and Permissions">
        <Menu.Item key="8">
          <Link to="access/">Access</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub9" icon={<UserOutlined />} title="User Mapping">
        <Menu.Item key="9">
          <Link to="mapping/">User Mapping</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub10" icon={<UserOutlined />} title="User & Volunteer Mapping">
        <Menu.Item key="10">
          <Link to="uvmapping/">User&Mapping Mapping</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub11" icon={<UserOutlined />} title="Political Parties">
        <Menu.Item key="11">
          <Link to="political/">Political Parties</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub12" icon={<UserOutlined />} title=" Survey Report">
        <Menu.Item key="12">
          <Link to="surveyreport/">Survey Report</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
  {/*const tickets = (
    <Menu theme="dark">
      <SubMenu key="sub1" icon={<UserOutlined />} title="View">
        <Menu.Item key="1">
          <Link to="viewtickets/">View Tickets</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<FileOutlined />} title="Resolved">
        <Menu.Item key="2">
          <Link to="resolvedtickets/">Resolved Tickets</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<PieChartOutlined />} title="Cancelled">
        <Menu.Item key="3">
          <Link to="cancelledtickets/">Cancelled Tickets</Link>
        </Menu.Item>
      </SubMenu>
      
    </Menu>
  );*/}

  return (
    <div className="sidebar-wrapper" >
      <Menu theme='dark' mode="inline" defaultSelectedKeys={['4']} selectedKeys={[selectedKey]} style={{background:"#013157"}} >
       
       <Menu.Item key="4"  title="Constituency Name" icon={<img src={partylogo} style={{borderRadius:"50%",height:"30px",width:"30px",border: "2px solid white", marginLeft:'-1rem'}}/>}>
             <h6>CHANDRAGIRI<br/>CONSTITUENCY </h6>
           </Menu.Item>         
       </Menu>
      
      <Menu theme='dark' mode="inline" defaultSelectedKeys={['0']} selectedKeys={[selectedKey]} onClick={handleMenuClick} style={{background:"#013157"}}>
       
      <Menu.Item key="0" className='custom-font-size' icon={<HomeOutlined />} title="Menu" >
            <Link to='/'>Home</Link>
          </Menu.Item>
        
      </Menu>
      <Menu theme='dark' mode="inline" defaultSelectedKeys={['1']} selectedKeys={[selectedKey]} onClick={handleMenuClick} style={{background:"#013157"}}>
      <Menu.Item key="1" icon={<DesktopOutlined />} title="Menu">
            <Link to='tickets/'>Tickets</Link>
          </Menu.Item>
        
      </Menu>
      <Menu theme='dark' mode="inline" defaultSelectedKeys={['1']} selectedKeys={[selectedKey]} onClick={handleMenuClick} style={{background:"#013157"}}>
      <Menu.Item key="2 " icon={<UserOutlined />} title="Menu">
            <Link to='voters/'>Voters</Link>
          </Menu.Item>
        
      </Menu>
      {/*<Dropdown overlay={tickets} placement="bottomLeft">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="2" icon={<DesktopOutlined />} title="Home">
            <span>Tickets</span>
          </Menu.Item>
        
        </Menu>
      </Dropdown>*/}
      <Dropdown overlay={menu} placement="bottomLeft">
        <Menu theme='dark' mode="inline" defaultSelectedKeys={['2']} selectedKeys={[selectedKey]} onClick={handleMenuClick} style={{background:"#013157"}}>
          <Menu.Item key="3" icon={<TeamOutlined />} title="Menu">
            <Link to='admin/'>Admin</Link>
          </Menu.Item>
        
        </Menu>
      </Dropdown>
      
      
    </div>
  );
};

export default Sidebar;