import React, { useState, useEffect } from "react";
import "./styles/locationMasterForm.css"
function LocationForm({ onSubmit, initialLocationData }) {
  const [formData, setFormData] = useState({
    location_id: "",
    location_name: "",
    location_prime_location: "",
    location_photo: "",
    location_desc: "",
    location_date_last_used: "",
    pickpath: "",
    capacity: "",
    IsAvailable: true,
  });
  useEffect(() => {
    if (initialLocationData) {
      setFormData({
        ...formData,
        location_id: initialLocationData.location_id || "",
        location_name: initialLocationData.location_name || "",
        location_prime_location: initialLocationData.location_prime_location || "",
        // Populate other fields as needed
      });
    }
  }, [initialLocationData]); // Run effect when initialLocationData changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  // Define a function to determine the width class for each input field
  const getWidthClass = (fieldName) => {
    // Add logic to determine width class based on field name or other factors
    switch (fieldName) {
      case "location_id":
      case "location_name":
      case "location_prime_location":
        return "input-medium"; // Example: medium width for ID field
      
      case "location_desc":
        return "input-large"; // Example: large width for Name field
    
      case "pickpath":
      case "capacity":
        
        return "input-small"; // Example: small width for Prime Location field
      default:
        return ""; // Default to empty string if width class is not specified
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Here you might clear the form or handle submission (e.g., send data to a backend server)
  };

  return (
    <div className="Location-form-container">
    <form className="locationForm" onSubmit={handleSubmit}>
      <label className="dd">
        ID:
        <input
          type="text"
          name="location_id"
          value={formData.location_id}
          onChange={handleChange}
          className={getWidthClass("location_id")}
          required
        />
      </label>
      <label className="dd">
        Name:
        <input
          type="text"
          name="location_name"
          value={formData.location_name}
          onChange={handleChange}
          className={getWidthClass("location_name")}
          required
        />
      </label>
      <label className="dd">
        Prime Location:
        <input
          type="number"
          name="location_prime_location"
          value={formData.location_prime_location}
          className={getWidthClass("location_prime_location")}
          onChange={handleChange}
        />
      </label>
      <label className="dd">
        Description:
        <textarea
          name="location_desc"
          value={formData.location_desc}
          className={getWidthClass("location_desc")}
          onChange={handleChange}
        />
      </label>
      <label >
        Pickpath:
        <input
          type="number"
          name="pickpath"
          value={formData.pickpath}
          onChange={handleChange}
          className={getWidthClass("pickpath")}
        />
      </label>
      <label>
        Capacity:
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          className={getWidthClass("capacity")}
        />
      </label>
      <label>
        Is Available:
        <input
          type="checkbox"
          name="IsAvailable"
          checked={formData.IsAvailable}
          onChange={handleChange}
          className={getWidthClass("IsAvailable")}
        />
      </label>
      <button type="submit">Add New Location</button>
      </form>
    </div>
      );
    
}

export default LocationForm;
