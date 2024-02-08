import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage() {
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        document.title = "Home";
    }, [])
    return (
        <div>
            <h2>THIS IS THE HOME PAGE</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            </div>
    );
}
export default HomePage;