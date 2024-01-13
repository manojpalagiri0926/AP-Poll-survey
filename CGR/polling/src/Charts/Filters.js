import React from 'react'
import { Layout , Menu, Icon,Space} from 'antd';
import { HomeOutlined, DownOutlined } from '@ant-design/icons';
import '../Styles/Filters.css';

const {Header} = Layout;
const Filters = () => {
    const handleClearAll = () => {
        // Logic to clear all the selections in the dropdowns
        const selectElements = document.querySelectorAll('select');
        selectElements.forEach((select) => {
          select.selectedIndex = 0;
        });
      };
  return (
    <>
     <Header style={{ background: '#fff', textAlign: 'center',padding:'0 20px', border:'3px solid #dedddd',boxShadow:'5px #dedddd', color:'#113857' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
     <Space align='center'>
          <HomeOutlined style={{ fontSize: '20px',marginLeft:'0.1rem'}} />
          <h3 style={{ margin: 0}}></h3>
        
       </Space>
        <div className='selection' >
        
            <label htmlFor='constituency' className='label-bold'>Constituency:</label>
            <select className='Constituency' >    
            <option value="" selected disabled hidden>Select Constituency</option>  
            <option>Chandragiri </option>
            
            </select>
            
            <label htmlFor='mandal' className='label-bold'>Mandal:</label>
            <select className='Mandal'  >
            <option value="" selected disabled hidden>Select Mandal</option>  
            <option>Yerravaripalem</option>
            <option>Chinnagottigallu</option>
            <option>Pakala</option>
            <option>Chandragiri</option>
            <option>Tirupati Rural</option>
            <option>Tirupati Urban part</option>
            <option>Ramachandrapuram</option>
            </select>
            <label htmlFor='division' className='label-bold'>Division:</label>
            <select className='Division'>
            <option value="" selected disabled hidden>Select Division</option>  
            <option>DAMALACHERUVU</option>
            <option>MOGARALA</option>
            <option>NENDRAGUNTA</option>
            <option>PAKALA</option>
            <option>A RANGAMPETA</option>
            <option>CHANDRAGIRI</option>
            <option>ITHEPALLI</option>
            <option>THONDAWADA</option>
            <option>KUPPAM BADURU</option>
            <option>NENNURU</option>
            <option>NETHA KUPPAM</option>
            <option>R.C.PURAM</option>
            <option>ITHEPALLI</option>
            <option>BODEVANDLAPALLI</option>
            <option>NERABAILU</option>
            <option>YERRAVARIPALEM</option>
            <option>BHAKARAPETA</option>
            <option>CHATTEVARIPALEM</option>
            <option>CHINNAGOTTIGALLU</option>
            <option>MANGALAM</option>
            <option>TIRUCHANOOR</option>
            <option>DAMINEDU</option>
            <option>MUNDLAPUDI</option>
            <option>PADMAVATHI PURAM</option>
            <option>VEDANTHAPURAM </option>
            <option>SAI NAGAR </option>
            <option>PERUMALLAPALLI </option>
            <option>MALLAMGUNTA </option>
            <option>PERURU </option>
            </select>
            <label htmlFor='sachivalayam' className='label-bold'>Sachivalayam:</label>
            <select className='Sachivalayam' >
            <option value="" selected disabled hidden>Select Sachivalayam </option>  
            <option>Uppara Palli</option>
            <option>Damalacheruvu-1</option>
            <option>Damalacheruvu-2</option>
            <option>Peddaramapuram</option>
            <option>Padiputlabailu</option>
            <option>Maddinenipalli </option>
            <option>Ganugapenta </option>
            <option>Mogarala </option>
            <option> Vallevedu</option>
            <option>Ramanaiahgari Palli </option>
            <option>Gadanki </option>
            </select>
            <label htmlFor='booth' className='label-bold'>Booth:</label>
            <select className='Booth'>
            <option value="" selected disabled hidden>Select Booth</option>  
            <option>Booth1</option>
            <option>Booth2</option>
            <option>Booth3</option>
            <option>Booth4</option>
            <option>Booth5</option>
            <option>Booth6</option>
            <option>Booth7</option>
            <option>Booth8</option>
            <option>Booth9</option>
            <option>Booth10</option>
            
            </select>
        </div>
        
        <a href="#/" onClick={handleClearAll} style={{ marginLeft: '20px' }}>Clear All</a>
        </div>
        </Header>
        
        
    </>
  )
}

export default Filters;