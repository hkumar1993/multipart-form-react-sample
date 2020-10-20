import React from 'react';
import './textarea.scss';

const TextArea = ({
    id,
    inputs,
    updateInput,
    label,
}) => {
    return (
        <div className="text-area-container">
            <label htmlFor={id}>
                {label}
            </label>
            <textarea
                id={id}
                onChange={(e) => updateInput(id, e.target.value)}
                placeholder="Your answer"
                maxLength="1000"
                value={inputs[id] || ''}
            />
            <span className="characters-left">
                {1000 - (inputs[id] || '').length} characters left
            </span>
        </div>
    )
}

export default TextArea;