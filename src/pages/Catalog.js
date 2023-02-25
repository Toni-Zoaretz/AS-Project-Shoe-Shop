import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function Catalog() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get("/shoes");
        setProducts(response.data);
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

    getProducts();
  }, []);

  return (
    <div className="page">
      <h3>catalog</h3>
      <ul className="ul-catalog">
        {products.map((shoe) => (
          <li key={shoe.id} className="li-catalog">
            <img src={shoe.image} alt={shoe.model} />
            <Link to={`/updateShoe/${shoe.id}`}>{shoe.model}</Link>
            <span className="shoe-price">{shoe.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
