import React from "react";
import "./About.css";
import WebhookIcon from "@mui/icons-material/Webhook";

const About = () => {
  return (
    <div className="parent_about">
      <div className="container">
        <WebhookIcon sx={{ fontSize: 200, color: "#336ab0" }} />
        <div></div>
        <h1>CONNECT . PARTICIPATE . LEARN</h1>
        <h3>LNM DAILY:- One stop for your daily updates</h3>
        <h5>New way to live your college life</h5>
      </div>
      <div className="container">
        <h2>MAKE COLLEGE LIFE EVENTFUL</h2>
        <h4>Make new friends and create exciting college memories</h4>
      </div>
      <div className="container">
        <h2>DISCOVER YOUR PASSION</h2>
        <h4>Make your feed personalised by following clubs and events!</h4>
      </div>
    </div>
  );
};

export default About;
