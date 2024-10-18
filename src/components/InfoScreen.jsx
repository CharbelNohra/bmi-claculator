import React, { useState } from 'react';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import CustomInput from '../ui/CustomInput'; // Import custom Input component
import CustomButton from '../ui/CustomButton'; // Import custom Button component

function InfoScreen({ onSubmit }) {
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        height: '',
        weight: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Allow only numeric values for age, height, and weight
        if (name === "age" || name === "height" || name === "weight") {
            if (!isNaN(value) || value === '') {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleGenderChange = (gender) => {
        setFormData({ ...formData, gender });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="container info-screen">
            <h2>Enter Your Information</h2>
            <form onSubmit={handleSubmit}>
                {/* Gender Selection */}
                <div className="gender-selection">
                    <div
                        className={`gender-option ${formData.gender === 'male' ? 'selected' : ''}`}
                        onClick={() => handleGenderChange('male')}
                    >
                        <MaleIcon />
                        <label>Male</label>
                    </div>
                    <div
                        className={`gender-option ${formData.gender === 'female' ? 'selected' : ''}`}
                        onClick={() => handleGenderChange('female')}
                    >
                        <FemaleIcon />
                        <label>Female</label>
                    </div>
                </div>

                {/* Age Input */}
                <CustomInput
                    label="Age"
                    type="number"
                    name="age" // Ensure the name is set
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                />

                {/* Height Input */}
                <CustomInput
                    label="Height (cm)"
                    type="number"
                    name="height" // Ensure the name is set
                    placeholder="Enter your height in cm"
                    value={formData.height}
                    onChange={handleChange}
                />

                {/* Weight Input */}
                <CustomInput
                    label="Weight (kg)"
                    type="number"
                    name="weight" // Ensure the name is set
                    placeholder="Enter your weight in kg"
                    value={formData.weight}
                    onChange={handleChange}
                />

                {/* Submit Button */}
                <div className="button-container">
                    <CustomButton type="submit">Calculate BMI</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default InfoScreen;
