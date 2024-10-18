import React from "react";

const CustomInput = ({ label, type, placeholder, value, onChange, name }) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value !== undefined ? value : ''} // Handle undefined values
                onChange={onChange}
                name={name} // Ensure name prop is passed
                required // Optional, to make input required
            />
        </div>
    );
};

export default CustomInput;
