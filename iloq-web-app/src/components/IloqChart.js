// IloqChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const IloqChart = ({ title, data, className }) => {
    return (
        <div className={`iloq-chart ${className}`}>
            <div className="chart-header">
                <h3>{title}</h3>
                <div className="legend">
                    <div className="legend-item">
                        <div className="color-box" style={{ backgroundColor: '#9AABB3' }}></div>
                        <span>Mechanical system</span>
                    </div>
                    <div className="legend-item">
                        <div className="color-box" style={{ backgroundColor: '#F3E765' }}></div>
                        <span>Credit</span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={225}>
                <BarChart data={data}>
                <CartesianGrid horizontal={true} vertical={false} strokeDasharray="0" />
                    {/* Hiding the "Years" label */}
                    <XAxis dataKey="name" hide />
                    <YAxis />
                    <Tooltip />
                    {/* Stacked Bars */}
                    <Bar dataKey="Mechanical system" stackId="a" fill="#30708B" />
                    <Bar dataKey="Credit" stackId="a" fill="#F3E765" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default IloqChart;
