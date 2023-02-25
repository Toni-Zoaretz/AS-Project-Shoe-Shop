import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function AddShoe() {
  const [formData, setFormData] = useState({
    model: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/shoes", formData);
      navigate("/catalog");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page add-page">
      <h1 className="product-update-title">Here You Can Add a Shoe</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          onChange={handleChange}
          value={formData.model}
        />
        <label htmlFor="model">Price</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />
        <label htmlFor="img">Image</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />
        <br></br>
        <button type="submit" className="start">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddShoe;
