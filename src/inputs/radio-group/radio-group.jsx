import React from 'react';
import './radio-group.scss';

const RadioGroup = ({
    id,
    inputs,
    updateInput,
    label,
    values = [],
    className = '',
}) => {
    return (
        <div className={`radio-group-container ${className}`}>
            <label htmlFor={id}>{label}</label>
            <fieldset id={id}>
                {values.map(({ text, value }) => {
                    return (
                        <div className="option" key={value}>
                            <input
                                id={`${id}-${value}`}
                                type="radio"
                                name={id}
                                onChange={(e) => updateInput(id, value)}
                                checked={inputs[id] === value}
                                value={value}
                            />
                            <label htmlFor={`${id}-${value}`} className="radio-input" key={value}>
                                {text}
                            </label>
                        </div>
                    )
                })}
            </fieldset>
        </div>
    );
}

export default RadioGroup;