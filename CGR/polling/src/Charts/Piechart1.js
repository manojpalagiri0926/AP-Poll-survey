import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import Piechart from '../Charts/Piechart1';
import { Card } from 'antd';


const COLORS = ['#113857', '#00FF00'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { category, value } = payload[0].payload;
    return (
      <div style={{ background: 'white', border: '1px solid #ddd', padding: '10px' }}>
        <p>{`${value} (${category})`}</p>
      </div>
    );
  }
  return null;
};

const Piechart1 = () => {
  const [voters, setVoters] = useState([]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getvoters');
        if (Array.isArray(response.data)) {
          setVoters(response.data);

          // Calculate male and female counts
          const maleCount = response.data.filter((voter) => voter.Gender.trim() === 'Male').length;
          const femaleCount = response.data.filter((voter) => voter.Gender.trim() === 'Female').length;

          setMaleCount(maleCount);
          setFemaleCount(femaleCount);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalVoters = voters.length;

  const pieChartData = [
    { category: 'Male', value: maleCount },
    { category: 'Female', value: femaleCount },
  ];

  // Calculate percentages

  return (
    
    <Card title="Voters" style={{ width: 415, marginTop: 16 ,marginLeft:40}}>
      <ResponsiveContainer width="100%" height={300} >
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            innerRadius="0%"
            outerRadius="80%"
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} name={entry.category} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p>Total Voters: {totalVoters}</p>
    

      </div>
      </Card>
  );
};

export default Piechart1;