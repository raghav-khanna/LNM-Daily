import React from "react";
import AvatarList from "../../Components/Avatar List/AvatarList";
import "./Clubs.css"

const Clubs = () => {
    return (
        <div className="parent_clubs">
            <h1>Cultural</h1>
            <div className="content_clubs">
                <AvatarList club1={"https://images.unsplash.com/photo-1538032746644-0212e812a9e7"}/>
                <AvatarList/>
            </div>
        </div>
    );
}

export default Clubs;