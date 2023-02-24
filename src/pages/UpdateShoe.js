import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
function UpdateShoe() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

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
        setError({
          isError: true,
          message: error.response.data.message,
        });
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [shoeId]);
  console.log(product);

  return (
    <div className="page">
      UpdateShoe
      {product ? (
        <fieldset>
          <legend>UpdateShoe</legend>
          <input type="text" name="model" value={product.model} />
        </fieldset>
      ) : (
        "LOADING"
      )}
    </div>
  );
}

export default UpdateShoe;
