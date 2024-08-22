import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Plastic', value: 27, color: '#d9368e' },
  { name: 'Paper & Cardboard', value: 31, color: '#b57d45' },
  { name: 'Kitchen Waste', value: 22, color: '#ffd247' },
  { name: 'Landfill', value: 13, color: '#5dc1b4' },
  { name: 'Metal', value: 5, color: '#929292' },
  { name: 'Glass', value: 2, color: '#742da8' },
];

const WasteDistributionChart = () => {
  return (
    <div className="flex flex-col items-center bg-white p-5 rounded-lg">
      <h3 className="mb-5">My Waste Distribution</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default WasteDistributionChart;
