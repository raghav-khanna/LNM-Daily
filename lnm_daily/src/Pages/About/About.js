import React from "react";
import "./About.css"
import ForestIcon from '@mui/icons-material/Forest';

const About = () => {

    return (
        <div className="parent_about">
            <div className="container">
                <ForestIcon sx={{fontSize: 200, color:'green'}}/>
                <div></div>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            </div>
            <div className="container">
            <h2>Enjoy on your TV.</h2>
            <h4>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
            </div>
            <div className="container">
            <h2>Download your shows to watch offline.</h2>
            <h4>Save your favourites easily and always have something to watch.</h4>
            </div>
        </div>
    );
}

export default About;