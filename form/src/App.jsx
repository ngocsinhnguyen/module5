import React, { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleValidate = () => {
        const errors = {};
        if (!form.name) {
            errors.name = "Required";
        }

        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }

        if (!form.phone) {
            errors.phone = "Required";
        }

        return errors;
    };

    const handleSubmit = () => {
        alert("Add contact successfully!!!");
    };

    return (
        <div className="container">
            <h1>Contact form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
                enableReinitialize={true}
            >
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="custom-input">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div className="custom-input">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="custom-input">
                            <label htmlFor="phone">Phone</label>
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>

                        <div className="custom-input">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message || ""}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default App;
