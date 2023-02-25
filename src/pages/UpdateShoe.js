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
  // const [update, setUpdate] = useState("");

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState({
  // isError: false,
  // message: "",
  // });

  // const params = useParams();
  const { shoeId } = useParams();

  // const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/shoes/${shoeId}`);
        setProduct(response.data);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setError({
        // isError: true,
        // message: error.response.data.message,
        // });
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

  // --------------------------------------------------------------------
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
  // -------------------------------------------------------------------
  const handleUpdate = () => {
    if (price < 0) {
      setMessage("price positive");
      return;
      /////////other validation
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

  //  --------------------------------------------------------------
  return (
    <div className="page">
      <h1>here you can update</h1>
      {!isLoading ? (
        <div className="update">
          <span className="update-title">Update Here</span>

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
          <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      ) : (
        "LOADING..."
      )}
      <h1>{message}</h1>
    </div>
  );
}

export default UpdateShoe;
