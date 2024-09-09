import React, { useState } from 'react';
import './Iloq.scss';  
import IloqHeader from './IloqHeader';
import IloqCard from './IloqCard';
import { Button, TextField, Divider } from '@mui/material';

const Iloq = () => {
    const [step, setStep] = useState(1);

    const generalParametersData = [
        { label: 'Number of padlocks', iloqValue: '500', mechanicalValue: '500' },
        { label: 'Number of cylinders', iloqValue: '500', mechanicalValue: '500' },
        { label: 'Total number of locks', iloqValue: '1000', mechanicalValue: '1000', disabled: true },
        { label: 'Number of keys per user', iloqValue: '1000', mechanicalValue: 'No data', disabledMechanical: true },
        { label: 'Years of warranty', iloqValue: '2', mechanicalValue: '0' },
        { label: '% of yearly failures', iloqValue: '0.5%', mechanicalValue: '5.0%' },
        { label: 'Cost labor per hour', iloqValue: '$40', mechanicalValue: 'No data', disabledMechanical: true },
        { label: 'Average time to install a padlock (h)', iloqValue: '1', mechanicalValue: 'No data', disabledMechanical: true },
        { label: 'Average time to install a cylinder (h)', iloqValue: '1', mechanicalValue: 'No data', disabledMechanical: true }
    ];

    const carpexData = [
        { label: '% of new copies per year (incl. lost keys)', name: 'carpex1', iloqValue: '', mechanicalValue: '10%' },
        { label: 'Average cost of key copy + handling', name: 'carpex2', iloqValue: '', mechanicalValue: '$50.00' },
        { label: 'Turnover new people coming in (re-keying)', name: 'carpex3', iloqValue: '', mechanicalValue: '10%' },
        { label: 'Subcontractor keys (to & from per day)', name: 'carpex4', iloqValue: '', mechanicalValue: '$9200' }
    ];

    const opexData = [
        { label: '% of vandal accesses per year', name: 'opex1', iloqValue: '', mechanicalValue: '3%' },
        { label: 'Average cost of every theft', name: 'opex2', iloqValue: '', mechanicalValue: '$5000' }
    ];

    const renderGeneralParameters = () => (
        <div className="general-parameters">
            <h2>General Parameters</h2>
            {generalParametersData.map((item, index) => (
                <div className="row" key={index}>
                    <div className="label">{item.label}</div>
                    <TextField 
                        variant="outlined" 
                        size="small" 
                        defaultValue={item.iloqValue} 
                        disabled={item.disabled || false} 
                    />
                    <TextField 
                        variant="outlined" 
                        size="small" 
                        defaultValue={item.mechanicalValue} 
                        disabled={item.disabledMechanical || false} 
                    />
                </div>
            ))}
            <Divider />
        </div>
    );
    

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className="iloq-container">
            <IloqHeader />
            
            {step === 1 && renderGeneralParameters()}

            {step === 2 && (
                <>
                    <IloqCard
                        title="Carpex"
                        data={carpexData}
                        totalIloqCost="$291"
                        totalMechanicalCost="$5 000"
                    />

                    <IloqCard
                        title="OPEX: Inhouse vandalism"
                        data={opexData}
                        totalIloqCost=""
                        totalMechanicalCost="$75 000"
                    />
                </>
            )}

            <div className="step-navigation">
                {step > 1 && <Button onClick={handleBack} className="back-btn">Back</Button>}
                {step < 2 && <Button onClick={handleNext} className="next-btn">Next</Button>}
            </div>
        </div>
    );
};

export default Iloq;
