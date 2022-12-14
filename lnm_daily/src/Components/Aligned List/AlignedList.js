import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MediaCell from "../../Assets/MediaCell.png";
import Quizzinga from "../../Assets/QUIZINGA.jpg";
import Astro from "../../Assets/Astro.jpg";
import "./AlignedList.css"

export default function AlignItemsList() {
  return (
    <div className='alignedlist'>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#e6ffff' }}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src = {MediaCell} />
            </ListItemAvatar>
            <ListItemText
            primary="Open Mic"
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                   7 pm Central Plaza
                </Typography>
                {" - Registrations open now!"}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Travis Howard" src= {Quizzinga}/>
            </ListItemAvatar>
            <ListItemText
            primary="Cricket Quiz"
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    For Y21
                </Typography>
                {" — Wish to see you in large numbers…"}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Cindy Baker" src={Astro} />
            </ListItemAvatar>
            <ListItemText
            primary="Star-Gazing"
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    12th September
                </Typography>
                {' — Astro Club invites you to Library Lawn…'}
                </React.Fragment>
            }
            />
        </ListItem>
        </List>
    </div>
  );
}
