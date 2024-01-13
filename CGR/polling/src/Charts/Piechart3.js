import { Card } from 'antd';
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


const data = [
  { category: 'Started', value: 40 },
  { category: 'Not Started', value: 35 },
  { category: 'Completed', value: 25 },
 
];

const COLORS = ['#07BE1F', '#0C4491', '#0871E7'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload[0]) {
    const { value, payload: dataPayload } = payload[0];
    if (dataPayload && dataPayload.category) {
      return (
        <div style={{ background: 'white', border: '1px solid #ddd', padding: '10px' }}>
          <p>{` ${value} (${dataPayload.category})`}</p>
        </div>
      );
    }
  }
  return null;
};

const P3 = () => {
  return (
    <Card title="Survey Status" style={{ width: 415, marginTop: 16 ,marginLeft:40}}>

    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="0%"
          outerRadius="80%"
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          formatter={(value, entry) => <span style={{ color: entry.color }}>{value}</span>}
          payload={data.map((entry, index) => ({
            value: entry.category,
            type: 'Circle',
            id: entry.category,
            color: COLORS[index],
          }))}
        />
      </PieChart>
    </ResponsiveContainer>

    </Card>

  );
};

export default P3;