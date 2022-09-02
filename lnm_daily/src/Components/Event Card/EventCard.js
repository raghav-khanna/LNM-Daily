import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PopUp from "../PopUp";
import "./EventCard.css"

const EventCard = ({ eventName, briefDetail, fullDetails, imagePath }) => {
  const [show, setShow] = React.useState(false);

  const showPopUp = () => {
    // <PopUp
    //   EventName={eventName}
    //   EventDetails={fullDetails}
    //   isRegister={true}
    // />
    setShow(true);
  };

  return (
    <div className="event_tile">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Required Image"
          height="140"
          image={imagePath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {eventName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {briefDetail}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" onClick={showPopUp}>
            
          </Button> */}
          <PopUp
            EventName={eventName}
            EventDetails={fullDetails}
            isRegister={true}
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default EventCard;
