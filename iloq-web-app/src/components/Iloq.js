import React, { useState, useEffect } from 'react';
import './Iloq.scss';  
import IloqHeader from './IloqHeader';
import IloqCard from './IloqCard'; // Adding back IloqCard
import { Button, TextField, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IloqChart from './IloqChart';

const Iloq = () => {
    const [step, setStep] = useState(1);
    const [totalIloqCost, setTotalIloqCost] = useState(0);

    // General Parameters data
    const [generalParametersData, setGeneralParametersData] = useState([
        { label: "Number of padlocks", iloqValue: 500, mechanicalValue: 500 },
        { label: "Number of cylinders", iloqValue: 0, mechanicalValue: 0 },
        { label: "Total number of locks", iloqValue: 500, mechanicalValue: 500 },
        { label: "Number of keys / users", iloqValue: 1000, mechanicalValue: 1000 },
        { label: "Years of warranty", iloqValue: 2, mechanicalValue: 0 },
        { label: "% of yearly failures", iloqValue: 0.5, mechanicalValue: 5 },
        { label: "Cost labour per hour", iloqValue: 40, mechanicalValue: 40 },
        { label: "Average time to install a padlock (h)", iloqValue: 2, mechanicalValue: 2 },
        { label: "Average time to install a cylinder (h)", iloqValue: 0, mechanicalValue: 0 }
    ]);

    // Carpex data
    const [carpexData, setCarpexData] = useState([
        { label: "Cost of the padlock", iloqValue: 307.99, mechanicalValue: 30 },
        { label: "Cost of a cylinder", iloqValue: 0, mechanicalValue: 0 },
        { label: "Cost of padlock installation onsite", iloqValue: 80, mechanicalValue: 80 },
        { label: "Cost of cylinder installation onsite", iloqValue: 0, mechanicalValue: 0 },
    ]);

    const opexData = [
        { label: '% of vandal accesses per year', name: 'opex1', iloqValue: '', mechanicalValue: '3%' },
        { label: 'Average cost of every theft', name: 'opex2', iloqValue: '', mechanicalValue: '$5000' }
    ];

    const chartDataOPEX = [
        { name: 'Year 1', 'Mechanical system': 1000, 'Credit': 1000 },
        { name: 'Year 2', 'Mechanical system': 1200, 'Credit': 1200 },
        { name: 'Year 3', 'Mechanical system': 1500, 'Credit': 1500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 1500, 'Credit': 1500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 1500, 'Credit': 1500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 1500, 'Credit': 1500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 1500, 'Credit': 1500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
    ];

    const chartDataTCO = [
        { name: 'Year 1', 'Mechanical system': 2000, 'Credit': 2000 },
        { name: 'Year 2', 'Mechanical system': 2200, 'Credit': 2200 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 2500, 'Credit': 2500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 2500, 'Credit': 2500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 2500, 'Credit': 2500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 2500, 'Credit': 2500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
        { name: 'Year 3', 'Mechanical system': 2500, 'Credit': 2500 },
        { name: 'Year 3', 'Mechanical system': 750, 'Credit': 1000 },
    ];

    const evaluateTotalCost = () => {
        const padlockCount = generalParametersData[0].iloqValue; // B1
        const padlockCost = carpexData[0].iloqValue; // B10
        const padlockInstallCost = carpexData[2].iloqValue; // B12

        const cylinderCount = generalParametersData[1].iloqValue; // B2
        const cylinderCost = carpexData[1].iloqValue; // B11
        const cylinderInstallCost = carpexData[3].iloqValue; // B13

        // Calculating the total cost using the formula +B1*(B10+B12)+B2*(B11+B13)
        const totalCost = padlockCount * (padlockCost + padlockInstallCost) + cylinderCount * (cylinderCost + cylinderInstallCost);

        setTotalIloqCost(totalCost.toFixed(2));
    };

    const handleGeneralParamChange = (index, value, field) => {
        const updatedData = generalParametersData.map((item, idx) => {
            if (idx === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setGeneralParametersData(updatedData);
        evaluateTotalCost();
    };

    const handleCarpexChange = (index, value, field) => {
        const updatedData = carpexData.map((item, idx) => {
            if (idx === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setCarpexData(updatedData);
        evaluateTotalCost();
    };

    useEffect(() => {
        if (step === 2) {
            evaluateTotalCost();
        }
    }, [step]);

    const renderGeneralParameters = () => (
        <div className="general-parameters">
            <h2>General Parameters</h2>
            {generalParametersData.map((item, index) => (
                <div className="row" key={index}>
                    <div className="label">{item.label}</div>
                    <TextField
                        variant="outlined"
                        size="small"
                        value={item.iloqValue}
                        onChange={(e) => handleGeneralParamChange(index, e.target.value, 'iloqValue')}
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        value={item.mechanicalValue}
                        onChange={(e) => handleGeneralParamChange(index, e.target.value, 'mechanicalValue')}
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

    console.log('margin-top: 24px;', carpexData);

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
                            totalIloqCost={totalIloqCost} // Total cost dynamically updated
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
