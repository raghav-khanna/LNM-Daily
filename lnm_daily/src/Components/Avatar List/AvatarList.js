import React from "react";
import { Avatar, Stack } from "@mui/material";
import "./AvatarList.css"

const AvatarList = ({club1, club2, club3}) => {
    const radius = 10; 
    
    return(
        <div className="avatar_list">
            <Stack direction="row" spacing={30}>
                <Avatar alt="Remy Sharp" src={club1} sx={{height: radius+'rem', width: radius+'rem' }} />
                <Avatar alt="Travis Howard" src={club2} sx={{height: radius+'rem', width: radius+'rem' }} />
                <Avatar alt="Cindy Baker" src={club3} sx={{height: radius+'rem', width: radius+'rem' }} />
            </Stack>
        </div>
    );
}

export default AvatarList;