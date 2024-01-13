import React from 'react';
import { Card } from 'antd';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const generateManualData = () => {
  const categories = ['Open', 'Inprogress', 'Pending', 'Resolved', 'Cancelled'];
  const percentages = [35, 20, 25, 10, 10, ];
  return categories.map((category, index) => ({
    category,
    value: percentages[index],
  }));
};

const DonutChart1 = () => {
  const data = generateManualData();

  const COLORS = ['#0E8622', '#0C4491', '#0871E7', '#07be1f', '#006F82'];

  return (
    <Card title="By Ticket Status" bordered={false} style={{ width: 415, marginTop: 16, marginLeft: 40 }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="47%"
            cy="55%"
            innerRadius="60%"
            outerRadius="80%"
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            label={(entry) => `${entry.value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
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
          <Tooltip
            contentStyle={{ background: 'white', border: '1px solid #ddd' }}
            formatter={(value, name) => [`${data.find((entry) => entry.category === name)?.value}`, name]}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default DonutChart1;