import React, { Fragment } from 'react';
import TextArea from '../../inputs/textarea/textarea';
import RadioGroup from '../../inputs/radio-group/radio-group';
import Dropdown from '../../inputs/dropdown/dropdown';

const getFormComponent = (type) => {
    switch(type) {
        case 'textarea':
            return TextArea;
        case 'radio':
            return RadioGroup;
        case 'dropdown':
            return Dropdown;
        default:
            return Fragment;
    }
}

const FormPage = ({
    updateInput,
    inputs,
    pageData,
}) => {

    const Component = getFormComponent(pageData.type);

    return (
        <section>
            <Component
                inputs={inputs}
                updateInput={updateInput}
                {...pageData}
            />
        </section>
    )
}

export default FormPage;