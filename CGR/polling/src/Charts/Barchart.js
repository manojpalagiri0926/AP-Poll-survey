import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  defs,
  linearGradient,
  stop,
} from 'recharts';
import { Card } from 'antd';

const data = [
  { category: 'Tpt Rural', value: 30 },
  { category: 'C.gottigallu', value: 40 },
  { category: 'Yeravaripalem', value: 20 },
  { category: 'Rcpuram', value: 25 },
  { category: 'Chandragiri', value: 35 },
  { category: 'Pakala', value: 35 }
];

const CategoryBarChart = () => {
  return (
    <Card title="Ticket" style={{ width: 600,marginLeft:30 ,marginTop:16}}>
      <BarChart width={550} height={300} data={data} margin={{ top: 20, right: 100, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="blueGreenGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0088FE" stopOpacity={0.8} />
            <stop offset="30%" stopColor="#0088FE" stopOpacity={0.4} />
            <stop offset="70%" stopColor="#00FF00" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#00FF00" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <XAxis dataKey="category"  tick={{ fontSize: 10}}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="url(#blueGreenGradient)" barSize={20} barCategoryGap={30} barGap={5} />
      </BarChart>
    </Card>
  );
};

export default CategoryBarChart;