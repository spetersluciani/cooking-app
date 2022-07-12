import React, { Fragment } from "react";

export const Input = ({ label, inputName, type, value, onChange }) => {
    return (
        <p>
            <label htmlFor={inputName}>{label}</label>
            <input name={inputName} id={inputName} type={type} value={value} onChange={onChange} required />
        </p>
    )
}