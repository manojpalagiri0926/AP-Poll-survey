import React from 'react'
import CategoryBarChart from '../Charts/Barchart'
import P1 from '../Charts/Piechart1'
import P2 from '../Charts/Piechart2'
import P3 from '../Charts/Piechart3'
import DonutChart from '../Charts/Donut'
import P5 from '../Charts/Piechart4'
import DonutChart1 from '../Charts/Donut1'
import P4 from '../Charts/Piechart5'
import Filters from '../Charts/Filters'


const Dashboard = () => {
  return (
    <>
    <Filters/>

    <div className='row'>

    <P1/>
      <P2/>
      <P3/>


    </div>

      <div className="row">
      <DonutChart/>
    
      <CategoryBarChart/></div>
      <div className='row'>
        <P5/>
      
        <P4/>
        <DonutChart1/>
      
      
     
        
        </div>
        
    </>
  )
}

export default Dashboard