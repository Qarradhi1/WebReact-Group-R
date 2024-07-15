import React from "react";
import MultiplePizzas from "../assets/About-02.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Nagu Saabsan</h1>
        <p>
          Get Designers is a platform that holds mayn different Services, our Main Services is to Get Designers, 
          waa inaad heshid Sawir naqshadeeyayaal leh xirfad sareysa, adiga oo booqanaya mareegta GetDesigners waxaad
          ka daalacan kartaa Designers u diyaarsan inay kaa caawiyaan waxyaabaha aad ubaahantahay ee la xariira shaqadooda,
          mid walba oo kamid ah xogtiisa waxa ay ku qorantahay qaybta ka hooseysa, kadibne waxaad awood uleedahay inaad la xariirto.
        </p>
      </div>
    </div>
  );
}

export default About;
