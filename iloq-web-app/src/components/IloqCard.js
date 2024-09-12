import React from 'react';
import { Divider } from '@mui/material';
import TextFieldEnhanced from './TextFieldEnhanced';

const IloqCard = ({ title, data, totalIloqCost, totalMechanicalCost }) => {
    const renderRow = (data) => {
        return data.map((item, index) => (
            <div className="row" key={index}>
                <div className="label">{item.label}</div>
                <TextFieldEnhanced
                    name={item.name}
                    defaultValue={item.iloqValue}
                    variant="outlined"
                    size="small"
                />
                <TextFieldEnhanced
                    name={`${item.name}_mechanical`}
                    defaultValue={item.mechanicalValue}
                    variant="outlined"
                    size="small"
                    disabled
                />
            </div>
        ));
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="header-row">
                    <div className="card-title">{title}</div>
                    <div className="header-columns">
                        <div className="header-column">ILOQ</div>
                        <div className="header-column">MECHANICAL SYSTEM</div>
                    </div>
                </div>
                <Divider />
                {renderRow(data)}
                <Divider />
                <div className="total-row">
                    <div>Total yearly cost</div>
                    <div>{totalIloqCost}</div>
                    <div>{totalMechanicalCost}</div>
                </div>
            </div>
        </div>
    );
};

export default IloqCard;
