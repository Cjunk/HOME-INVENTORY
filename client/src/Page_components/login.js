import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from '../Components/form';
function LoginForm({ setLogin }) {
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        document.title = "Login";
    }, [])
    return (
        <div className="formContainer"> {/* Add Bootstrap container class */}
            <div>
                <UserForm setLogin={setLogin} formType={1} />
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            </div>
        </div>
    );
}
export default LoginForm;
