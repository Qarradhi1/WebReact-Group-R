import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Home-01.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Get Designer </h1>
        <p> Dooro Naqshadeeye</p>
        <Link to="/menu">
          <button> Taabo Halkaan </button>
        </Link>
      </div>
    </div>
  );
}


export default Home;
