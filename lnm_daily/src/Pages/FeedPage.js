import React from "react";
import Carousel from "../Components/Carousel";
import EventCard from "../Components/EventCard";
import "./FeedPage.css";

const FeedPage = () => {
  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598",
    },
    {
      label: "Bird",
      imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7",
    },
    {
      label: "Bali, Indonesia",
      imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    },
    {
      label: "Goč, Serbia",
      imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=800&h=500&q=60",
    },
  ];

  return (
    <div className="parent_feedpage">
      <div className="carousel_n_clubs">
        <div className="carousel">
          <Carousel imageList={images} customWidth={800}/>
          </div>
        <div className="temp"></div>
      </div>
      <EventCard
        imagePath={
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
        }
        briefDetail={
          "This is just brief detail of the event and what is it about and when it will happend"
        }
        fullDetails={
          "This is just brief detail of the event and what is it about and when it will happend. This is now full detail of the event and hence it can also be registered into. Please click on the Register button below to register for the event"
        }
        eventName={"Event Name"}
      />
    </div>
  );
};

export default FeedPage;
