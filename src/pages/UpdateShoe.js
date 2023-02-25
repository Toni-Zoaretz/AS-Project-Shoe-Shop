import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

function UpdateShoe() {
  const [product, setProduct] = useState({});
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { shoeId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/shoes/${shoeId}`);
        setProduct(response.data);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getProduct();
  }, [shoeId]);

  useEffect(() => {
    if (!product.model) {
      return;
    }
    setModel(product.model);
    setPrice(product.price);
    setImage(product.image);
  }, [product]);

  const handleDelete = () => {
    const deleteItem = async () => {
      try {
        const res = await api.delete(`/shoes/${shoeId}`);
        console.log(res.data);
      } catch (error) {
        console.log("ERROR");
      }
    };
    deleteItem();
  };

  const handleUpdate = () => {
    if (
      price < 0 ||
      typeof price !== "number" ||
      typeof model !== "string" ||
      model === " "
    ) {
      setMessage("you entered invalid input");
      return;
    }

    const updateItem = async () => {
      try {
        const res = await api.put(`/shoes/${shoeId}`, {
          model: model,
          price: price,
          image: image,
        });
        setMessage(`${model} has been updated`);
        console.log(res.data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    updateItem();
  };

  return (
    <div className="page update-page">
      <h1 className="product-update-title">Update Product Details</h1>
      {!isLoading ? (
        <div className="update">
          <input
            type="text"
            name="image"
            placeholder={product.image}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            name="model"
            placeholder={product.model}
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="number"
            name="price"
            placeholder={product.price}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="buttons">
            <button onClick={handleDelete} className="start">
              Delete
            </button>
            <button onClick={handleUpdate} className="start">
              Update
            </button>
          </div>
        </div>
      ) : (
        "LOADING..."
      )}
      <h1 className="message-for-updating-user">{message}</h1>
    </div>
  );
}

export default UpdateShoe;
