import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleHomePageBtn = () => {
    navigate("/catalog");
  };
  return (
    <div className="home-page">
      <h1 className="home-title">
        WELCOME TO YOUR <br></br>SHOES CATALOG!
      </h1>
      <p className="home-info">
        here you can WATCH your full catalog,<br></br> EDIT and ADD shoes to
        your preference...
      </p>
      <button className="start" onClick={handleHomePageBtn}>
        Let`s start!
      </button>
    </div>
  );
}

export default Home;
