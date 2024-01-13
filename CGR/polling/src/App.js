import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home'; // assuming you have a Home component
import Mandals from './Pages/Mandals';
import Sachivalayam from './Pages/Sachivalayam';
import SachivalayamNew from './Pages/Addsachivalayam';
import Divisionsnew from './Pages/Adddiv';
import Mandalsnew from './Pages/Addmandal';
import Sidebar from './Components/Sidebar';
import Divisions from './Pages/Divisions';
import AccessPermissions from './Pages/Access';
import Voteradd from './Pages/Addvoter';
import Part from './Pages/Parts';
import Dashboard from './Components/Dashboard';
import Tickets from './Pages/Tickets';
import UserList from './Pages/Userlist';
import UserReg from './Pages/Adduser';
import CreateVoter from './Pages/Createvoter';
import Usermapping from './Pages/Usermapping';
import VVmapping from './Pages/Uservolunteermap';
import Politicalparty from './Pages/Political';
import Voter from './Pages/Vasu';
import cm from './Assets/cm.png';
import mla from './Assets/mla.png';
import mohit from './Assets/mohit.png';
import Partsnew from './Pages/Addpart';
import VoterSurvey from './Pages/Survey';
import Surveyreport from './Pages/Surveyreport';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // const handleLogin = () => {
  //   setAuthenticated(true);
  // };

  // const PrivateRoute = ({ element, ...rest }) => {
  //   return authenticated ? element : <Navigate to="/" />;
  // };

  // if (!authenticated) {
  //   return <LoginPage onLogin={handleLogin} />;
  // }

  return (
    
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Sidebar />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ background: '#fff', padding:'5px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'#113857', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex',float:"right", alignItems: 'center' }}>
          <label>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggleSidebar,
              }
            )}
            </label>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <img src={mohit} alt="Mohit Logo" style={{ width: '60px', height: '50px', marginLeft:'10px' }} />
            <img src={mla} alt="MLA Logo" style={{ width: '60px', height: '55px', marginLeft:'2px' }} />
            <img src={cm} alt="Company Logo" style={{ width: '55px', height: '55px' }} />
            
          </div>
          </Header>
          <Routes>
            {/*<Route path="/" element={<PrivateRoute element={<Dashboard />} />} />*/}
            {/*<Route path="/login" element={<LoginPage onLogin={handleLogin} />} />*/}
            <Route path="/mandal/" element={<Mandals />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/sachivalayam/" element={<Sachivalayam />} />
            <Route path="/divisions/" element={<Divisions />} />
            <Route path="/sachivalayam/addsach/" element={<SachivalayamNew />} />
            <Route path="/divisions/adddiv/" element={<Divisionsnew />} />
            <Route path="/mandal/addmandal/" element={<Mandalsnew />} />
            <Route path="/access/" element={<AccessPermissions />} />
            <Route path="/addpart/" element={<Part />} />
            <Route path="/addvoter/" element={<Voteradd />} />
            <Route path="/tickets/" element={<Tickets />} />
            <Route path="/voters/" element={<Voter />} />
            <Route path="/userlist/" element={<UserList />} />
            <Route path="/part/" element={<Part />} />
            <Route path="/createvoter/" element={<CreateVoter />} />
            <Route path="/uvmapping/" element={<VVmapping />} />
            <Route path="/mapping/" element={<Usermapping />} />
            <Route path="/political/" element={<Politicalparty />} />
            <Route path="/adduser" element={<UserReg />} />
            <Route path="part/partsnew/" element={<Partsnew />} />
            <Route path="voters/survey/" element={<VoterSurvey />} />
            <Route path="surveyreport/" element={<Surveyreport />} />

            
          </Routes>
          <Footer style={{ textAlign: 'center' }}>
          ©2023 All rights reserved by Lomaa
        </Footer>
        </Layout>
      </Layout>
    
  );
};

export default App;
