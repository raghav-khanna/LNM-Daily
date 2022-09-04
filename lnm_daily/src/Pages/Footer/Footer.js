import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="foot"
      style={{ backgroundColor: "#2196f3", borderTop: "0.25rem black solid" }}
    >
      <div>
        <h4>
          Rights Reserved ® <br />
          ..
          <br />
          Created by
        </h4>
        <a href="https://github.com/NirnayK">Nirnay Korde</a>
        <br />
        <a href="https://github.com/DarkMenacer">Pranav Chatur</a>
        <br />
        <a href="https://github.com/raghav-khanna">Raghav Khanna</a>
        <br />
        <a href="https://github.com/JainSourav30">Sourav Jain</a>
        <br />
        ..
        <br />
        <h4>Made using React, Material UI, CassandraDB, NodeJS</h4>
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Footer;
