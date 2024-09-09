// IloqChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const IloqChart = ({ title, data }) => {
    return (
        <div className="iloq-chart">
            <h3>{title}</h3>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Mechanical system" fill="#173D4F" />
                    <Bar dataKey="Credit" fill="#F7D358" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default IloqChart;
