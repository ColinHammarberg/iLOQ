import React, { useState } from 'react';
import './Iloq.scss';  
import IloqHeader from './IloqHeader';
import IloqCard from './IloqCard';
import IloqChart from './IloqChart'; // Import the new chart component
import { Button, TextField, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

    // Sample chart data (you can adjust this based on your needs)
    const chartDataOPEX = [
        { name: 'Year 1', 'Mechanical system': 1000, 'Credit': 500 },
        { name: 'Year 2', 'Mechanical system': 1200, 'Credit': 600 },
        { name: 'Year 3', 'Mechanical system': 1500, 'Credit': 700 },
        // Add more years as necessary
    ];

    const chartDataTCO = [
        { name: 'Year 1', 'Mechanical system': 2000, 'Credit': 800 },
        { name: 'Year 2', 'Mechanical system': 2200, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 2500, 'Credit': 1200 },
        // Add more years as necessary
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
                    <div className="content-wrapper">
                        <div className="cards-section">
                            <IloqCard
                                title="Carpex"
                                data={carpexData}
                                totalIloqCost="$193,995"
                                totalMechanicalCost="In place already"
                            />

                            <IloqCard
                                title="OPEX: Soft lease costs"
                                data={opexData}
                                totalIloqCost="$7804"
                                totalMechanicalCost=""
                            />
                        </div>

                        <div className="chart-section">
                            <IloqChart title="OPEX" data={chartDataOPEX} className="chart-opex" />
                            <IloqChart title="TCO" data={chartDataTCO} className="chart-tco" />
                        </div>
                    </div>
                </>
            )}

            <div className="step-navigation">
                {step > 1 && (
                    <Button onClick={handleBack} className="back-btn" startIcon={<ArrowBackIcon />}>
                        Back
                    </Button>
                )}
                {step < 2 && (
                    <Button onClick={handleNext} className="next-btn" endIcon={<ArrowForwardIcon />}>
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Iloq;
