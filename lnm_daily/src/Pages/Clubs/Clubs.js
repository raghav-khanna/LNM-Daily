import React from "react";
import AvatarList from "../../Components/Avatar List/AvatarList";
import MediaCell from "../../Assets/MediaCell.png"
import Astro from "../../Assets/Astro.jpg"
import Cybros from "../../Assets/Cybros.jpg"
import Alumini from "../../Assets/Alumini.png"
import Quizzinga from "../../Assets/QUIZINGA.jpg"
import Gymkhana from "../../Assets/Gymkhana.png"
import "./Clubs.css"

const Clubs = () => {
    return (
        <div className="parent_clubs">
            <h1>Clubs</h1>
            <div className="content_clubs">
                <AvatarList club1={MediaCell} club2={Astro} club3={Cybros}/>
                <AvatarList club1={Alumini} club2={Quizzinga} club3={Gymkhana}/>
            </div>
        </div>
    );
}

export default Clubs;