import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import axios from "axios";
function UpdateShoe() {
  const [product, setProduct] = useState(null);
  const [update , setUpdate] = useState('')
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
        const response = await api.get(`/shoes/${shoeId}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
        // setError({
        // isError: true,
        // message: error.response.data.message,
        // });
      } finally {
        // setLoading(false);
      }
    };

    getProduct();
  }, [shoeId]);
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
    const updateItem = async () => {
      try{
        const res = await api.patch(`/shoes/${shoeId}`), {
        setUpdate(res.data)
          model: {update.model}
          price: {update.price}
          id: {update.id}
          
        }
      } catch(error) {
        console.log("ERROR");
      }
    }
    updateItem()
  };
  
  //  --------------------------------------------------------------
  return (
    <div className="page">
      {product ? (
        <div className="update">
          <span className="update-title">Update Here</span>
          <input type="text" name="model" value={product.model} />
          <input type="text" name="model" value={product.price} />
          <input type="text" name="model" value={product.id} />
          <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      ) : (
        "LOADING..."
      )}
    </div>
  );
}

export default UpdateShoe;
