import React, { useState } from 'react';
import './app.scss';
import Form from './form/form';

const App = () => {
    const [showForm, setShow] = useState(false);
    return (
        <>
            {showForm ?
                <Form hideForm={() => setShow(false)} /> :
                <button onClick={() => setShow(true)}>Feedback</button>
            }
        </>
    );
}

export default App;
