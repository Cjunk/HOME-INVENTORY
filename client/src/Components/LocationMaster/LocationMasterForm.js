import React, { useState } from "react";
import "./styles/locationMasterForm.css"
function LocationForm({ onSubmit }) {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Here you might clear the form or handle submission (e.g., send data to a backend server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location ID:
        <input
          name="location_id"
          value={formData.location_id}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Location Name:
        <input
          name="location_name"
          value={formData.location_name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Prime Location:
        <input
          type="number"
          name="location_prime_location"
          value={formData.location_prime_location}
          onChange={handleChange}
        />
      </label>
      <label>
        Location Photo (URL):
        <input
          name="location_photo"
          value={formData.location_photo}
          onChange={handleChange}
        />
      </label>
      <label>
        Location Description:
        <textarea
          name="location_desc"
          value={formData.location_desc}
          onChange={handleChange}
        />
      </label>
      <label>
        Date Last Used:
        <input
          type="date"
          name="location_date_last_used"
          value={formData.location_date_last_used}
          onChange={handleChange}
        />
      </label>
      <label>
        Pickpath:
        <input
          type="number"
          name="pickpath"
          value={formData.pickpath}
          onChange={handleChange}
        />
      </label>
      <label>
        Capacity:
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
        />
      </label>
      <label>
        Is Available:
        <input
          type="checkbox"
          name="IsAvailable"
          checked={formData.IsAvailable}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LocationForm;
