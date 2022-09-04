import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import "./Profile.css";

const Profile = ({ profilephotoSrc }) => {
  const radius = 10;

  return (
    <div className="parent_profile">
      <div className="display_details">
        <Avatar
          alt="your_photo"
          src={profilephotoSrc}
          sx={{ height: radius + "rem", width: radius + "rem" }}
        />
        <h2 className="name_n_age">Raghav Khanna</h2>
        <h4 className="name_n_age">22</h4>
      </div>
      <div className="password">
        <TextField
          variant="outlined"
          label="Enter Current Password"
          type="password"
        />
        <TextField
          variant="outlined"
          label="Enter New Password"
          type="password"
        />
        <TextField
          variant="outlined"
          label="Confirm New Password"
          type="password"
        />
        <Button variant="contained">Change Password</Button>
      </div>
    </div>
  );
};

export default Profile;
