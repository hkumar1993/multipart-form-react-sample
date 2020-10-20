import React, { useState } from 'react';
import './form.scss';
import generateFormData from './form-data/generate-form-data';
import FormPage from './form-page/form-page';

const Form = ({ hideForm }) => {
    const [page, setPage] = useState(0);

    const [inputs, setInputs] = useState({});
    const updateInput = (key, value) => {
        setInputs((currentInputs) => ({ ...currentInputs, [key]: value }));
    };

    const formData = generateFormData(inputs);
    const pageData = formData[page];
    const canProceed = pageData.required ? (!!inputs[pageData.id] || inputs[pageData.id] === 0) : true;
    return (
        <div className="form-modal-container">
            <div className="form-modal" role="dialog">
                <h2>Brand Name</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <FormPage
                        inputs={inputs}
                        updateInput={updateInput}
                        pageData={pageData}
                    />
                    <section className="buttons-container">
                        {page > 0 ? (
                            <button onClick={() => setPage((currentPage) => currentPage - 1)}>
                                Previous
                            </button>
                        ) : <div></div>}
                        {page === formData.length - 1 ? (
                            <button
                                onClick={() => window.alert(`Submitted! \n ${JSON.stringify(inputs)}` )}
                                disabled={!canProceed}
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                onClick={() => setPage((currentPage) => currentPage + 1)}
                                disabled={!canProceed}
                            >
                                Next
                            </button>
                        )}
                    </section>
                </form>
                <button aria-label="Close" className="close-btn" onClick={hideForm}>
                    <span aria-hidden="true">X</span>
                </button>
            </div>
        </div>
    )
}

export default Form;