/*
    ADD A NEW LOCATION TO THE LOCATION MASTER

    This file deals with displaying and process the adding of a new location
    It should display the form,
    alert if location already exists.
    Add the new location and advise success


    logic flow;
        download user locations master if it doesnt exist.
        display the form to create a new location
        when user submits, validate the fields.
        ensure its not a dplicate location
        if fields pass then add the new location to the list in memory and to the database. 
        if the database responds with an error, remove from the memory list.
        advise the user of why.
        highlight the issue field. 


        SCHEMA: 
        CREATE TABLE LOCATION_MASTER (
            userID INT NOT NULL REFERENCES users(userID),
            location_internal_id INT AUTO_INCREMENT PRIMARY KEY,
            location_id VARCHAR(10) NOT NULL, 
            location_name VARCHAR(25) NOT NULL UNIQUE, 
            location_prime_location INT REFERENCES PRIME_LOCATION(location_id),
            location_photo VARCHAR(200), 
            location_desc TEXT, 
            location_date_last_used DATE, 
            pickpath INT, 
            capacity INT, 
            IsAvailable BOOLEAN DEFAULT TRUE
);
*/

import React, { useState, useEffect } from 'react';

const AddLocation = () => {
    const [payload, setPayload] = useState({
        locationName: ''
        // Add more key-value pairs as needed
    });
    useEffect(() => {
        document.title = "Add Location";
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if passwords match
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="locationName" className="formlabel">Location Name:</label>
                    <input
                        type="text"
                        id="locationName"
                        value={payload.locationName}
                        onChange={(e) => setPayload({ ...payload, locationName: e.target.value })} 
                        className="form-control" 
                    />
                </div>
            </form>
        </div>
    )
}

export default AddLocation
