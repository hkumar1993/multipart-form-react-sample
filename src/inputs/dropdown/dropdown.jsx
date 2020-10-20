import React from 'react';
import './dropdown.scss';

const Dropdown = ({
    id,
    label,
    inputs,
    updateInput,
    values = [],
}) => {
    const defaultObj = values.find((val) => val.isDefault);
    const defaultValue = defaultObj && defaultObj.value;
    console.log(defaultObj, defaultValue)
    return (
        <div className="dropdown-container">
            <label htmlFor={id}>{label}</label>
            <select
                name={id}
                id={id}
                defaultValue={defaultValue}
                value={inputs[id]}
                onChange={(e) => updateInput(id, e.target.value)}
            >
                {values.map(({ text, value, isDefault }) => {
                    return (
                        <option value={value} key={value}>{text}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Dropdown;