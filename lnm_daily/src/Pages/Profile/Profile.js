import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import "./Profile.css"

const Profile = ({profilephotoSrc}) => {
    const radius = 10;

    return (
        <div className="parent_profile">
            <div className="display_details">
                <Avatar alt="your_photo" src={profilephotoSrc} sx={{height: radius+'rem', width: radius+'rem' }}/>
                <h2 className="name_n_age">Your Name</h2>
                <h4 className="name_n_age">Your DoB</h4>
            </div>
            <div className="password">
                <TextField variant="outlined" label="Enter Current Password"/>
                <TextField variant="outlined" label="Enter New Password"/>
                <TextField variant="outlined" label="Confirm New Password"/>
                <Button variant="contained">Change Password</Button>
            </div>
        </div>
    );
}

export default Profile;