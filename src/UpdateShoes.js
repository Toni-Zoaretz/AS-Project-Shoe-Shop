import React from "react";
import { useNavigate } from "react-router-dom";

function UpdateShoes() {
  const navigate = useNavigate();
  const handleUpdatePageBtn = () => {
    navigate("/catalog");
  };

  return (
    <div className="page update-shoes">
      <div className="box-info-update ">
        <p>Here you can update or delete shoe from catalog</p>
        <p>
          you just need to go to the catalog page and{" "}
          <span>click on the shoe model name </span>
          you want to update...
        </p>
        <br></br>
        <button className="start back-btn" onClick={handleUpdatePageBtn}>
          Back to Catalog Page
        </button>
      </div>
    </div>
  );
}

export default UpdateShoes;
