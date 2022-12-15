import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const firstNameHandler = (e) => {
        setInput({ ...input, firstName: e.target.value });
    };
    const lastNameHandler = (e) => {
        setInput({ ...input, lastName: e.target.value });
    };
    const emailHandler = (e) => {
        setInput({ ...input, email: e.target.value });
    };
    return (
        <div className="form">
            <div className="inputs">
                <input
                    id="first-name"
                    type="text"
                    onChange={firstNameHandler}
                />
                <input id="last-name" type="text" onChange={lastNameHandler} />
                <input id="e-mail" type="text" onChange={emailHandler} />
            </div>
            <p>
                Vorname: <span>{input.firstName}</span>
            </p>
            <p>
                Nachname: <span>{input.lastName}</span>
            </p>
            <p>
                Email: <span>{input.email}</span>
            </p>
        </div>
    );
};

export default Form;
