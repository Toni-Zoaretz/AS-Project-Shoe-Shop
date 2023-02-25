import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
function Error() {
  const navigate = useNavigate();
  const handleErrorBtn = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className="home-page error-page">
        <h1 className="home-title">An Error Occurred!</h1>
        <button className="start" onClick={handleErrorBtn}>
          Back To Back Page
        </button>
      </div>
    </div>
  );
}

export default Error;
