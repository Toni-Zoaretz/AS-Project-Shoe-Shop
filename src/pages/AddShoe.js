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

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(50);
  // };

  const handleSubmit = async (event) => {
    // console.log("hey");
    event.preventDefault();
    try {
      await api.post("/shoes", formData);

      navigate("/catalog");
    } catch (error) {
      console.error(error);
      // setError({
      //   isError: true,
      //   message: error.response.data.message,
      // });
    }
  };

  return (
    <div className="page">
      <h1 className="add-title">here you can add a shoe</h1>
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

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddShoe;
